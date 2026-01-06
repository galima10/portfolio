import styles from "./AppInput.module.scss";

interface AppInputProps {
  type?: string;
  isTextarea?: boolean;
  placeholder?: string;
  label: string;
  className?: string;
  index?: number;
  name?: string;
  value?: string;
  onChange?: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

export default function AppInput({
  type = "text",
  isTextarea = false,
  placeholder,
  label,
  className = "",
  index,
  name,
  value,
  onChange,
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
          value={value}
          onChange={onChange}
        ></textarea>
      ) : (
        <input
          id={`app-input-${index}`}
          type={type}
          className={styles.input}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}
