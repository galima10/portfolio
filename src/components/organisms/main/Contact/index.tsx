import styles from "./Contact.module.scss";

import SectionWrapper from "@components/wrappers/SectionWrapper";
import ContactForm from "@components/molecules/general/ContactForm";

import TimeLinePoint from "@components/atoms/appElements/TimeLinePoint";
import { useCheckIsMobile } from "@hooks/globals/useCheckIsMobile";

export default function Contact() {
  const { isMobile } = useCheckIsMobile();
  return (
    <SectionWrapper
      orientation="right"
      className={styles.contactSection}
      title="Le prochain cap"
      id="group4-contactSection"
    >
      <ul
        aria-label="Pourquoi me contacter ?"
        className={`${styles.list} snapping`}
        id="group4-contact"
      >
        <li
          className={isMobile ? "timeline-point" : ""}
        >
          <p>
            <strong>Chaque projet raconte une histoire…</strong>
          </p>
          {isMobile ? null : <TimeLinePoint />}
        </li>
        <li
          className={isMobile ? "timeline-point" : ""}
        >
          <p>
            <strong>Et pourquoi pas le nôtre ?</strong>
          </p>
          {isMobile ? null : <TimeLinePoint />}
        </li>
        <li
          className={isMobile ? "timeline-point" : ""}
        >
          <p>
            <strong>Discutons-en !</strong>
          </p>
          {isMobile ? null : <TimeLinePoint />}
        </li>
      </ul>
      <ContactForm
        className={`${styles.contactForm} snapping`}
        id="group4-contactForm"
      />
    </SectionWrapper>
  );
}
