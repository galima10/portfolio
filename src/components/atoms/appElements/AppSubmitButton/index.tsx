import styles from "./AppSubmitButton.module.scss";

export default function AppSubmitButton({
  className = "",
  disabled = true,
}: {
  className?: string;
  disabled?: boolean;
}) {
  return (
    <input
      type="submit"
      className={`${styles.button} ${className}`}
      value="Envoyer"
      disabled={disabled}
    />
  );
}
