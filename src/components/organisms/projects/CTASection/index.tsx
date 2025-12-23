import styles from "./CTASection.module.scss";

import GenericButton from "@components/atoms/appElements/GenericButton";

export default function CTASection() {
  return (
    <div className={`${styles.ctaSection} snapping`} id="projectCTA">
      <p>
        <strong>
          Et pourquoi ne pas écrire la prochaine ensemble ? Parlons-en !
        </strong>
      </p>
      <GenericButton className={styles.ctaButton} to="#group4-contactForm">
        ▶
      </GenericButton>
    </div>
  );
}
