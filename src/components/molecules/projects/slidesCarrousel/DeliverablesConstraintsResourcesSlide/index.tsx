import styles from "../Carrousel.module.scss";

interface DeliverablesConstraintsResourcesSlideProps {
  deliverablesConstraintsResources: {
    deliverables: {
      name: string;
      format: string;
      goal: string;
      specificities?: string;
      technologies: string;
    }[];
    constraints: {
      temporal?: string[];
      technical?: string[];
      budget?: string[];
      graphic?: string[];
      geographic?: string[];
    };
    resources: {
      available: string[];
      missing: string[];
    };
  };
}

export default function DeliverablesConstraintsResources({ deliverablesConstraintsResources }: DeliverablesConstraintsResourcesSlideProps) {
  return <div className={styles.deliverablesConstraintsResourcesSlide}></div>;
}
