import styles from "./NavButton.module.scss";

interface NavButtonProps {
  position: "navbar" | "footer";
  text: string;
  link?: string;
  isActive?: boolean;
}

export default function NavButton({ position, text, link = "#", isActive = false }: NavButtonProps) {
    return (
        <a href={link} className={styles[position] + " " + (isActive ? styles.active : "")}>{text}</a>
    );
};
