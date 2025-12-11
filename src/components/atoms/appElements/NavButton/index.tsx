import styles from "./NavButton.module.scss";

import { useAppNavigation } from "@hooks/globals/useAppNavigation";

interface NavButtonProps {
  position: "navbar" | "footer";
  label?: string;
  isActive?: boolean;
  className?: string;
  action?: () => void;
  to?: string;
}

export default function NavButton({
  position,
  label,
  isActive = false,
  className = "",
  action,
  to,
}: NavButtonProps) {
  const { handleClick } = useAppNavigation(action, to);
  return (
    <button
      className={`${styles[position]} ${
        isActive ? styles.active : ""
      } ${className}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
}
