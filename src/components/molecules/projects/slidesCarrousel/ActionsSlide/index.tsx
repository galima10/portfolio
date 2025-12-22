import styles from "../Carrousel.module.scss";

import GenericButton from "@components/atoms/appElements/GenericButton";
import { translationsProjects, projectTitleDesc } from "@constants/global";

import { useState } from "react";

interface ActionsSlideProps {
  actions: {
    missions: string[];
    tools: string[];
    skills: string[];
  };
}

export default function ActionsSlide({ actions }: ActionsSlideProps) {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  return (
    <div
      className={styles.slides}
      aria-label="Diapositive des actions réalisées dans le projet"
      role="region"
    >
      <h2 className="project-h2">{projectTitleDesc["actions"]}</h2>
      <div className={`${styles.slideContent} ${styles.actionsSlide}`}>
        <div
          className={
            styles.buttonItem +
            (selectedButton === "missions" ? ` ${styles.selected}` : "")
          }
        >
          <GenericButton
            className={styles.button}
            action={() =>
              selectedButton !== "missions"
                ? setSelectedButton("missions")
                : setSelectedButton(null)
            }
          >
            <span>{translationsProjects["missions"]}</span>
            <span>▶</span>
          </GenericButton>
          <ul>
            {actions.missions.map((mission, index) => (
              <li key={`${mission}-${index}`}>{mission}</li>
            ))}
          </ul>
        </div>
        <div
          className={
            styles.buttonItem +
            (selectedButton === "tools" ? ` ${styles.selected}` : "")
          }
        >
          <GenericButton
            className={styles.button}
            action={() =>
              selectedButton !== "tools"
                ? setSelectedButton("tools")
                : setSelectedButton(null)
            }
          >
            <span>{translationsProjects["tools"]}</span>
            <span>▶</span>
          </GenericButton>
          <ul>
            {actions.tools.map((tool, index) => (
              <li key={`${tool}-${index}`}>{tool}</li>
            ))}
          </ul>
        </div>
        <div
          className={
            styles.buttonItem +
            (selectedButton === "skills" ? ` ${styles.selected}` : "")
          }
        >
          <GenericButton
            className={styles.button}
            action={() =>
              selectedButton !== "skills"
                ? setSelectedButton("skills")
                : setSelectedButton(null)
            }
          >
            <span>{translationsProjects["skills"]}</span>
            <span>▶</span>
          </GenericButton>
          <ul>
            {actions.skills.map((skill, index) => (
              <li key={`${skill}-${index}`}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
