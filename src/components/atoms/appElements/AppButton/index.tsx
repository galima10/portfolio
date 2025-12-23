import styles from "./AppButton.module.scss";

import { useAppNavigation } from "@hooks/globals/navigation/useAppNavigation";

interface AppButtonProps {
  type: "primary" | "secondary" | "tertiary";
  label: string;
  className?: string;
  action?: () => void;
  to?: string;
  timeStep?: number;
}

export default function AppButton({
  type,
  label,
  className = "",
  action,
  to,
  timeStep,
}: AppButtonProps) {
  const { handleClick } = useAppNavigation(action, to);

  return (
    <button
      className={`${styles[type]} ${className}`}
      onClick={handleClick}
      data-timeline-index={timeStep || null}
    >
      {label}
    </button>
  );
}
