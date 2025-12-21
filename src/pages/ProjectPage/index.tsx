import { useParams } from "react-router-dom";
import { projects } from "@constants/projects";

import ProjectHero from "@components/organisms/projects/ProjectHero";
import ProjectCarrousel from "@components/organisms/projects/ProjectCarrousel";
import CTASection from "@components/organisms/projects/CTASection";
import FormProject from "@components/organisms/projects/FormProject";

import { useScrollPage } from "@hooks/globals/navigation/useScrollPage";
import { useAppDispatch } from "@hooks/redux";
import { clearNavigationState } from "@stores/features/navigationSlice";
import { useEffect } from "react";

export default function ProjectPage() {
  const dispatch = useAppDispatch();

  // Réinitialiser `step` lors du montage
  useEffect(() => {
    dispatch(clearNavigationState());
  }, [dispatch]);

  useScrollPage();
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
    </>
  );
}
