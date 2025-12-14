import NavLinks from "@components/molecules/NavLinks";

interface FooterProjectsProps {
  projectsLinks: { label: string; link: string; isCTA?: boolean }[];
}

export default function FooterProjects({ projectsLinks }: FooterProjectsProps) {
  return (
    <div>
      <p>
        <strong>Projets</strong>
      </p>
      <NavLinks links={projectsLinks} className="navLinks" position="footer" />
    </div>
  );
}
