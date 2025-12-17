import styles from "../Carrousel.module.scss";

import { projectTitleDesc } from "@constants/global";

interface ResultsSlideProps {
  results: {
    achievements: string;
    learnings: string;
    testimonials?: string;
  };
}

export default function ResultsSlide({ results }: ResultsSlideProps) {
  return (
    <div className={styles.slides}>
      <h2 className="project-h2">{projectTitleDesc["results"]}</h2>
      <div className={`${styles.slideContent} ${styles.resultsSlide}`}>
        {results &&
          Object.entries(results).map(([key, value]) => (
            <p key={key} className={styles.cardItem}>
              {value}
            </p>
          ))}
      </div>
    </div>
  );
}
