import styles from "./Hero.module.scss";

import AppButton from "@components/atoms/appElements/AppButton";
import GenericButton from "@components/atoms/appElements/GenericButton";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <h1>Ma passion, bien plus qu'un métier</h1>
      <AppButton className={styles.ctaPrimary} label="Envoyez moi un message !" type="primary" />
      <AppButton className={styles.ctaSecondary} label="Téléchargez mon CV" type="secondary" />
      <GenericButton className={styles.ctaLink}>
        Une aventure humaine et pleine de sens
        <span>➧</span>
      </GenericButton>
    </section>
  );
}
