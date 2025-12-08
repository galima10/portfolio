import styles from "./NavButton.module.scss";

interface NavButtonProps {
  position: "navbar" | "footer";
  text: string;
  link?: string;
  isActive?: boolean;
  className?: string;
}

export default function NavButton({
  position,
  text,
  link = "#",
  isActive = false,
  className = "",
}: NavButtonProps) {
  return (
    <a
      href={link}
      className={`${styles[position]} ${
        isActive ? styles.active : ""
      } ${className}`}
    >
      {text}
    </a>
  );
}
