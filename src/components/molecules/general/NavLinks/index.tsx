import styles from "./NavLinks.module.scss";

import NavButton from "@components/atoms/appElements/NavButton";
import AppButton from "@components/atoms/appElements/AppButton";
import AppLogo from "@components/atoms/appElements/AppLogo";
import GenericButton from "@components/atoms/appElements/GenericButton";

import AppSVG from "@components/atoms/svgIcons/AppSVG";

interface NavLinkProps {
  links: { label: string; link: string; isCTA?: boolean }[];
  ref?: React.Ref<HTMLUListElement> | null;
  handleMenuToggle?: () => void;
  className?: string;
  position?: "navbar" | "footer";
}

export default function NavLinks({
  links,
  ref,
  handleMenuToggle,
  className,
  position = "navbar",
}: NavLinkProps) {
  return (
    <ul
      className={`${
        position === "navbar" ? styles.headerNavLinks : styles.footerNavLinks
      } ${className}`}
      ref={ref}
    >
      {position === "navbar" && (
        <>
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
            <AppLogo
              className={styles.logo}
              to="/#hero"
            />
          </li>
        </>
      )}
      {links.map((link, index) => (
        <li key={link.link + link.label} className={styles.navItem}>
          {link.isCTA ? (
            <AppButton
              type="primary"
              to={link.link}
              label={link.label}
            />
          ) : (
            <NavButton
              position={position}
              to={link.link}
              label={link.label}
            />
          )}
        </li>
      ))}
      {position === "navbar" && (
        <>
          <li className={styles.githubIcon}>
            <GenericButton to="https://github.com/galima10/">
              <AppSVG name="github" className={styles.svgIcon} />
            </GenericButton>
          </li>
          <li className={styles.linkedinIcon}>
            <GenericButton to="https://www.linkedin.com/in/mai-magali/">
              <AppSVG name="linkedin" className={styles.svgIcon} />
            </GenericButton>
          </li>
        </>
      )}
    </ul>
  );
}
