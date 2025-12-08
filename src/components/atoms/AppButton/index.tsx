import styles from "./AppButton.module.scss";

interface AppButtonProps {
  type: "primary" | "secondary" | "tertiary";
  text: string;
  link?: string;
  className?: string;
}

export default function AppButton({ type, text, link = "#", className = "" }: AppButtonProps) {
  return (
    <a href={link} className={`${styles[type]} ${className}`}>
      {text}
    </a>
  );
}
