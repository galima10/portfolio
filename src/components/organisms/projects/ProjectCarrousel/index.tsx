import styles from "./ProjectCarrousel.module.scss";

import { ProjectDescriptionType } from "@types";

import { projectsSlides } from "@constants/projects";

import React from "react";

interface ProjectCarrouselProps {
  description?: ProjectDescriptionType;
}

export default function ProjectCarrousel({
  description,
}: ProjectCarrouselProps) {
  const { context } = description || {};
  return (
    <div className={styles.projectCarrousel}>
      <ul className={styles.slides}>
        {description && Object.entries(description).map(([key, value]) => (
          <li key={key}>
            {projectsSlides[key] && React.createElement(projectsSlides[key], { [key]: value })}
          </li>
        ))}
      </ul>
    </div>
  );
}
