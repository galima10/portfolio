import styles from "./Technos.module.scss";

import SectionWrapper from "@components/wrappers/SectionWrapper";
import TechnosMap from "@components/molecules/main/TechnosMap";

import { useCheckIsMobile } from "@hooks/globals/useCheckIsMobile";

export default function Technos() {
  const { isMobile } = useCheckIsMobile();
  return (
    <SectionWrapper
      title="Mes territoires"
      orientation="right"
      className={`${styles.technos} ${!isMobile ? "snapping" : ""}`}
      id="technos"
    >
      <TechnosMap />
    </SectionWrapper>
  );
}
