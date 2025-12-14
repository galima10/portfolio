import AppButton from "@components/atoms/appElements/AppButton";
import NavLinks from "@components/molecules/NavLinks";
import AppSVG from "@components/atoms/svgIcons/AppSVG";
import GenericButton from "@components/atoms/appElements/GenericButton";

import FooterInfos from "@components/molecules/FooterInfos";
import FooterLinks from "@components/molecules/FooterLinks";
import FooterProjects from "@components/molecules/FooterProjects";

interface FooterProps {
  links: { label: string; link: string; isCTA?: boolean }[];
  projects?: {
    id: string;
    name: string;
    island: string;
    hook: string;
    projectLink: string;
  }[];
}

export default function Footer({ links, projects }: FooterProps) {
  const projectsLinks =
    projects?.map((project) => ({
      label: project.name,
      link: project.projectLink,
    })) || [];
  return (
    <footer>
      <AppButton label="Remonter au camp de base" type="tertiary" />
      <p>
        <strong>
          Merci d’avoir parcouru mon aventure, au plaisir de continuer le voyage
          avec vous !
        </strong>
      </p>
      <FooterInfos />
      <FooterLinks links={links} />
      {projectsLinks.length > 0 && (
        <FooterProjects projectsLinks={projectsLinks} />
      )}
      <p>
        <small>© 2025 Mai Magali - Tous droits réservés.</small>
      </p>
    </footer>
  );
}
