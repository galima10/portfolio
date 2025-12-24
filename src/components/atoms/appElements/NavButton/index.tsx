import styles from "./NavButton.module.scss";

import { useAppNavigation } from "@hooks/globals/navigation/useAppNavigation";
import { useAppSelector } from "@hooks/redux";

import { useLocation } from "react-router-dom";

interface NavButtonProps {
  position: "navbar" | "footer";
  label?: string;
  className?: string;
  action?: () => void;
  to?: string;
}

export default function NavButton({
  position,
  label,
  className = "",
  action,
  to,
}: NavButtonProps) {
  const { handleClick } = useAppNavigation(action, to);
  const currentIDSection = useAppSelector(
    (state) => state.navigation.currentIDSection
  );
  const location = useLocation();
  const linkID = to ? to.replace("/#", "").replace("#", "") : "";

  // Calculer actualID uniquement si position === "navbar"
  const actualID =
    position === "navbar" && location.pathname === "/" && currentIDSection
      ? currentIDSection.replace(/-\d$/, "")
      : "";

  return (
    <button
      className={`${styles[position]} ${className} ${
        actualID && linkID === actualID ? styles.active : ""
      }`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
}
