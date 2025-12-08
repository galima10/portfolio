import styles from "./AppButton.module.scss";

interface AppButtonProps {
  type: "primary" | "secondary" | "tertiary";
  label: string;
  link?: string;
  className?: string;
}

export default function AppButton({ type, label, link = "#", className = "" }: AppButtonProps) {
  return (
    <a href={link} className={`${styles[type]} ${className}`}>
      {label}
    </a>
  );
}
