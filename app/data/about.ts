export type Interest = {
  label: string;
  description: string;
  icon?: string;
};

export type AboutData = {
  bio: string[];
  interests: Interest[];
};

export const aboutData: AboutData = {
  bio: [
    "I'm a software engineer working at the intersection of aerospace systems and modern software. I build tools that help teams make better decisions, faster — whether that's flight software, data pipelines, or internal platforms.",
    "Outside of work, I'm passionate about soccer at every level: playing, coaching, watching, and thinking about the game analytically. I've played competitively most of my life and believe team sports are one of the best teachers of collaboration and resilience.",
    "I'm based in the United States and enjoy working on hard problems where software meets the physical world.",
  ],
  interests: [
    {
      label: "Aerospace Systems",
      description: "Flight software, mission planning, and the engineering discipline required to ship reliable systems.",
      icon: "🛰️",
    },
    {
      label: "Soccer",
      description: "Playing, coaching, and analyzing the beautiful game. Fan of tactical evolution and data-driven scouting.",
      icon: "⚽",
    },
    {
      label: "Systems Engineering",
      description: "Designing software that interacts with the physical world — real-time constraints, hardware interfaces, reliability.",
      icon: "⚙️",
    },
    {
      label: "Developer Tooling",
      description: "Building internal platforms and workflows that make engineering teams dramatically more productive.",
      icon: "🛠️",
    },
    {
      label: "Space Exploration",
      description: "The long-term future of humanity in space. Fascinated by the engineering and policy challenges ahead.",
      icon: "🚀",
    },
    {
      label: "Team Building",
      description: "Mentoring engineers, fostering cultures of ownership, and learning how great teams operate under pressure.",
      icon: "🤝",
    },
  ],
};
