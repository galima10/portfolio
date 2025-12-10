import App from "App";
import styles from "./MobileNavbar.module.scss";

import AppLogo from "@components/atoms/appElements/AppLogo";

export default function MobileNavbar() {
  return (
    <ul className={styles.mobileNavbar}>
      <li>
        <AppLogo />
      </li>
      <li>
        <button className={styles.hamburgerButton} aria-label="Menu">
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </li>
    </ul>
  );
}
