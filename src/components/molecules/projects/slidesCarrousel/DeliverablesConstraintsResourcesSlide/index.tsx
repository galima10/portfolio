import styles from "../Carrousel.module.scss";

import { translationsProjects, projectTitleDesc } from "@constants/global";

import GenericButton from "@components/atoms/appElements/GenericButton";

import { useState } from "react";

interface DeliverablesConstraintsResourcesSlideProps {
  deliverablesConstraintsResources: {
    deliverables: {
      name: string;
      format: string;
      goal: string;
      specificities?: string;
      technologies: string;
    }[];
    constraints: {
      temporal?: string[];
      technical?: string[];
      budget?: string[];
      graphic?: string[];
      geographic?: string[];
    };
    resources: {
      available: string[];
      missing: string[];
    };
  };
}

export default function DeliverablesConstraintsResources({
  deliverablesConstraintsResources,
}: DeliverablesConstraintsResourcesSlideProps) {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  return (
    <div
      className={styles.slides}
      aria-label="Diapositive des livrables, contraintes et ressources du projet"
      role="region"
    >
      <h2 className="project-h2">
        {projectTitleDesc.deliverablesConstraintsResources}
      </h2>
      <div
        className={`${styles.slideContent} ${styles.deliverablesConstraintsResourcesSlideContent}`}
      >
        <div
          className={
            styles.buttonItem +
            (selectedButton === "deliverables" ? ` ${styles.selected}` : "")
          }
        >
          <GenericButton
            className={styles.button}
            action={() =>
              selectedButton !== "deliverables"
                ? setSelectedButton("deliverables")
                : setSelectedButton(null)
            }
          >
            <span>{translationsProjects["deliverables"]}</span>
            <span>▶</span>
          </GenericButton>
          <ul>
            {deliverablesConstraintsResources.deliverables.map(
              (deliverable, index) => (
                <li key={`${deliverable.name}-${index}`}>
                  <span className={styles.name}>{deliverable.name}</span>
                  <span>Format : {deliverable.format}</span>
                  <span>{deliverable.goal}</span>
                  {deliverable.specificities &&
                    ` - ${deliverable.specificities}`}{" "}
                  - {deliverable.technologies}
                </li>
              )
            )}
          </ul>
        </div>
        <div
          className={
            styles.buttonItem +
            (selectedButton === "constraints" ? ` ${styles.selected}` : "")
          }
        >
          <GenericButton
            className={styles.button}
            action={() =>
              selectedButton !== "constraints"
                ? setSelectedButton("constraints")
                : setSelectedButton(null)
            }
          >
            <span>{translationsProjects["constraints"]}</span>
            <span>▶</span>
          </GenericButton>
          <ul>
            {Object.entries(deliverablesConstraintsResources.constraints).map(
              ([key, values]) =>
                values && (
                  <li key={key}>
                    <span className={styles.name}>
                      {translationsProjects[key]}
                    </span>
                    <span>{values.join(", ")}</span>
                  </li>
                )
            )}
          </ul>
        </div>
        <div
          className={
            styles.buttonItem +
            (selectedButton === "resources" ? ` ${styles.selected}` : "")
          }
        >
          <GenericButton
            className={styles.button}
            action={() =>
              selectedButton !== "resources"
                ? setSelectedButton("resources")
                : setSelectedButton(null)
            }
          >
            <span>{translationsProjects["resources"]}</span>
            <span>▶</span>
          </GenericButton>
          <ul>
            <li>
              <span className={styles.name}>
                {translationsProjects["available"]}:
              </span>{" "}
              <span>
                {deliverablesConstraintsResources.resources.available.join(
                  ", "
                )}
              </span>
            </li>
            <li>
              <span className={styles.name}>
                {translationsProjects["missing"]}:
              </span>{" "}
              <span>
                {deliverablesConstraintsResources.resources.missing.join(", ")}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
