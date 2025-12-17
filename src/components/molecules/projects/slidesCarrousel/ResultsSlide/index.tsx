import styles from "../Carrousel.module.scss";

interface ResultsSlideProps {
  results: {
    achievements: string;
    learnings: string;
    testimonials?: string;
  };
}

export default function ResultsSlide({ results }: ResultsSlideProps) {
  return (
    <div className={styles.resultsSlide}>
      {results &&
        Object.entries(results).map(([key, value]) => (
          <p key={key}>
            {value}
          </p>
        ))}
    </div>
  );
}
