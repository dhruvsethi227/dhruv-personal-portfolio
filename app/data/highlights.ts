export type HighlightCategory = 'bangers' | 'skills' | 'speed_boost';

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

export const highlights: Highlight[] = [
  {
    "id": "bangers-1",
    "title": "Bangers #1",
    "category": "bangers",
    "videoUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/bangers/bangers-1.mp4",
    "thumbnailUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/thumbs/bangers-1.png"
  },
  {
    "id": "bangers-2",
    "title": "Bangers #2",
    "category": "bangers",
    "videoUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/bangers/bangers-2.mp4",
    "thumbnailUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/thumbs/bangers-2.png"
  },
  {
    "id": "bangers-3",
    "title": "Bangers #3",
    "category": "bangers",
    "videoUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/bangers/bangers-3.mp4",
    "thumbnailUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/thumbs/bangers-3.png"
  },
  {
    "id": "bangers-4",
    "title": "Bangers #4",
    "category": "bangers",
    "videoUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/bangers/bangers-4.mp4",
    "thumbnailUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/thumbs/bangers-4.png"
  },
  {
    "id": "bangers-5",
    "title": "Bangers #5",
    "category": "bangers",
    "videoUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/bangers/bangers-5.mp4",
    "thumbnailUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/thumbs/bangers-5.png"
  },
  {
    "id": "bangers-6",
    "title": "Bangers #6",
    "category": "bangers",
    "videoUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/bangers/bangers-6.mp4",
    "thumbnailUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/thumbs/bangers-6.png"
  },
  {
    "id": "bangers-7",
    "title": "Bangers #7",
    "category": "bangers",
    "videoUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/bangers/bangers-7.mp4",
    "thumbnailUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/thumbs/bangers-7.png"
  },
  {
    "id": "bangers-8",
    "title": "Bangers #8",
    "category": "bangers",
    "videoUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/bangers/bangers-8.mp4",
    "thumbnailUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/thumbs/bangers-8.png"
  },
  {
    "id": "bangers-9",
    "title": "Bangers #9",
    "category": "bangers",
    "videoUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/bangers/bangers-9.mp4",
    "thumbnailUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/thumbs/bangers-9.png"
  },
  {
    "id": "bangers-10",
    "title": "Bangers #10",
    "category": "bangers",
    "videoUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/bangers/bangers-10.mp4",
    "thumbnailUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/thumbs/bangers-10.png"
  },
  {
    "id": "bangers-11",
    "title": "Bangers #11",
    "category": "bangers",
    "videoUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/bangers/bangers-11.mp4",
    "thumbnailUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/thumbs/bangers-11.png"
  },
  {
    "id": "bangers-12",
    "title": "Bangers #12",
    "category": "bangers",
    "videoUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/bangers/bangers-12.mp4",
    "thumbnailUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/thumbs/bangers-12.png"
  },
  {
    "id": "skills-1",
    "title": "Skills #1",
    "category": "skills",
    "videoUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/skills/skills-1.mp4",
    "thumbnailUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/thumbs/skills-1.png"
  },
  {
    "id": "skills-2",
    "title": "Skills #2",
    "category": "skills",
    "videoUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/skills/skills-2.mp4",
    "thumbnailUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/thumbs/skills-2.png"
  },
  {
    "id": "skills-3",
    "title": "Skills #3",
    "category": "skills",
    "videoUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/skills/skills-3.mp4",
    "thumbnailUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/thumbs/skills-3.png"
  },
  {
    "id": "skills-4",
    "title": "Skills #4",
    "category": "skills",
    "videoUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/skills/skills-4.mp4",
    "thumbnailUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/thumbs/skills-4.png"
  },
  {
    "id": "skills-5",
    "title": "Skills #5",
    "category": "skills",
    "videoUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/skills/skills-5.mp4",
    "thumbnailUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/thumbs/skills-5.png"
  },
  {
    "id": "skills-6",
    "title": "Skills #6",
    "category": "skills",
    "videoUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/skills/skills-6.mp4",
    "thumbnailUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/thumbs/skills-6.png"
  },
  {
    "id": "speed_boost-1",
    "title": "Speed boost #1",
    "category": "speed_boost",
    "videoUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/speed_boost/speed_boost-1.mp4",
    "thumbnailUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/thumbs/speed_boost-1.png"
  },
  {
    "id": "speed_boost-2",
    "title": "Speed boost #2",
    "category": "speed_boost",
    "videoUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/speed_boost/speed_boost-2.mp4",
    "thumbnailUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/thumbs/speed_boost-2.png"
  },
  {
    "id": "speed_boost-3",
    "title": "Speed boost #3",
    "category": "speed_boost",
    "videoUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/speed_boost/speed_boost-3.mp4",
    "thumbnailUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/thumbs/speed_boost-3.png"
  },
  {
    "id": "speed_boost-4",
    "title": "Speed boost #4",
    "category": "speed_boost",
    "videoUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/speed_boost/speed_boost-4.mp4",
    "thumbnailUrl": "https://j5ipqt82plkuzgzu.public.blob.vercel-storage.com/highlights/thumbs/speed_boost-4.png"
  }
];
