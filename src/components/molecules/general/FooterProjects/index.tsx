import NavLinks from "@components/molecules/general/NavLinks";

interface FooterProjectsProps {
  projectsLinks: { label: string; link: string; isCTA?: boolean }[];
}

export default function FooterProjects({ projectsLinks }: FooterProjectsProps) {
  return (
    <div className="footerLinks footerProjectsLinks">
      <p>
        <strong>Projets</strong>
      </p>
      <nav aria-label="Navigation des projets dans le pied de page">
        <NavLinks
          links={projectsLinks}
          className="navLinks"
          position="footer"
        />
      </nav>
    </div>
  );
}
