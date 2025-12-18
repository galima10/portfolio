import styles from "../Carrousel.module.scss";

import { translationsProjects, projectTitleDesc } from "@constants/global";

interface ObjectivesSlideProps {
  objectives: {
    project: {
      main: string;
      key1: string;
      key2?: string;
      secondary?: string;
    };
    personal: string[];
  };
}

export default function ObjectivesSlide({ objectives }: ObjectivesSlideProps) {
  return (
    <div className={styles.slides} aria-label="Diapositive des objectifs du projet" role="region">
      <h2 className="project-h2">{projectTitleDesc.objectives}</h2>
      {objectives && (
        <div className={`${styles.slideContent} ${styles.objectivesSlide}`}>
          <div className={styles.cardItem}>
            <h3>{translationsProjects["project"]}</h3>
            <ul>
              <li>
                <strong>{translationsProjects["main"]}:</strong>{" "}
                {objectives.project.main}
              </li>
              <li>
                <strong>{translationsProjects["key1"]}:</strong>{" "}
                {objectives.project.key1}
              </li>
              {objectives.project.key2 && (
                <li>
                  <strong>{translationsProjects["key2"]}:</strong>{" "}
                  {objectives.project.key2}
                </li>
              )}
              {objectives.project.secondary && (
                <li>
                  <strong>{translationsProjects["secondary"]}:</strong>{" "}
                  {objectives.project.secondary}
                </li>
              )}
            </ul>
          </div>
          <div className={styles.cardItem}>
            <h3>{translationsProjects["personal"]}</h3>
            <ul>
              {objectives.personal.map((obj, index) => (
                <li key={index}>{obj}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
