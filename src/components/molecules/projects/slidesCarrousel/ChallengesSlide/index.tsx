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
    <div className={styles.slides}>
      <h2 className="project-h2">{projectTitleDesc.challenges}</h2>
      <div className={`${styles.slideContent} ${styles.challengesSlide}`}>
        {challenges &&
          Object.entries(challenges).map(([key, value]) => (
            <div key={key} className={styles.cardItem}>
              <p className={styles.cardItemTitle}>
                <strong>{translationsProjects[key]}</strong>
              </p>
              <p>{value}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
