import styles from "./ContactForm.module.scss";

import AppInput from "@components/atoms/appElements/AppInput";
import AppSubmitButton from "@components/atoms/appElements/AppSubmitButton";

interface ContactFormProps {
  className?: string;
  id?: string;
}

export default function ContactForm({ className, id }: ContactFormProps) {
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
  }
  return (
    <div
      className={`${styles.contactForm} ${className} timeline-point`}
      id={id}
      data-timeline-index={21}
    >
      <h3>Écrivons la suite, dès maintenant</h3>
      <form action="" onSubmit={handleSubmit}>
        <AppInput
          label="Votre nom"
          placeholder="Ex : Jean Dupont"
          className={styles.input}
          index={0}
          name="name"

        />
        <AppInput
          label="Votre email"
          type="email"
          placeholder="Ex : jean.dupont@example.com"
          className={styles.input}
          index={1}
          name="email"
        />
        <AppInput
          label="Votre message"
          placeholder="Écrivez votre message ici..."
          isTextarea
          className={styles.input}
          index={2}
          name="message"
        />
        <AppSubmitButton className={styles.submitButton} />
      </form>
    </div>
  );
}
