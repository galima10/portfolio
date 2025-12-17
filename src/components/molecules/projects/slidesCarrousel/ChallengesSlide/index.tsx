import styles from "../Carrousel.module.scss";

import { translationsProjects } from "@constants/global";

interface ChallengesSlideProps {
  challenges: {
    project: string;
    personal: string;
  };
}

export default function ChallengesSlide({ challenges }: ChallengesSlideProps) {
  return (
    <div className={styles.challengesSlide}>
      {challenges &&
        Object.entries(challenges).map(([key, value]) => (
          <p>
            <strong>{translationsProjects[key]}:</strong>
            {value}
          </p>
        ))}
    </div>
  );
}
