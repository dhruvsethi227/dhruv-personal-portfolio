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
    title: "Software Engineer II — Enterprise Operations (VPA)",
    company: "Lockheed Martin",
    location: "Los Angeles, CA",
    startDate: "Sept 2025",
    endDate: "Present",
    description:
      "Leading development of Portfolio Performance, a full-stack AI forecasting feature that surfaces at-risk tasks across 1,500+ programs. Designed REST APIs and dimensional data models serving SPI/BEI/CPLI metrics to real-time dashboards at sub-2-second latency.",
    tags: ["Full-Stack", "AI/ML", "REST APIs", "RBAC"],
  },
  {
    title: "Software Engineer II — Skunk Works, Ground Control Systems",
    company: "Lockheed Martin",
    location: "Los Angeles, CA",
    startDate: "Aug 2023",
    endDate: "Sept 2025",
    description:
      "Built production flight software across 10+ vehicle subsystems (Python, C++, Lua) in direct partnership with pilots and operators. Re-architected the Ground Vehicle Management System backend to cut processing runtime by 37% and built a CI/CD pipeline that reduced release time by 75%.",
    tags: ["Python", "C++", "Lua", "CI/CD", "Flight Software"],
  },
  {
    title: "Software Engineer Intern",
    company: "PepsiCo",
    location: "Dallas, TX",
    startDate: "May 2022",
    endDate: "Aug 2022",
    description:
      "Built React/Node.js API tooling that cut data query response time by 70%. Shipped an MVP meeting-room reservation app (Python/Flask) for 150+ users, winning 1st place in the PepsiCo Intern Challenge.",
    tags: ["React", "Node.js", "Python", "Flask"],
  },
  {
    title: "Software Engineer Intern",
    company: "Sandia National Laboratories",
    location: "Remote",
    startDate: "May 2021",
    endDate: "Apr 2022",
    description:
      "Built a full-stack app on IBM FileNet APIs that automated document parsing and improved data-retrieval speed by 55%. Provisioned AWS infrastructure (EC2, S3) as code with Terraform and Python.",
    tags: ["AWS", "Terraform", "Python", "FileNet"],
  },
];
