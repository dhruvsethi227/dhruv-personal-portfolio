// One-time script: extracts thumbnails, uploads all clips + thumbs to Vercel Blob,
// then writes the populated highlights.ts data file.
//
// Prerequisites:
//   1. Run `vercel env pull .env.local` so BLOB_READ_WRITE_TOKEN is available
//   2. Run `node scripts/upload-highlights.mjs` from the project root
//
// Clips are read from ~/Desktop/soccer_clips/{bangers,skills,speed_boost}/*.mp4
// Thumbnails are extracted via macOS qlmanage (no ffmpeg needed).

import { put } from '@vercel/blob';
import { execSync } from 'child_process';
import { readdirSync, readFileSync, createReadStream, mkdirSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import { homedir, tmpdir } from 'os';

// Load .env.local into process.env
try {
  readFileSync('.env.local', 'utf8').split('\n').forEach(line => {
    const eq = line.indexOf('=');
    if (eq === -1 || line.startsWith('#')) return;
    const k = line.slice(0, eq).trim();
    const v = line.slice(eq + 1).trim().replace(/^["']|["']$/g, '');
    if (k) process.env[k] = v;
  });
} catch {
  // .env.local not found — BLOB_READ_WRITE_TOKEN must already be in env
}

const hasStaticToken = !!process.env.BLOB_READ_WRITE_TOKEN;
const hasOidcAuth = !!(process.env.VERCEL_OIDC_TOKEN && process.env.BLOB_STORE_ID);

if (!hasStaticToken && !hasOidcAuth) {
  console.error('❌ No Blob credentials found. Run: vercel env pull .env.local');
  console.error('   Expected: BLOB_READ_WRITE_TOKEN  OR  (VERCEL_OIDC_TOKEN + BLOB_STORE_ID)');
  process.exit(1);
}

const authMode = hasStaticToken ? 'static token' : 'OIDC';
console.log(`🔑 Using Blob auth: ${authMode}`);

const CLIPS_DIR = join(homedir(), 'Desktop', 'soccer_clips');
const THUMB_DIR = join(tmpdir(), 'highlights-thumbs');
const CATEGORIES = ['bangers', 'skills', 'speed_boost'];

mkdirSync(THUMB_DIR, { recursive: true });

const entries = [];

for (const category of CATEGORIES) {
  const categoryDir = join(CLIPS_DIR, category);

  if (!existsSync(categoryDir)) {
    console.warn(`⚠️  Category directory not found, skipping: ${categoryDir}`);
    continue;
  }

  const files = readdirSync(categoryDir)
    .filter(f => f.endsWith('.mp4'))
    .sort();

  console.log(`\n📂 ${category} — ${files.length} clips`);

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const filePath = join(categoryDir, file);
    const id = `${category}-${i + 1}`;
    const blobVideoPath = `highlights/${category}/${id}.mp4`;
    const blobThumbPath = `highlights/thumbs/${id}.png`;

    // Extract thumbnail with macOS Quick Look
    console.log(`  [${id}] Extracting thumbnail...`);
    try {
      execSync(`qlmanage -t -s 800 -o "${THUMB_DIR}" "${filePath}"`, {
        stdio: 'pipe',
        timeout: 15000,
      });
    } catch {
      console.warn(`  [${id}] qlmanage warning (may still have produced output)`);
    }
    const thumbSrc = join(THUMB_DIR, `${file}.png`);

    if (!existsSync(thumbSrc)) {
      console.error(`  [${id}] ❌ Thumbnail not generated at: ${thumbSrc}`);
      console.error(`  Try running manually: qlmanage -t -s 800 -o "${THUMB_DIR}" "${filePath}"`);
      process.exit(1);
    }

    // Upload video
    console.log(`  [${id}] Uploading video...`);
    const videoBlob = await put(blobVideoPath, createReadStream(filePath), {
      access: 'public',
      addRandomSuffix: false,
    });

    // Upload thumbnail
    console.log(`  [${id}] Uploading thumbnail...`);
    const thumbBlob = await put(blobThumbPath, createReadStream(thumbSrc), {
      access: 'public',
      addRandomSuffix: false,
    });

    const label = category.replace('_', ' ');
    const title = `${label.charAt(0).toUpperCase() + label.slice(1)} #${i + 1}`;

    entries.push({ id, title, category, videoUrl: videoBlob.url, thumbnailUrl: thumbBlob.url });
    console.log(`  ✓ ${id}: ${videoBlob.url}`);
  }
}

// Generate the updated highlights.ts content
const tsContent = `export type HighlightCategory = 'bangers' | 'skills' | 'speed_boost';

export interface Highlight {
  id: string;
  title: string;
  category: HighlightCategory;
  date?: string;
  videoUrl: string;
  thumbnailUrl: string;
}

export const categoryLabels: Record<HighlightCategory, string> = {
  bangers: 'Bangers',
  skills: 'Skills',
  speed_boost: 'Speed Boost',
};

export const highlights: Highlight[] = ${JSON.stringify(entries, null, 2)};
`;

writeFileSync('./app/data/highlights.ts', tsContent);
console.log(`\n✅ Done! highlights.ts written with ${entries.length} entries.`);
console.log('   Edit app/data/highlights.ts to give each clip a descriptive title.');
