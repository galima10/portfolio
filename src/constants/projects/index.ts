import Meami from "@assets/images/projects/boeuf_citronnelle.webp";
import Teleconsultation from "@assets/images/projects/canard_laque.webp";
import Aremacs from "@assets/images/projects/st_jacques.webp";

import { ProjectType } from "@types";

import meamiData from "@constants/projectSheets/meami.json";
import teleconsultationData from "@constants/projectSheets/teleconsultation.json";
import aremacsData from "@constants/projectSheets/aremacs.json";

export const projects: ProjectType[] = [
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
    preview: Meami,
    description: meamiData,
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
    preview: Teleconsultation,
    description: teleconsultationData,
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
    preview: Aremacs,
    description: aremacsData,
  },
];
