import styles from "./AppButton.module.scss";

export default function AppButton() {
  return (
    <a href="/" className={styles.appButton}>
      <p>Bouton</p>
    </a>
  );
}
