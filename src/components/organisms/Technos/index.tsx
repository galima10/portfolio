import styles from "./Technos.module.scss";

import SectionWrapper from "@components/wrappers/SectionWrapper";

export default function Technos() {
  return (
    <SectionWrapper
      title="Mes territoires"
      orientation="right"
      className={styles.technos}
    >
      {/* Content for Outils & Technos goes here */}
    </SectionWrapper>
  );
}
