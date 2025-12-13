import styles from "./AppLogo.module.scss";

import { useAppNavigation } from "@hooks/globals/navigation/useAppNavigation";

import Logo from "@components/atoms/svgIcons/logo";

interface AppLogoProps {
  className?: string;
  action?: () => void;
  to?: string;
}

export default function AppLogo({ className = "", action, to }: AppLogoProps) {
  const { handleClick } = useAppNavigation(action, to);
  return (
    <button className={`${styles.logo} ${className}`} onClick={handleClick}>
      <Logo />
    </button>
  );
}
