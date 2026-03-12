import { careerHighlights } from '../data/career';
import { aboutData } from '../data/about';
import { resumeData } from '../data/resume';

export function buildContext(): string {
  const sections: string[] = [];

  // BIO
  sections.push('## BIO\n' + aboutData.bio.join('\n\n'));

  // INTERESTS
  const interests = aboutData.interests
    .map((i) => `- ${i.label}: ${i.description}`)
    .join('\n');
  sections.push('## INTERESTS\n' + interests);

  // CAREER
  const career = careerHighlights
    .map((e) => {
      const lines = [
        `### ${e.title} at ${e.company}`,
        `${e.startDate} – ${e.endDate}${e.location ? ` | ${e.location}` : ''}`,
      ];
      if (e.description) lines.push(e.description);
      if (e.tags?.length) lines.push(`Tags: ${e.tags.join(', ')}`);
      return lines.join('\n');
    })
    .join('\n\n');
  sections.push('## CAREER\n' + career);

  // SKILLS
  const skills = resumeData.skillGroups
    .map((g) => `- ${g.label}: ${g.skills.join(', ')}`)
    .join('\n');
  sections.push('## SKILLS\n' + skills);

  // EDUCATION
  const education = resumeData.education
    .map((e) => {
      const line = `- ${e.degree}, ${e.institution} (${e.year})${e.notes ? ` — ${e.notes}` : ''}`;
      return line;
    })
    .join('\n');
  sections.push('## EDUCATION\n' + education);

  return sections.join('\n\n');
}
