import styles from "../Carrousel.module.scss";

interface ConclusionSlideProps {
  conclusion: string;
}

export default function ConclusionSlide({ conclusion }: ConclusionSlideProps) {
  return <div className={styles.conclusionSlide}>dzd{conclusion}</div>;
}
