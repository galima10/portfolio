import styles from "./NavLinks.module.scss";

import NavButton from "@components/atoms/appElements/NavButton";
import AppButton from "@components/atoms/appElements/AppButton";
import AppLogo from "@components/atoms/appElements/AppLogo";
import GenericButton from "@components/atoms/appElements/GenericButton";

import Github from "@components/atoms/svgIcons/Github";
import LinkedIn from "@components/atoms/svgIcons/LinkedIn";

interface NavLinkProps {
  links: { label: string; link: string; isCTA?: boolean }[];
  ref: React.Ref<HTMLUListElement> | null;
  handleMenuToggle: () => void;
  className?: string;
}

export default function NavLinks({
  links,
  ref,
  handleMenuToggle,
  className,
}: NavLinkProps) {
  return (
    <ul className={`${styles.navLinks} ${className}`} ref={ref}>
      <li className={styles.closeMenu}>
        <button
          className={styles.closeButton}
          aria-label="Close Menu"
          onClick={handleMenuToggle}
        >
          <span className={styles.closeLine}></span>
          <span className={styles.closeLine}></span>
        </button>
      </li>
      <li>
        <AppLogo className={styles.logo} />
      </li>
      {links.map((link) => (
        <li key={link.link + link.label} className={styles.navItem}>
          {link.isCTA ? (
            <AppButton type="primary" to={link.link} label={link.label} />
          ) : (
            <NavButton position="navbar" to={link.link} label={link.label} />
          )}
        </li>
      ))}
      <li className={styles.githubIcon}>
        <GenericButton to="https://github.com/galima10/">
          <Github className={styles.svgIcon} />
        </GenericButton>
      </li>
      <li className={styles.linkedinIcon}>
        <GenericButton to="https://www.linkedin.com/in/mai-magali/">
          <LinkedIn className={styles.svgIcon} />
        </GenericButton>
      </li>
    </ul>
  );
}
