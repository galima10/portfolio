import styles from "./Projects.module.scss";

import SectionWrapper from "@components/wrappers/SectionWrapper";

// import { projects } from "@constants/projects";

import ProjectItem from "@components/molecules/ProjectItem";

export default function Projects() {
  return (
    <SectionWrapper
      orientation="left"
      title="Mes quêtes"
      id="projects"
      className={styles.projectsSection}
    >
      <ul>
        <li>
          <ProjectItem
            project={{
              id: "Projet 1",
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
            }}
          />
        </li>
      </ul>
    </SectionWrapper>
  );
}
