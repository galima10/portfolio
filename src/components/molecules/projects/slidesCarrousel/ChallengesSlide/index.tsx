import styles from "../Carrousel.module.scss";

import { translationsProjects, projectTitleDesc } from "@constants/global";

interface ChallengesSlideProps {
  challenges: {
    project: string;
    personal: string;
  };
}

export default function ChallengesSlide({ challenges }: ChallengesSlideProps) {
  return (
    <div className={styles.slides} aria-label="Diapositive des défis rencontrés dans le projet" role="region">
      <h2 className="project-h2">{projectTitleDesc.challenges}</h2>
      <div className={`${styles.slideContent} ${styles.challengesSlide}`}>
        {challenges &&
          Object.entries(challenges).map(([key, value]) => (
            <div key={key} className={styles.cardItem}>
              <h3>{translationsProjects[key]}</h3>
              <p>{value}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
