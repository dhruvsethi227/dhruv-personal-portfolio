export type EducationEntry = {
  degree: string;
  institution: string;
  location: string;
  year?: string;
  notes?: string;
};

export type ExperienceRole = {
  team: string;
  period: string;
  bullets: string[];
};

export type ExperienceEntry = {
  company: string;
  title: string;
  period: string;
  location: string;
  roles: ExperienceRole[];
};

export type Project = {
  name: string;
  role: string;
  bullets: string[];
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
  experience: ExperienceEntry[];
  projects: Project[];
  skillGroups: SkillGroup[];
  certifications?: Certification[];
};

export const resumeData: ResumeData = {
  pdfPath: "/resume.pdf",

  education: [
    {
      degree: "Bachelor of Science in Computer Science, Minor in Business Administration",
      institution: "The University of Texas at Austin",
      location: "Austin, TX",
    },
  ],

  experience: [
    {
      company: "Lockheed Martin",
      title: "Software Engineer II",
      period: "Aug 2023 – Present",
      location: "Los Angeles, CA",
      roles: [
        {
          team: "Enterprise Operations | Virtual Program Assistant (VPA)",
          period: "Sept 2025 – Present",
          bullets: [
            "Leading development of Portfolio Performance, a full-stack feature that applies AI forecasting to aggregated schedule, cost, and financial data to predict on-time, on-budget completion and surface at-risk task end dates across 1,500+ programs.",
            "Designed REST APIs and dimensional data models that turned raw contract data into analytics-ready schemas, serving SPI/BEI/CPLI metrics to real-time dashboards at sub-2-second latency across all business units.",
            "Designed and enforced role-based access control across the stack, implementing backend permission logic, secured API endpoints, and role-aware UI to protect sensitive program data across 15 user roles.",
            "Consolidated the SPI/CPI data model from ETL staging data, eliminating 10+ redundant API calls per page for faster dashboard rendering.",
          ],
        },
        {
          team: "Skunk Works (Aeronautics) | Ground Control Systems",
          period: "Aug 2023 – Sept 2025",
          bullets: [
            "Partnered directly with pilots and operators to translate ambiguous mission requirements into production software across 10+ vehicle subsystems (Python, C++, Lua), owning features from design through live operator validation.",
            "Re-architected the Ground Vehicle Management System backend around an event-driven design, decoupling subsystems and refactoring legacy code to cut processing runtime by 37%.",
            "Authored 1,500+ Lua and C++ unit tests on virtualized RHEL/VMware runners, lifting branch coverage to 98% and hardening mission-critical systems against regressions.",
            "Drove the operator feedback loop by demoing integrated ground-and-air capabilities and folding real-time operator input into the next iteration, catching usability gaps before deployment.",
            "Built a CI/CD pipeline (GitLab, Artifactory, Python) that automated build, test, and deployment, cutting release time from 2 hours to 30 minutes (a 75% reduction) and enabling more frequent, lower-risk releases.",
            "Reverse-engineered an undocumented Python/C++ audio subsystem by mapping its data structures and prototyping integrations, adding operator alerting and delivering the MVP 2 weeks ahead of schedule.",
          ],
        },
        {
          team: "Aero AI | Autonomous AI-Enabled Inspector (ML Stretch Assignment)",
          period: "Sept 2025 – Dec 2025",
          bullets: [
            "Trained a single-stage object-detection model (computer vision) to localize aircraft control points in high-resolution imagery, cutting manual inspection effort by 20%.",
            "Built the end-to-end Python ML pipeline spanning labeled-dataset generation, datalake ingestion, training, and inference/evaluation, feeding a 3D reconstruction workflow that achieved 0.05–0.075 m localization accuracy.",
          ],
        },
      ],
    },
    {
      company: "PepsiCo",
      title: "Software Engineer Intern",
      period: "May 2022 – Aug 2022",
      location: "Dallas, TX",
      roles: [
        {
          team: "Enterprise App Development | 1st Place PepsiCo Intern Challenge",
          period: "May 2022 – Aug 2022",
          bullets: [
            "Built React/Node.js API tooling that optimized data queries, cutting response time by up to 70%.",
            "Built and shipped an MVP meeting-room reservation app (Python/Flask) for 150+ users, winning 1st place in the PepsiCo Intern Challenge.",
          ],
        },
      ],
    },
    {
      company: "Sandia National Laboratories",
      title: "Software Engineer Intern",
      period: "May 2021 – Apr 2022",
      location: "Remote",
      roles: [
        {
          team: "Knowledge Systems (FileNet)",
          period: "May 2021 – Apr 2022",
          bullets: [
            "Built a full-stack app on IBM FileNet APIs that automated document parsing, improving data-retrieval speed by 55%.",
            "Provisioned AWS infrastructure (EC2, S3) as code with Terraform and Python, supporting scalable, repeatable document-processing workflows.",
          ],
        },
      ],
    },
  ],

  projects: [
    {
      name: "Soccer Starz AI Analytics",
      role: "AI Developer",
      bullets: [
        "Took the project 0-to-1 from an ambiguous concept, owning scope, success metrics, and architecture, then building a forecasting model (PyTorch, scikit-learn) on 250,000+ player stats.",
        "Built an OpenCV pipeline to track player movement (speed, positioning, formation) from match video, and evaluated forecasts against actual performance data, improving accuracy 35% from the initial workflow.",
        "Orchestrated AI coding agents to accelerate development, directing and reviewing output across the data, model, and inference layers.",
      ],
    },
  ],

  skillGroups: [
    {
      label: "Languages",
      skills: ["Python", "C++", "Java", "JavaScript/TypeScript", "SQL", "Lua", "Bash"],
    },
    {
      label: "Web & Backend",
      skills: ["React", "Node.js", "Express", "Django", "REST APIs", "HTML/CSS"],
    },
    {
      label: "Cloud & DevOps",
      skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "GitLab CI/CD", "Linux"],
    },
    {
      label: "Data & AI/ML",
      skills: ["PyTorch", "scikit-learn", "OpenCV", "Pandas", "NumPy", "LLMs", "dimensional modeling", "MongoDB"],
    },
  ],

  certifications: [],
};
