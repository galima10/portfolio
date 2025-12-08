import styles from "./AppButton.module.scss";

interface AppButtonProps {
  type: "primary" | "secondary" | "tertiary";
  text: string;
  link?: string;
}

export default function AppButton({ type, text, link = "#" }: AppButtonProps) {
  return (
    <a href={link} className={styles[type]}>
      {text}
    </a>
  );
}
