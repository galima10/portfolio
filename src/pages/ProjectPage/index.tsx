import { useParams } from "react-router-dom";
import { projects } from "@constants/projects";

import ProjectHero from "@components/organisms/projects/ProjectHero";
import ProjectCarrousel from "@components/organisms/projects/ProjectCarrousel";



export default function ProjectPage() {
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
    </>
  );
}
