import styles from "../Carrousel.module.scss";

import { translationsProjects, projectTitleDesc } from "@constants/global";

interface TargetSlideProps {
  target: {
    principal: string;
    relay: string;
  };
}

export default function TargetSlide({ target }: TargetSlideProps) {
  return (
    <div className={styles.slides} aria-label="Diapositive de la cible du projet" role="region">
      <h2 className="project-h2">{projectTitleDesc.target}</h2>
      {target && (
        <div className={`${styles.slideContent} ${styles.targetSlide}`}>
          <div className={styles.cardItem}>
            <h3>{translationsProjects["principal"]}</h3>
            <p>{target.principal}</p>
          </div>

          <div className={styles.cardItem}>
            <h3>{translationsProjects["relay"]}</h3>
            <p>{target.relay}</p>
          </div>
        </div>
      )}
    </div>
  );
}
