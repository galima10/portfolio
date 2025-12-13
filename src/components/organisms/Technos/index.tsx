import styles from "./Technos.module.scss";

import SectionWrapper from "@components/wrappers/SectionWrapper";
import TechnosMap from "@components/molecules/TechnosMap";

export default function Technos() {
  return (
    <SectionWrapper
      title="Mes territoires"
      orientation="right"
      className={styles.technos}
      id="technos"
    >
      <TechnosMap />
    </SectionWrapper>
  );
}
