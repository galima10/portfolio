import styles from "./Technos.module.scss";

import SectionWrapper from "@components/wrappers/SectionWrapper";

import AppSVG from "@components/atoms/svgIcons/AppSVG";

export default function Technos() {
  return (
    <SectionWrapper
      title="Mes territoires"
      orientation="right"
      className={styles.technos}
    >
      <AppSVG name="languageMap" className={styles.languageMap} />
      <AppSVG name="frameworksMap" className={styles.frameworksMap} />
      <AppSVG name="toolsMap" className={styles.toolsMap} />
      <AppSVG name="discussedMap" className={styles.discussedMap} />
    </SectionWrapper>
  );
}
