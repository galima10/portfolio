import styles from "./AppSubmitButton.module.scss";

export default function AppSubmitButton() {
  return <input type="submit" className={styles.button} value="Envoyer" />;
}
