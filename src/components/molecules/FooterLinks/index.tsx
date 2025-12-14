import NavLinks from "../NavLinks";

interface FooterLinksProps {
  links: { label: string; link: string; isCTA?: boolean }[];
}

export default function FooterLinks({ links }: FooterLinksProps) {
  return (
    <div>
      <p>
        <strong>Contenu du site</strong>
      </p>
      <NavLinks links={links} className="navLinks" position="footer" />
    </div>
  );
}
