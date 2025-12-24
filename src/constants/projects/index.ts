import MeamiPreview from "@assets/images/projects/meami/preview-meami.webp";
import MeamiProof1 from "@assets/images/projects/meami/charte-graphique.webp";
import MeamiProof2 from "@assets/images/projects/meami/planche-images.webp";
import MeamiProof3 from "@assets/images/projects/meami/frame-liste-ingredients.webp";
import MeamiProof4 from "@assets/images/projects/meami/frame-liste-recettes.webp";
import MeamiProof5 from "@assets/images/projects/meami/frame-vue-calendrier.webp";
import MeamiProof6 from "@assets/images/projects/meami/frame-vue-liste.webp";
import MeamiProof7 from "@assets/images/projects/meami/frame-vue-modifier.webp";

import TeleconsultationPreview from "@assets/images/projects/teleconsultation/preview-teleconsultation.webp";
import TeleconsultationProof1 from "@assets/images/projects/teleconsultation/moodboard-piste-1.webp";
import TeleconsultationProof2 from "@assets/images/projects/teleconsultation/moodboard-piste-2.webp";
import TeleconsultationProof3 from "@assets/images/projects/teleconsultation/planche-inspirations-ui.webp";
import TeleconsultationProof4 from "@assets/images/projects/teleconsultation/frame-interface-panneau.webp";
import TeleconsultationProof5 from "@assets/images/projects/teleconsultation/frame-interface-salle-patient.webp";
import TeleconsultationProof6 from "@assets/images/projects/teleconsultation/frame-interface-salle-praticien.webp";
import TeleconsultationProof7 from "@assets/images/projects/teleconsultation/frame-selection-salle.webp";

import AremacsPreview from "@assets/images/projects/aremacs/preview-aremacs.webp";
import AremacsProof1 from "@assets/images/projects/aremacs/frame-page-accueil.webp";
import AremacsProof2 from "@assets/images/projects/aremacs/frame-a-propos.webp";
import AremacsProof3 from "@assets/images/projects/aremacs/frame-benevolat.webp";
import AremacsProof4 from "@assets/images/projects/aremacs/frame-contact.webp";
import AremacsProof5 from "@assets/images/projects/aremacs/frame-deroule.webp";
import AremacsProof6 from "@assets/images/projects/aremacs/frame-evenement.webp";
import AremacsProof7 from "@assets/images/projects/aremacs/frame-notre-equipe.webp";
import AremacsProof8 from "@assets/images/projects/aremacs/frame-nous-soutenir.webp";

import { ProjectType } from "@types";

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
    id: "Project 1",
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
    id: "Project 2",
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
            name: "Moodboard : Piste 1",
            type: "design/graphic",
            imgSrc: TeleconsultationProof1,
          },
          {
            name: "Moodboard : Piste 2",
            type: "design/graphic",
            imgSrc: TeleconsultationProof2,
          },
          {
            name: "Planche d’inspirations UI",
            type: "design/ui-ux",
            imgSrc: TeleconsultationProof3,
          },
          {
            name: "Maquette : Interface Panneau de contrôle",
            type: "design/ui-ux",
            imgSrc: TeleconsultationProof4,
          },
          {
            name: "Maquette : Interface Salle côté Patient",
            type: "design/ui-ux",
            imgSrc: TeleconsultationProof5,
          },
          {
            name: "Maquette : Interface Salle côté Patient",
            type: "design/ui-ux",
            imgSrc: TeleconsultationProof6,
          },
          {
            name: "Maquette : Sélection de salle",
            type: "design/ui-ux",
            imgSrc: TeleconsultationProof7,
          },
        ],
      },
    ],
  },
  {
    id: "Project 3",
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
            name: "Maquette : Page d’accueil",
            type: "design/ui-ux",
            imgSrc: AremacsProof1,
          },
          {
            name: "Maquette : Page À propos",
            type: "design/ui-ux",
            imgSrc: AremacsProof2,
          },
          {
            name: "Maquette : Page Bénévolat",
            type: "design/ui-ux",
            imgSrc: AremacsProof3,
          },
          {
            name: "Maquette : Page Contact",
            type: "design/ui-ux",
            imgSrc: AremacsProof4,
          },
          {
            name: "Maquette : Page Déroulé",
            type: "design/ui-ux",
            imgSrc: AremacsProof5,
          },
          {
            name: "Maquette : Page Événement",
            type: "design/ui-ux",
            imgSrc: AremacsProof6,
          },
          {
            name: "Maquette : Page Notre équipe",
            type: "design/ui-ux",
            imgSrc: AremacsProof7,
          },
          {
            name: "Maquette : Page Nous soutenir",
            type: "design/ui-ux",
            imgSrc: AremacsProof8,
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
