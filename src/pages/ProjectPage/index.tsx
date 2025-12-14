import { useParams } from "react-router-dom";
import { projects } from "@constants/projects";

import Hero from "@components/organisms/projects/Hero";

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((project) => project.slug === slug);
  const { name, stack, hook } = project || {}; 

  if (!project) {
    return <p>Projet introuvable</p>;
  }

  return (
    <>
      <Hero name={name} stack={stack.map((item) => item.icon)} hook={hook} />
    </>
  );
}
