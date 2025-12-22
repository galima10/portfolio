import styles from "./Contact.module.scss";

import SectionWrapper from "@components/wrappers/SectionWrapper";
import ContactForm from "@components/molecules/general/ContactForm";

export default function Contact() {
  return (
    <SectionWrapper
      orientation="right"
      className={styles.contactSection}
      title="Le prochain cap"
    >
      <ul
        aria-label="Pourquoi me contacter ?"
        className={`${styles.list} snapping`}
        id="contact"
      >
        <li>
          <p>
            <strong>Chaque projet raconte une histoire…</strong>
          </p>
        </li>
        <li>
          <p>
            <strong>Et pourquoi pas le nôtre ?</strong>
          </p>
        </li>
        <li>
          <p>
            <strong>Discutons-en !</strong>
          </p>
        </li>
      </ul>
      <ContactForm
        className={`${styles.contactForm} snapping`}
        id="contactForm"
      />
    </SectionWrapper>
  );
}
