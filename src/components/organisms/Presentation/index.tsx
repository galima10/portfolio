import styles from "./Presentation.module.scss";

import SectionWrapper from "@components/wrappers/SectionWrapper";

import photo from "@images/photo_de_profil.webp";

export default function Presentation() {
  return (
    <SectionWrapper title="Qui suis-je ?" orientation="right" className={styles.presentation}>
      <div className={styles.infos}>
        <img src={photo} alt="Photo de profil" />
        <p className={styles.name}>
          <strong>Magali MAI</strong>
        </p>
        <p className={styles.job}>Développeuse web</p>
      </div>
      <div className={styles.description}></div>
    </SectionWrapper>
  );
}
