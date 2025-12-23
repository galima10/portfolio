import styles from "./FormProject.module.scss";

import ContactForm from "@components/molecules/general/ContactForm";

export default function FormProject() {
  return (
    <div className={`${styles.formProject} snapping`} id="group4-contactForm">
      <ContactForm />
    </div>
  );
}
