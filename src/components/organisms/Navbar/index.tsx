import NavLinks from "@components/molecules/NavLinks";
import MobileNavbar from "@components/molecules/MobileNavbar";

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
    <header>
      <nav>
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
