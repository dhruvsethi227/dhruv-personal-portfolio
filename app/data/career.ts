/**
 * Career highlights – copy from your LinkedIn Experience section.
 * Add one object per role; title, company, startDate, endDate match LinkedIn.
 * Use "Present" for current role. Optional: location, description, tags.
 */

export type CareerEntry = {
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string; // e.g. "Present" for current role
  description?: string;
  tags?: string[];
};

export const careerHighlights: CareerEntry[] = [
  {
    title: "Software Engineer",
    company: "[Aerospace Company]",
    startDate: "[Start]",
    endDate: "Present",
    description:
      "Add your role description from LinkedIn here. Focus on key responsibilities and impact.",
    tags: ["Aerospace", "Systems", "TypeScript"],
  },
  // Paste additional roles from LinkedIn below. Example:
  // {
  //   title: "Previous Role Title",
  //   company: "Company Name",
  //   location: "City, State",
  //   startDate: "Month Year",
  //   endDate: "Month Year",
  //   description: "Brief description or key achievements.",
  //   tags: ["Tag1", "Tag2"],
  // },
];
