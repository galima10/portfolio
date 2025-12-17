import styles from "./ProjectCarrousel.module.scss";

import { ProjectDescriptionType } from "@types";

import { projectsSlides, keysOrder } from "@constants/projects";

import React from "react";

interface ProjectCarrouselProps {
  description?: ProjectDescriptionType;
  proofs?: {
    list?: {
      name: string;
      type: string;
      imgSrc: string;
    }[];
    demonstrationLinks?: {
      name: string;
      type: string;
      url: string;
    };
  }[];
}

export default function ProjectCarrousel({
  description,
  proofs,
}: ProjectCarrouselProps) {
  const descAndProofs = keysOrder.reduce((acc, key) => {
    acc[key] = key === "proofs" ? proofs : description?.[key];
    return acc;
  }, {});

  return (
    <div className={styles.projectCarrousel}>
      <div>
        <ul>
          <li>
            <div></div>
          </li>
        </ul>
      </div>
      <ul className={styles.slides}>
        {descAndProofs &&
          Object.entries(descAndProofs).map(([key, value]) => (
            <li key={key}>
              {projectsSlides[key] &&
                React.createElement(projectsSlides[key], { [key]: value })}
            </li>
          ))}
      </ul>
    </div>
  );
}
