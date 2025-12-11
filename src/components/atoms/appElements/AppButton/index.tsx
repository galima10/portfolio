import styles from "./AppButton.module.scss";

import { useAppNavigation } from "@hooks/globals/useAppNavigation";

interface AppButtonProps {
  type: "primary" | "secondary" | "tertiary";
  label: string;
  className?: string;
  action?: () => void;
  to?: string;
}

export default function AppButton({
  type,
  label,
  className = "",
  action,
  to,
}: AppButtonProps) {
  const { handleClick } = useAppNavigation(action, to);

  return (
    <button className={`${styles[type]} ${className}`} onClick={handleClick}>
      {label}
    </button>
  );
}
