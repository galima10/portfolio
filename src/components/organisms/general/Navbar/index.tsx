import NavLinks from "@components/molecules/general/NavLinks";
import MobileNavbar from "@components/molecules/general/MobileNavbar";

import { useNavbar } from "@hooks/appElements/organisms/useNavbar";

interface NavbarProps {
  links: { label: string; link: string; isCTA?: boolean }[];
}

export default function Navbar({ links }: NavbarProps) {
  const { mobileMenuRef, darkFilterRef, handleMenuToggle } = useNavbar(
    "active",
    "open"
  );
  return (
    <header id="main-navbar">
      <nav aria-label="Navigation principale">
        <MobileNavbar handleMenuToggle={handleMenuToggle} />
        <div className="filterDark" ref={darkFilterRef}></div>
        <NavLinks
          links={links}
          ref={mobileMenuRef}
          handleMenuToggle={handleMenuToggle}
          className="navLinks"
        />
      </nav>
    </header>
  );
}
