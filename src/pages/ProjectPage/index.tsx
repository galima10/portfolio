import { useParams } from "react-router-dom";
import { projects } from "@constants/projects";

import ProjectHero from "@components/organisms/projects/ProjectHero";
import ProjectCarrousel from "@components/organisms/projects/ProjectCarrousel";
import CTASection from "@components/organisms/projects/CTASection";
import FormProject from "@components/organisms/projects/FormProject";

import { useScrollPage } from "@hooks/globals/navigation/useScrollPage";

export default function ProjectPage() {
  useScrollPage();
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((project) => project.slug === slug);
  const { name, stack, hook, preview, description, proofs } = project || {}; 

  if (!project) {
    return <p>Projet introuvable</p>;
  }

  return (
    <>
      <ProjectHero name={name} stack={stack.map((item) => item.icon)} hook={hook} imageSrc={preview} />
      <ProjectCarrousel description={description} proofs={proofs} />
      <CTASection />
      <FormProject />
    </>
  );
}
