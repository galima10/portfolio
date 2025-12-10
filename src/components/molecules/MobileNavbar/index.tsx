import styles from "./MobileNavbar.module.scss";

import AppLogo from "@components/atoms/appElements/AppLogo";

interface MobileNavbarProps {
  handleMenuToggle: () => void;
}
export default function MobileNavbar({ handleMenuToggle }: MobileNavbarProps) {
  return (
    <ul className={styles.mobileNavbar}>
      <li>
        <AppLogo />
      </li>
      <li>
        <button className={styles.hamburgerButton} aria-label="Menu" onClick={handleMenuToggle}>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </li>
    </ul>
  );
}
