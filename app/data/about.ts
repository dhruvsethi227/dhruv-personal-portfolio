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
    "I'm a software engineer in the defense industry. I started at Lockheed Martin Skunk Works building mission-critical flight software, and now focus on full-stack applications across the enterprise — spanning aerospace products, backend optimization, and CI/CD infrastructure.",
    "Outside of work, I was a 4-year starter on the UT Austin Men's Soccer Team and enjoy playing the piano.",
  ],
  interests: [
    {
      label: "Mission-Critical Software",
      description: "Building software that works in the field — real-time systems, operator-facing tools, and products where failure isn't an option.",
      icon: "🛰️",
    },
    {
      label: "Defense & National Security Tech",
      description: "Passionate about applying modern software to hard national security problems. Skunk Works taught me what's possible when you build with urgency and purpose.",
      icon: "✈️",
    },
    {
      label: "Applied AI & Data",
      description: "Turning complex operational data into decisions — forecasting models, computer vision pipelines, and analytics that surface what matters.",
      icon: "⚙️",
    },
    {
      label: "Soccer",
      description: "4-year starter on the UT Austin Men's Soccer Team. Still play competitively — high-performance teams are something I think about on and off the field.",
      icon: "⚽",
    },
  ],
};
