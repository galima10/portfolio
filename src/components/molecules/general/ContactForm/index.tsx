import styles from "./ContactForm.module.scss";

import AppInput from "@components/atoms/appElements/AppInput";
import AppSubmitButton from "@components/atoms/appElements/AppSubmitButton";

import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

interface ContactFormProps {
  className?: string;
  id?: string;
}

export default function ContactForm({ className, id }: ContactFormProps) {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isEmailValid, setIsEmailValid] = useState(false);

  function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex pour valider le format email
    return emailRegex.test(email);
  }

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    if (name === "email") {
      setIsEmailValid(validateEmail(value)); // Met à jour la validité de l'email
    }

    setFormData({ ...formData, [name]: value });
  }

  async function submitForm() {
    try {
      if (!executeRecaptcha) {
        throw new Error("reCAPTCHA n'est pas encore prêt.");
      }

      // Obtenir le jeton reCAPTCHA
      const recaptchaToken = await executeRecaptcha("submit_form");

      const response = await fetch("https://formspree.io/f/xgovjqpq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          "g-recaptcha-response": recaptchaToken, // Inclure le jeton reCAPTCHA
        }),
      });

      if (!response.ok) {
        throw new Error(
          "Une erreur est survenue lors de l'envoi du formulaire."
        );
      }

      console.log("Formulaire soumis avec succès !");
      setFormData({ name: "", email: "", message: "" });
      setIsEmailValid(false);
    } catch (error) {
      console.error(error.message);
    }
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!isEmailValid) {
      console.error("L'email n'est pas valide.");
      return;
    }

    submitForm(); // Appeler la fonction pour soumettre le formulaire
  }

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
      </form>
    </div>
  );
}
