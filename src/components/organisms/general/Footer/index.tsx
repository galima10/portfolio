import AppButton from "@components/atoms/appElements/AppButton";
import FooterInfos from "@components/molecules/general/FooterInfos";
import FooterLinks from "@components/molecules/general/FooterLinks";
import FooterProjects from "@components/molecules/general/FooterProjects";

interface FooterProps {
  links: { label: string; link: string; isCTA?: boolean }[];
  projects?: {
    id: string;
    name: string;
    island: string;
    hook: string;
    slug: string;
  }[];
}

export default function Footer({ links, projects }: FooterProps) {
  const projectsLinks =
    projects?.map((project) => ({
      label: project.name,
      link: "/projects/" + project.slug,
    })) || [];
  return (
    <footer id="footer">
      <div className="backToTop">
        <AppButton
          label="Remonter au camp de base"
          type="tertiary"
          className="footerBtnTertiary"
          to="#hero"
        />
      </div>
      <p className="footerMessage">
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
      <p className="copyright">
        <small>© 2025 Mai Magali - Tous droits réservés.</small>
      </p>
    </footer>
  );
}
