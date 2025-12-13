import styles from "./Projects.module.scss";

import SectionWrapper from "@components/wrappers/SectionWrapper";

export default function Projects() {
  return (
    <SectionWrapper
      orientation="left"
      title="Mes quêtes"
      id="projects"
      className={styles.projectsSection}
    >
      {/* Project components will go here in the future */}
    </SectionWrapper>
  );
}
