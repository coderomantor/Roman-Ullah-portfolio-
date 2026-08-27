export type FeaturedProject = {
  title: string;
  number: string;
  category: string;
  description: string;
  role: string;
  year: string;
  platform: readonly string[];
};

export const alvinaProject = {
  title: "ALVINA",
  number: "01",
  category: "Multi-agent AI assistant",
  description:
    "A multi-agent AI assistant built around task routing, persistent context, tool use and real-world integrations.",
  role: "Contributor",
  year: "2026",
  platform: ["Next.js", "NestJS", "Python", "PostgreSQL", "Redis"],
} as const satisfies FeaturedProject;
