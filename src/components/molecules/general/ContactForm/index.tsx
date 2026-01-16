import styles from "./ContactForm.module.scss";

import AppInput from "@components/atoms/appElements/AppInput";
import AppSubmitButton from "@components/atoms/appElements/AppSubmitButton";

import { useContactForm } from "@hooks/appElements/molecules/useContactForm";

interface ContactFormProps {
  className?: string;
  id?: string;
}

export default function ContactForm({ className, id }: ContactFormProps) {
  const { formData, isEmailValid, handleInputChange, handleSubmit } =
    useContactForm();

  return (
    <div
      className={`${styles.contactForm} ${className} timeline-point`}
      id={id}
      data-timeline-index={21}
    >
      <h3>Écrivons la suite, dès maintenant</h3>
      <form onSubmit={handleSubmit}>
        <AppInput
          label="Votre nom"
          placeholder="Ex : Jean Dupont"
          className={styles.input}
          index={0}
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <div className={styles.emailWrapper}>
          <AppInput
            label="Votre email"
            type="email"
            placeholder="Ex : jean.dupont@example.com"
            className={styles.input}
            index={1}
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {!isEmailValid && formData.email.length > 0 && (
            <p className={styles.errorMessage}>
              L'adresse email semble invalide. Veuillez vérifier.
            </p>
          )}
        </div>
        <AppInput
          label="Votre message"
          placeholder="Écrivez votre message ici..."
          isTextarea
          className={styles.input}
          index={2}
          name="message"
          value={formData.message}
          onChange={handleInputChange}
        />
        <AppSubmitButton
          className={styles.submitButton}
          disabled={
            !formData.name ||
            !formData.email ||
            !formData.message ||
            !isEmailValid
          }
        />
        <p className={styles.formNote}>
          <small>
            <strong>
              * Tous les champs sont obligatoires. Votre adresse email ne sera
              jamais partagée.
            </strong>
          </small>
        </p>
      </form>
    </div>
  );
}
