import MeamiPreview from "@assets/images/projects/meami/preview-meami.webp";
import MeamiProof1 from "@assets/images/projects/meami/charte-graphique.webp";
import MeamiProof2 from "@assets/images/projects/meami/planche-images.webp";
import MeamiProof3 from "@assets/images/projects/meami/frame-liste-ingredients.webp";
import MeamiProof4 from "@assets/images/projects/meami/frame-liste-recettes.webp";
import MeamiProof5 from "@assets/images/projects/meami/frame-vue-calendrier.webp";
import MeamiProof6 from "@assets/images/projects/meami/frame-vue-liste.webp";
import MeamiProof7 from "@assets/images/projects/meami/frame-vue-modifier.webp";

import TeleconsultationPreview from "@assets/images/projects/teleconsultation/preview-teleconsultation.webp";
import AremacsPreview from "@assets/images/projects/aremacs/preview-aremacs.webp";

import { ProjectType } from "@types";

import fallbackImg from "@assets/images/fallback.webp";

import meamiData from "@constants/projectSheets/meami.json";
import teleconsultationData from "@constants/projectSheets/teleconsultation.json";
import aremacsData from "@constants/projectSheets/aremacs.json";

import ContextSlide from "@components/molecules/projects/slidesCarrousel/ContextSlide";
import ChallengesSlide from "@components/molecules/projects/slidesCarrousel/ChallengesSlide";
import ObjectivesSlide from "@components/molecules/projects/slidesCarrousel/ObjectivesSlide";
import TargetSlide from "@components/molecules/projects/slidesCarrousel/TargetSlide";
import DeliverablesConstraintsResourcesSlide from "@components/molecules/projects/slidesCarrousel/DeliverablesConstraintsResourcesSlide";
import PlanningSlide from "@components/molecules/projects/slidesCarrousel/PlanningSlide";
import ActionsSlide from "@components/molecules/projects/slidesCarrousel/ActionsSlide";
import ResultsSlide from "@components/molecules/projects/slidesCarrousel/ResultsSlide";
import ProofsSlide from "@components/molecules/projects/slidesCarrousel/ProofsSlides";
import ConclusionSlide from "@components/molecules/projects/slidesCarrousel/ConclusionSlide";

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
    preview: MeamiPreview,
    description: meamiData,
    proofs: [
      {
        list: [
          {
            name: "Charte graphique",
            type: "design/graphic",
            imgSrc: MeamiProof1,
          },
          {
            name: "Planche d’images",
            type: "design/graphic",
            imgSrc: MeamiProof2,
          },
          {
            name: "Maquette : Frame Liste des ingrédients",
            type: "design/ui-ux",
            imgSrc: MeamiProof3,
          },
          {
            name: "Maquette : Frame Liste des recettes",
            type: "design/ui-ux",
            imgSrc: MeamiProof4,
          },
          {
            name: "Maquette : Frame Vue Calendrier",
            type: "design/ui-ux",
            imgSrc: MeamiProof5,
          },
          {
            name: "Maquette : Vue Liste",
            type: "design/ui-ux",
            imgSrc: MeamiProof6,
          },
          {
            name: "Maquette : Vue Modifier",
            type: "design/ui-ux",
            imgSrc: MeamiProof7,
          },
        ],
      },
    ],
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
    preview: TeleconsultationPreview,
    description: teleconsultationData,
    proofs: [
      {
        list: [
          {
            name: "App Store",
            type: "application/mobile",
            imgSrc: fallbackImg,
          },
          {
            name: "Google Play",
            type: "application/mobile",
            imgSrc: fallbackImg,
          },
        ],
      },
    ],
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
    preview: AremacsPreview,
    description: aremacsData,
    proofs: [
      {
        list: [
          {
            name: "App Store",
            type: "application/mobile",
            imgSrc: fallbackImg,
          },
          {
            name: "Google Play",
            type: "application/mobile",
            imgSrc: fallbackImg,
          },
        ],
      },
    ],
  },
];

export const projectsSlides = {
  context: ContextSlide,
  challenges: ChallengesSlide,
  objectives: ObjectivesSlide,
  target: TargetSlide,
  deliverablesConstraintsResources: DeliverablesConstraintsResourcesSlide,
  planning: PlanningSlide,
  actions: ActionsSlide,
  results: ResultsSlide,
  proofs: ProofsSlide,
  conclusion: ConclusionSlide,
};

export const keysOrder = [
  "context",
  "challenges",
  "objectives",
  "target",
  "deliverablesConstraintsResources",
  "planning",
  "actions",
  "results",
  "proofs",
  "conclusion",
];

