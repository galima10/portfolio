import styles from "./NavLinks.module.scss";

import NavButton from "@components/atoms/appElements/NavButton";
import AppButton from "@components/atoms/appElements/AppButton";
import AppLogo from "@components/atoms/appElements/AppLogo";
import NavExternalButton from "@components/atoms/appElements/NavExternalButton";

import Github from "@components/atoms/svgIcons/Github";
import LinkedIn from "@components/atoms/svgIcons/LinkedIn";

interface NavLinkProps {
  label: string;
  link: string;
  isCTA?: boolean;
}

export default function NavLinks({ links }: { links: NavLinkProps[] }) {
  return (
    <ul className={styles.navLinks}>
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
        <NavExternalButton href="https://github.com/galima10/">
          <Github className={styles.svgIcon} />
        </NavExternalButton>
      </li>
      <li className={styles.linkedinIcon}>
        <NavExternalButton href="https://www.linkedin.com/in/mai-magali/">
          <LinkedIn className={styles.svgIcon} />
        </NavExternalButton>
      </li>
    </ul>
  );
}
