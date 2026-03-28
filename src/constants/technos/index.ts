import { TechnoItem } from "@types";

export const technosList: {
  languages: TechnoItem[];
  frameworks: TechnoItem[];
  tools: TechnoItem[];
  discussed: TechnoItem[];
} = {
  languages: [
    {
      name: "HTML",
      type: "frontend",
      cell: {
        row: 5,
        col: 9,
      },
    },
    {
      name: "CSS",
      type: "frontend",
      cell: {
        row: 17,
        col: 5,
      },
    },
    {
      name: "JavaScript",
      type: "fullstack",
      cell: {
        row: 11,
        col: 20,
      },
    },
    {
      name: "TypeScript",
      type: "fullstack",
      cell: {
        row: 13,
        col: 12,
      },
    },
    {
      name: "PHP",
      type: "backend",
      cell: {
        row: 10,
        col: 6,
      },
    },
    {
      name: "SQL",
      type: "database",
      cell: {
        row: 7,
        col: 15,
      },
    },
  ],
  frameworks: [
    {
      name: "React",
      type: "frontend",
      cell: {
        row: 16,
        col: 15,
      },
    },
    {
      name: "Sass",
      type: "frontend",
      cell: {
        row: 10,
        col: 6,
      },
    },
    {
      name: "SQLite",
      type: "database",
      cell: {
        row: 5,
        col: 15,
      },
    },
    {
      name: "MySQL",
      type: "database",
      cell: {
        row: 18,
        col: 3,
      },
    },
  ],
  tools: [
    {
      name: "Elementor",
      type: "frontend",
      cell: {
        row: 19,
        col: 7,
      },
    },
    {
      name: "Expo",
      type: "tool",
      cell: {
        row: 7,
        col: 9,
      },
    },
    {
      name: "Github",
      type: "tool",
      cell: {
        row: 12,
        col: 11,
      },
    },
    {
      name: "Node",
      type: "backend",
      cell: {
        row: 12,
        col: 16,
      },
    },
    {
      name: "Postman",
      type: "tool",
      cell: {
        row: 7,
        col: 14,
      },
    },
    {
      name: "Wordpress",
      type: "tool",
      cell: {
        row: 3,
        col: 18,
      },
    },
    {
      name: "Vite",
      type: "frontend",
      cell: {
        row: 9,
        col: 19,
      },
    },
    {
      name: "WampServer",
      type: "tool",
      cell: {
        row: 12,
        col: 5,
      },
    },
    {
      name: "Railway",
      type: "tool",
      cell: {
        row: 18,
        col: 12,
      },
    },
  ],
  discussed: [
    {
      name: "Bootstrap",
      type: "frontend",
      cell: {
        row: 20,
        col: 2,
      },
    },
    {
      name: "Express",
      type: "backend",
      cell: {
        row: 6,
        col: 1,
      },
    },
    {
      name: "Jest",
      type: "tool",
      cell: {
        row: 16,
        col: 12,
      },
    },
    {
      name: "Prisma",
      type: "database",
      cell: {
        row: 8,
        col: 8,
      },
    },
    {
      name: "Supabase",
      type: "database",
      cell: {
        row: 16,
        col: 21,
      },
    },
    {
      name: "Three",
      type: "frontend",
      cell: {
        row: 9,
        col: 18,
      },
    },
    {
      name: "Symfony",
      type: "backend",
      cell: {
        row: 1,
        col: 16,
      },
    },
  ],
};
