import styles from "./MobileNavbar.module.scss";

import AppLogo from "@components/atoms/appElements/AppLogo";

import { useAppDispatch } from "@hooks/redux";
import { stepUpdated } from "@stores/features/navigationSlice";

interface MobileNavbarProps {
  handleMenuToggle: () => void;
}
export default function MobileNavbar({ handleMenuToggle }: MobileNavbarProps) {
  const dispatch = useAppDispatch();
  return (
    <ul className={styles.mobileNavbar}>
      <li>
        <AppLogo to="#hero" action={() => dispatch(stepUpdated(0))} />
      </li>
      <li>
        <button
          className={styles.hamburgerButton}
          aria-label="Menu"
          onClick={handleMenuToggle}
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </li>
    </ul>
  );
}
