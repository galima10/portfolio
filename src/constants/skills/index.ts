import Hammer from "@components/atoms/svgIcons/skills/Hammer";
import Brush from "@components/atoms/svgIcons/skills/Brush";
import Wrench from "@components/atoms/svgIcons/skills/Wrench";
import Glass from "@components/atoms/svgIcons/skills/Glass";
import Talkie from "@components/atoms/svgIcons/skills/Talkie";
import Lamp from "@components/atoms/svgIcons/skills/Lamp";

import AppSVG from "@components/atoms/svgIcons/AppSVG";

export const skills = [
  {
    id: "1",
    label: "Dév. web",
    title: "Développement web",
    list: ["HTML", "CSS", "JavaScript"],
    component: (props: React.SVGProps<SVGSVGElement>) => AppSVG({ ...props, name: "hammer" }),
  },
  {
    id: "2",
    label: "UX/UI",
    title: "UX/UI Design",
    list: ["React", "Vue", "Angular"],
    component: (props: React.SVGProps<SVGSVGElement>) => AppSVG({ ...props, name: "brush" }),
  },
  {
    id: "3",
    label: "Gestion projet",
    title: "Méthodologies et gestion de projet",
    list: ["Node.js", "Express", "Django"],
    component: (props: React.SVGProps<SVGSVGElement>) => AppSVG({ ...props, name: "wrench" }),
  },
  {
    id: "4",
    label: "Learn & grow",
    title: "Autonomie et apprentissage continu",
    list: ["SQL", "NoSQL", "GraphQL"],
    component: (props: React.SVGProps<SVGSVGElement>) => AppSVG({ ...props, name: "glass" }),
  },
  {
    id: "5",
    label: "Relation pro",
    title: "Relation client et travail en équipe",
    list: ["Git", "Docker", "CI/CD"],
    component: (props: React.SVGProps<SVGSVGElement>) => AppSVG({ ...props, name: "talkie" }),
  },
  {
    id: "6",
    label: "Éthique & web",
    title: "Éthique et bonnes pratiques",
    list: ["Agile", "Scrum", "Kanban"],
    component: (props: React.SVGProps<SVGSVGElement>) => AppSVG({ ...props, name: "lamp" }),
  },
];
