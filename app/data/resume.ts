export type EducationEntry = {
  degree: string;
  institution: string;
  year: string;
  notes?: string;
};

export type SkillGroup = {
  label: string;
  skills: string[];
};

export type Certification = {
  name: string;
  issuer: string;
  year?: string;
};

export type ResumeData = {
  pdfPath: string;
  education: EducationEntry[];
  skillGroups: SkillGroup[];
  certifications?: Certification[];
};

export const resumeData: ResumeData = {
  pdfPath: "/resume.pdf",
  education: [
    {
      degree: "B.S. Computer Science",
      institution: "[University Name]",
      year: "[Year]",
      notes: "Focus on systems and software engineering.",
    },
  ],
  skillGroups: [
    {
      label: "Languages",
      skills: ["Python", "TypeScript", "C++", "Rust", "SQL"],
    },
    {
      label: "Frameworks & Tools",
      skills: ["Next.js", "React", "Node.js", "FastAPI", "Docker", "Git"],
    },
    {
      label: "Aerospace & Systems",
      skills: ["Flight Software", "Real-time Systems", "ARINC 429", "MIL-STD-1553", "Systems Engineering"],
    },
    {
      label: "Infrastructure",
      skills: ["AWS", "Linux", "CI/CD", "PostgreSQL", "Redis"],
    },
  ],
  certifications: [],
};
