import styles from "./Hero.module.scss";

import AppButton from "@components/atoms/appElements/AppButton";
import GenericButton from "@components/atoms/appElements/GenericButton";

import { useCVDownload } from "@hooks/globals/CVDownload";

export default function Hero() {
  const { handleDownload } = useCVDownload();
  return (
    <section className={styles.hero} id="hero">
      <h1>Ma passion, bien plus qu'un métier</h1>
      <AppButton
        className={styles.ctaPrimary}
        label="Envoyez moi un message !"
        type="primary"
        to="#contactForm"
      />
      <AppButton
        className={styles.ctaSecondary}
        label="Téléchargez mon CV"
        type="secondary"
        action={handleDownload}
      />
      <GenericButton className={styles.ctaLink} to="#presentation">
        Une aventure humaine et pleine de sens
        <span>➧</span>
      </GenericButton>
    </section>
  );
}
