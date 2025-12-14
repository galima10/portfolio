import styles from "./Contact.module.scss";

import SectionWrapper from "@components/wrappers/SectionWrapper";

export default function Contact() {
  return (
    <SectionWrapper
      orientation="right"
      className={styles.contactSection}
      title="Le prochain cap"
      id="contact"
    >
      <ul aria-label="Pourquoi me contacter ?" className={styles.list}>
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
    </SectionWrapper>
  );
}
