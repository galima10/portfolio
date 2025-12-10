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
      
      <NavLinks links={links} />
    </nav>
  );
}
