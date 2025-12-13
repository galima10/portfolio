import AppSVG from "@components/atoms/svgIcons/AppSVG";

export const projects = [
  {
    id: "Projet 1",
    name: "Meam¡",
    componentMainPage: (props: React.SVGProps<SVGSVGElement>) => AppSVG({ ...props, name: "island1" }),
    hook: "Une aventure pas comme les autres, où je trace seule le chemin d’un projet qui m’appartient.",
    label: "Personnel — Dév. web — Appli. mobile",
    stack: [
      {
        label: "React Native",
        svg: (props: React.SVGProps<SVGSVGElement>) => AppSVG({ ...props, name: "languageMap" }),
      },
      {
        label: "Expo",
        svg: (props: React.SVGProps<SVGSVGElement>) => AppSVG({ ...props, name: "frameworksMap" }),
      },
      {
        label: "TypeScript",
        svg: (props: React.SVGProps<SVGSVGElement>) => AppSVG({ ...props, name: "toolsMap" }),
      }
    ],
    description: "Description du projet Meam¡...",
  },
  {
    id: "Projet 2",
    name: "Téléconsultation",
    componentMainPage: (props: React.SVGProps<SVGSVGElement>) => AppSVG({ ...props, name: "island2" }),
    hook: "Quand le code connecte patients et professionnels, chaque ligne rend les soins plus accessibles.",
    label: "Professionnel — Dév. web — Plateforme web",
    description: "Description du projet Téléconsultation...",
  },
  {
    id: "Projet 3",
    name: "Aremacs",
    componentMainPage: (props: React.SVGProps<SVGSVGElement>) => AppSVG({ ...props, name: "island3" }),
    hook: "Derrière chaque clic se cache une question éthique, là où le code rencontre les valeurs humaines.",
    label: "Académique — Dév. web & UX/UI — Refonte d’interface",
    description: "Description du projet Aremacs...",
  },
];