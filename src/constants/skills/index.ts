export const skills: {
  id: string;
  label: string;
  title: string;
  component: "hammer" | "brush" | "wrench" | "glass" | "talkie" | "lamp";
  skillsDetails?: string[];
}[] = [
  {
    id: "1",
    label: "Dév. web",
    title: "Développement web",
    component: "hammer",
    skillsDetails: [
      "Développer des composants modulables et réutilisables",
      "Intégrer une maquette sur le web avec une hiérarchie claire et correcte",
      "Concevoir et refondre un site vitrine fonctionnel et optimisé",
      "Garantir la qualité du code et la robustesse technique sur le long terme",
      "Développer un thème de site sur mesure",
    ],
  },
  {
    id: "2",
    label: "UX/UI",
    title: "UX/UI Design",
    component: "brush",
    skillsDetails: [
      "Concevoir une interface ergonomique et adaptée à tout type d’écran",
      "Réaliser un audit de site",
      "Analyser les besoins et les attentes des utilisateurs",
      "Créer une arborescence avec une architecture claire et structurée",
    ],
  },
  {
    id: "3",
    label: "Gestion projet",
    title: "Méthodo. & Gestion de projet",
    component: "wrench",
    skillsDetails: [
      "Analyser un problème technique pour en comprendre les causes et les solutions",
      "Gérer l'historique des versions à l’aide d’outils collaboratifs en cloud",
      "Planifier et suivre l’avancement d’un projet à l’aide d’outils de gestion",
      "Rédaction de documentations techniques et fonctionnelles",
    ],
  },
  {
    id: "4",
    label: "Learn & grow",
    title: "Autonomie & Apprentissage",
    component: "glass",
    skillsDetails: [
      "Apprendre en autonomie et mettre rapidement en pratique de nouvelles compétences techniques",
      "S’adapter rapidement à de nouveaux environnements, outils et langages",
      "Assurer une veille continue pour rester à jour sur les tendances et technologies du web",
    ],
  },
  {
    id: "5",
    label: "Relation pro",
    title: "Relation client & Travail en équipe",
    component: "talkie",
    skillsDetails: [
      "Communiquer clairement les informations entre les différentes parties d’un projet",
      "Présenter un résultat à travers une démonstration technique",
      "Présenter le suivi de l’avancement d’un projet à l’aide de démonstrations vidéo",
      "Présenter les démarches et les étapes d’un projet de manière claire et impactante",
    ],
  },
  {
    id: "6",
    label: "Éthique & Web",
    title: "Éthique et bonnes pratiques",
    component: "lamp",
    skillsDetails: [
      "Sensibiliser aux bonnes pratiques à adopter pour communiquer sur l’importance d’un web inclusif et durable",
      "Intégrer les principes d’accessibilité dans le développement web",
      "Optimiser les performances techniques des sites pour une expérience plus fluide et responsable",
    ],
  },
];
