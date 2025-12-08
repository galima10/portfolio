import styles from "./Navbar.module.scss";

import NavButton from "@components/atoms/appElements/NavButton";
import AppButton from "@components/atoms/appElements/AppButton";
import AppLogo from "@components/atoms/appElements/AppLogo";

import Github from "@components/atoms/svgIcons/Github";
import LinkedIn from "@components/atoms/svgIcons/LinkedIn";

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
        <li className={styles.githubIcon}>
          <a
            href="https://github.com/galima10/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className={styles.svgIcon} />
          </a>
        </li>
        <li className={styles.linkedinIcon}>
          <a
            href="https://www.linkedin.com/in/mai-magali/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn className={styles.svgIcon} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
