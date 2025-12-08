import styles from "./AppInput.module.scss";

interface AppInputProps {
  type?: string;
  isTextarea?: boolean;
  placeholder?: string;
  label: string;
}

export default function AppInput({
  type = "text",
  isTextarea = false,
  placeholder,
  label,
}: AppInputProps) {
  return (
    <div className={styles.container}>
      <label htmlFor="app-input" className={styles.label}>
        {label}
        <span>*</span>
      </label>
      {isTextarea ? (
        <textarea
          id="app-input"
          className={styles.input}
          placeholder={placeholder}
        ></textarea>
      ) : (
        <input
          id="app-input"
          type={type}
          className={styles.input}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}
