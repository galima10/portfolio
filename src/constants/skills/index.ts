export const skills: {
  id: string;
  label: string;
  title: string;
  list: string[];
  component: "hammer" | "brush" | "wrench" | "glass" | "talkie" | "lamp";
}[] = [
  {
    id: "1",
    label: "Dév. web",
    title: "Développement web",
    list: ["HTML", "CSS", "JavaScript"],
    component: "hammer",
  },
  {
    id: "2",
    label: "UX/UI",
    title: "UX/UI Design",
    list: ["React", "Vue", "Angular"],
    component: "brush",
  },
  {
    id: "3",
    label: "Gestion projet",
    title: "Méthodologies et gestion de projet",
    list: ["Node.js", "Express", "Django"],
    component: "wrench",
  },
  {
    id: "4",
    label: "Learn & grow",
    title: "Autonomie et apprentissage continu",
    list: ["SQL", "NoSQL", "GraphQL"],
    component: "glass",
  },
  {
    id: "5",
    label: "Relation pro",
    title: "Relation client et travail en équipe",
    list: ["Git", "Docker", "CI/CD"],
    component: "talkie",
  },
  {
    id: "6",
    label: "Éthique & web",
    title: "Éthique et bonnes pratiques",
    list: ["Agile", "Scrum", "Kanban"],
    component: "lamp",
  },
];
