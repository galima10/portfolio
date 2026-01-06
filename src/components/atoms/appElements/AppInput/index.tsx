import styles from "./AppInput.module.scss";

interface AppInputProps {
  type?: string;
  isTextarea?: boolean;
  placeholder?: string;
  label: string;
  className?: string;
  index?: number;
  name?: string;
}

export default function AppInput({
  type = "text",
  isTextarea = false,
  placeholder,
  label,
  className = "",
  index,
  name,
}: AppInputProps) {
  return (
    <div className={`${styles.container} ${className}`}>
      <label htmlFor={`app-input-${index}`} className={styles.label}>
        {label}
        <span>*</span>
      </label>
      {isTextarea ? (
        <textarea
          id={`app-input-${index}`}
          className={styles.input}
          placeholder={placeholder}
          name={name}
        ></textarea>
      ) : (
        <input
          id={`app-input-${index}`}
          type={type}
          className={styles.input}
          placeholder={placeholder}
          name={name}
        />
      )}
    </div>
  );
}
