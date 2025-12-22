import styles from "./MobileNavbar.module.scss";

import AppLogo from "@components/atoms/appElements/AppLogo";

interface MobileNavbarProps {
  handleOpenMenu: () => void;
}
export default function MobileNavbar({ handleOpenMenu }: MobileNavbarProps) {
  return (
    <ul className={styles.mobileNavbar}>
      <li>
        <AppLogo to="/#hero" />
      </li>
      <li>
        <button
          className={styles.hamburgerButton}
          aria-label="Menu"
          onClick={handleOpenMenu}
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </li>
    </ul>
  );
}
