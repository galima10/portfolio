export const projects: {
  id: string;
  slug: string;
  name: string;
  island: "island1" | "island2" | "island3";
  hook: string;
  label: string;
  stack: {
    label: string;
    icon: "typescript" | "react" | "expo" | "jest" | "supabase" | "bootstrap" | "html" | "css" | "javascript";
  }[];
  description: string;
}[] = [
  {
    id: "Projet 1",
    slug: "meami",
    name: "Meam¡",
    island: "island1",
    hook: "Une aventure pas comme les autres, où je trace seule le chemin d’un projet qui m’appartient.",
    label: "Personnel — Dév. web — Appli. mobile",
    stack: [
      {
        label: "TypeScript",
        icon: "typescript",
      },
      {
        label: "React Native",
        icon: "react",
      },
      {
        label: "Expo",
        icon: "expo",
      },
      {
        label: "Jest",
        icon: "jest",
      },
    ],
    description: "Description du projet Meam¡...",
  },
  {
    id: "Projet 2",
    slug: "teleconsultation",
    name: "Téléconsultation",
    island: "island2",
    hook: "Quand le code connecte patients et professionnels, chaque ligne rend les soins plus accessibles.",
    label: "Professionnel — Dév. web — Plateforme web",
    stack: [
      {
        label: "TypeScript",
        icon: "typescript",
      },
      {
        label: "React",
        icon: "react",
      },
      {
        label: "Supabase",
        icon: "supabase",
      },
      {
        label: "Bootstrap",
        icon: "bootstrap",
      },
    ],
    description: "Description du projet Téléconsultation...",
  },
  {
    id: "Projet 3",
    slug: "aremacs",
    name: "Aremacs",
    island: "island3",
    hook: "Derrière chaque clic se cache une question éthique, là où le code rencontre les valeurs humaines.",
    label: "Académique — Dév. web & UX/UI — Refonte d’interface",
    stack: [
      {
        label: "HTML",
        icon: "html",
      },
      {
        label: "CSS",
        icon: "css",
      },
      {
        label: "JavaScript",
        icon: "javascript",
      },
    ],
    description: "Description du projet Aremacs...",
  },
];