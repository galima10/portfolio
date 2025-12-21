import styles from "./Projects.module.scss";

import SectionWrapper from "@components/wrappers/SectionWrapper";

import { projects } from "@constants/projects";

import ProjectItem from "@components/molecules/main/ProjectItem";

export default function Projects() {
  return (
    <SectionWrapper
      orientation="left"
      title="Mes quêtes"
      id="projects"
      className={styles.projectsSection}
    >
      <ul className={styles.projectsList}>
        {projects.map((project, index) => {
          return (
            <li key={project.id} className={styles.projectItem}>
              <ProjectItem
                project={project}
                orientation={index % 2 === 0 ? "left" : "right"}
              />
            </li>
          );
        })}
      </ul>
    </SectionWrapper>
  );
}
