import styles from "./Navbar.module.scss";

import NavButton from "@components/atoms/NavButton";
import AppButton from "@components/atoms/AppButton";
import AppLogo from "@components/atoms/AppLogo";

interface NavbarProps {
  links: { label: string; link: string; isCTA?: boolean }[];
}

export default function Navbar({ links }: NavbarProps) {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.logo}>
          <AppLogo />
        </li>
        {links.map((link) => (
          <li key={link.link} className={styles.navItem}>
            {link.isCTA ? (
              <AppButton type="primary" link={link.link} label={link.label} />
            ) : (
              <NavButton position="navbar" link={link.link} label={link.label} />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
