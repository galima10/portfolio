import Hammer from "@components/atoms/svgIcons/skills/Hammer";
import Brush from "@components/atoms/svgIcons/skills/Brush";
import Wrench from "@components/atoms/svgIcons/skills/Wrench";
import Glass from "@components/atoms/svgIcons/skills/Glass";
import Talkie from "@components/atoms/svgIcons/skills/Talkie";
import Lamp from "@components/atoms/svgIcons/skills/Lamp";

export const skills = [
  {
    id: "1",
    label: "Dév. web",
    name: "Développement web",
    list: ["HTML", "CSS", "JavaScript"],
    component: Hammer,
  },
  {
    id: "2",
    label: "UX/UI",
    name: "UX/UI Design",
    list: ["React", "Vue", "Angular"],
    component: Brush,
  },
  {
    id: "3",
    label: "Gestion projet",
    name: "Méthodologies et gestion de projet",
    list: ["Node.js", "Express", "Django"],
    component: Wrench,
  },
  {
    id: "4",
    label: "Learn & grow",
    name: "Autonomie et apprentissage continu",
    list: ["SQL", "NoSQL", "GraphQL"],
    component: Glass,
  },
  {
    id: "5",
    label: "Relation pro",
    name: "Relation client et travail en équipe",
    list: ["Git", "Docker", "CI/CD"],
    component: Talkie,
  },
  {
    id: "6",
    label: "Éthique & web",
    name: "Éthique et bonnes pratiques",
    list: ["Agile", "Scrum", "Kanban"],
    component: Lamp,
  },
];
