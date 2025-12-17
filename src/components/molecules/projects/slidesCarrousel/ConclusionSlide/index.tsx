import styles from "../Carrousel.module.scss";

import { projectTitleDesc } from "@constants/global";

interface ConclusionSlideProps {
  conclusion: string;
}

export default function ConclusionSlide({ conclusion }: ConclusionSlideProps) {
  return (
    <div className={styles.slides}>
      <h2 className="project-h2">{projectTitleDesc["conclusion"]}</h2>
      <div className={`${styles.slideContent} ${styles.conclusionSlide}`}>
        {conclusion.split(". ").map((sentence, index) => (
          <p key={index}>{sentence}</p>
        ))}
      </div>
    </div>
  );
}
