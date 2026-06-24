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

  // EXPERIENCE (full detail from resumeData)
  const experience = resumeData.experience
    .map((entry) => {
      const header = `### ${entry.title} at ${entry.company} | ${entry.location}\n${entry.period}`;
      const roles = entry.roles
        .map((role) => {
          const bullets = role.bullets.map((b) => `  - ${b}`).join('\n');
          return `**${role.team}** (${role.period})\n${bullets}`;
        })
        .join('\n\n');
      return `${header}\n\n${roles}`;
    })
    .join('\n\n');
  sections.push('## EXPERIENCE\n' + experience);

  // PROJECTS
  const projects = resumeData.projects
    .map((p) => {
      const bullets = p.bullets.map((b) => `  - ${b}`).join('\n');
      return `### ${p.name} | ${p.role}\n${bullets}`;
    })
    .join('\n\n');
  sections.push('## PROJECTS\n' + projects);

  // SKILLS
  const skills = resumeData.skillGroups
    .map((g) => `- ${g.label}: ${g.skills.join(', ')}`)
    .join('\n');
  sections.push('## SKILLS\n' + skills);

  // EDUCATION
  const education = resumeData.education
    .map((e) => `- ${e.degree}, ${e.institution}${e.location ? ` — ${e.location}` : ''}`)
    .join('\n');
  sections.push('## EDUCATION\n' + education);

  return sections.join('\n\n');
}
