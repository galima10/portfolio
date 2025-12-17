import styles from "./ProjectCarrousel.module.scss";

import { ProjectDescriptionType } from "@types";

import { projectsSlides, keysOrder } from "@constants/projects";

import GenericButton from "@components/atoms/appElements/GenericButton";

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
      <div className={styles.indicators}>
        <GenericButton className={styles.startButton}>
          Plongez dans l’aventure
          <span>➧</span>
        </GenericButton>
        <ul>
          <li className={styles.startPoint}>
            <GenericButton className={styles.indicator}>
              <div></div>
            </GenericButton>
          </li>
          {keysOrder.map((key) => (
            <li key={key}>
              <GenericButton className={styles.indicator}>
                <div></div>
              </GenericButton>
            </li>
          ))}
        </ul>
        <div className={styles.progress}></div>
        <div className={styles.endRod}>
          <GenericButton className={styles.endPoint}>
            <div></div>
          </GenericButton>
          <p className={styles.endLabel}>
            <strong>Ces expériences sont mon histoire.</strong>
          </p>
        </div>
      </div>
      <div className={styles.sliderContainer}>
        <ul className={styles.slider}>
          {descAndProofs &&
            Object.entries(descAndProofs).map(([key, value]) => (
              <li key={key}>
                {projectsSlides[key] &&
                  React.createElement(projectsSlides[key], { [key]: value })}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
