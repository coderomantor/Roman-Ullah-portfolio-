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

export const employeeVerificationProject = {
  titleLines: ["Employee", "Verification", "Platform"],
  number: "02",
  label: "Production work",
  category: "Workforce verification system",
  description:
    "A production workforce verification platform built around QR access, worker validation, secure admin management and persistent production data.",
  role: "Full-stack development",
  type: "Client / production system",
  year: "2026",
  platform: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Vercel"],
} as const;

export const hoshProject = {
  title: "HOSH",
  number: "03",
  label: "Product in development",
  category: "Mindful Android launcher",
  status: "In development",
  description:
    "A minimal Android launcher designed to reduce digital distraction and make everyday phone use more intentional.",
  role: "Product development",
  year: "2026",
  platform: ["Kotlin", "Jetpack Compose", "Android"],
} as const;
