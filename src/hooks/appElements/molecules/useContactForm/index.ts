import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export function useContactForm() {
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
  return {
    formData,
    isEmailValid,
    handleInputChange,
    handleSubmit,
  };
}
