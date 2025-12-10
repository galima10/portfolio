import styles from "./Navbar.module.scss";

import NavLinks from "@components/molecules/NavLinks";
import MobileNavbar from "@components/molecules/MobileNavbar";

interface NavbarProps {
  links: { label: string; link: string; isCTA?: boolean }[];
}

export default function Navbar({ links }: NavbarProps) {
  return (
    <nav className={styles.navbar}>
      <MobileNavbar />
      <div className={styles.filterDark}></div>
      <NavLinks links={links} />
    </nav>
  );
}
