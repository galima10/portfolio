import { skills } from "@constants/skills";

export const strokeWidth = {
  heavy: 4,
};

export const headerNavLinks = [
  { label: "Présentation", link: "/#presentation" },
  { label: "Compétences", link: "/#skills" },
  { label: "Outils & Technos", link: "/#technos" },
  { label: "Mes projets", link: "/#projects" },
  { label: "Me contacter", link: "#contactForm", isCTA: true },
];

export const footerNavLinks = [
  { label: "Présentation", link: "/#presentation" },
  { label: "Compétences", link: "/#skills" },
  { label: "Outils & Technos", link: "/#technos" },
  { label: "Mes projets", link: "/#projects" },
  { label: "Me contacter", link: "#contactForm",},
];

export const projectTitleDesc = {
  context: "Contexte",
  challenges: "Enjeux",
  objectives: "Objectifs",
  target: "Public cible",
  deliverablesConstraintsResources: "Éléments clés",
  planning: "Déroulement",
  actions: "Mes actions",
  results: "Résultats",
  proofs: "Preuves",
  conclusion: "Retour réflexif",
}

export const translationsProjects = {
  category: "Catégorie",
  sector: "Filière",
  type: "Type",
  customer: "Commanditaire",
  summaryInfos: "Résumé",
  project: "Projet",
  personal: "Personnel",
  main: "Obj. principal",
  key1: "Obj. clé 1",
  key2: "Obj. clé 2",
  secondary: "Obj. secondaire",
  principal: "Public principal",
  relay: "Cible secondaire",
  deliverables: "Livrables",
  constraints: "Contraintes",
  resources: "Ressources",
  name: "Nom",
  format: "Format",
  goal: "Objectif",
  specificities: "Spécificités",
  technologies: "Technologies",
  temporal: "Temporelles",
  technical: "Techniques",
  budget: "Budgétaires",
  graphic: "Graphiques",
  geographic: "Géographiques",
  available: "Disponibles",
  missing: "Manquantes",
  missions: "Missions",
  tools: "Outils",
  skills: "Compétences",
}

export const sectionsIds = {
  main: {
    hero: "hero",
    presentation: "presentation",
    afterPresentation: "afterPresentation",
    skills: "skills",
    technos: {
      main: "technos",
      languages: "languages",
      frameworks: "frameworks",
      tools: "tools",
      discussed: "discussed",
    },
    afterSkills: "afterSkills",
    projects: {
      main: "projects",
      project1: "project-1",
      project2: "project-2",
      project3: "project-3",
    },
    afterProjects: "afterProjects",
    contactForm: "contactForm",
  },
  projects: {
    hero: "hero",
    projectCarrousel: {
      main:"projectCarrousel",
      context: "carrousel-context",
      challenges: "carrousel-challenges",
      objectives: "carrousel-objectives",
      target: "carrousel-target",
      deliverablesConstraintsResources: "carrousel-deliverablesConstraintsResources",
      planning: "carrousel-planning",
      actions: "carrousel-actions",
      results: "carrousel-results",
      proofs: "carrousel-proofs",
      conclusion: "carrousel-conclusion",
    },
    projectCTA: "projectCTA",
    contactForm: "contactForm",
  }
}