import styles from "./AppSubmitButton.module.scss";

export default function AppSubmitButton({ className = "" }: { className?: string }) {
  return <input type="submit" className={`${styles.button} ${className}`} value="Envoyer" />;
}
