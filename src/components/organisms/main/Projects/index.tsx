import styles from "./Projects.module.scss";

import SectionWrapper from "@components/wrappers/SectionWrapper";

import { projects } from "@constants/projects";
import { slugify } from "@utils/slugify";

import ProjectItem from "@components/molecules/main/ProjectItem";

export default function Projects() {
  return (
    <SectionWrapper
      orientation="left"
      title="Mes quêtes"
      id="group3-projects"
      className={styles.projectsSection}
    >
      <ul className={styles.projectsList}>
        {projects.map((project, index) => {
          return (
            <li
              key={project.id}
              className={`${styles.projectItem} snapping timeline-point`}
              id={`group3-${slugify(project.id)}`}
            >
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
