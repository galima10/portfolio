import { useParams } from "react-router-dom";
import { projects } from "@constants/projects";

import ProjectHero from "@components/organisms/projects/ProjectHero";
import ProjectCarrousel from "@components/organisms/projects/ProjectCarrousel";
import CTASection from "@components/organisms/projects/CTASection";
import FormProject from "@components/organisms/projects/FormProject";

import Footer from "@components/organisms/general/Footer";
import { footerNavLinks } from "@constants/global";

import { useScrollSnap } from "@hooks/globals/navigation/useScrollSnap";

export default function ProjectPage() {
  useScrollSnap("main");
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((project) => project.slug === slug);
  const { name, stack, hook, preview, description, proofs } = project || {};

  if (!project) {
    return <p>Projet introuvable</p>;
  }

  return (
    <>
      <ProjectHero
        name={name}
        stack={stack.map((item) => item.icon)}
        hook={hook}
        imageSrc={preview}
      />
      <ProjectCarrousel description={description} proofs={proofs} />
      <CTASection />
      <FormProject />
      <Footer links={footerNavLinks} projects={projects} />
    </>
  );
}
