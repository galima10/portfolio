import styles from "./Technos.module.scss";

import SectionWrapper from "@components/wrappers/SectionWrapper";

import AppSVG from "@components/atoms/svgIcons/AppSVG";
import GenericButton from "@components/atoms/appElements/GenericButton";

export default function Technos() {
  return (
    <SectionWrapper
      title="Mes territoires"
      orientation="right"
      className={styles.technos}
      id="technos"
    >
      <div className={styles.technoMaps}>
        <GenericButton className={styles.technoItem + " " + styles.languageMap}>
          <AppSVG name="languageMap" className={styles.map} />
          <h3>Langages maîtrisés</h3>
        </GenericButton>
        <GenericButton className={styles.technoItem + " " + styles.frameworksMap}>
          <AppSVG name="frameworksMap" className={styles.map} />
          <h3>Frameworks & Libraries</h3>
        </GenericButton>
        <GenericButton className={styles.technoItem + " " + styles.toolsMap}>
          <AppSVG name="toolsMap" className={styles.map} />
          <h3>Outils & Logiciels</h3>
        </GenericButton>
        <GenericButton className={styles.technoItem + " " + styles.discussedMap}>
          <AppSVG name="discussedMap" className={styles.map} />
          <h3>Abordés</h3>
        </GenericButton>
      </div>
    </SectionWrapper>
  );
}
