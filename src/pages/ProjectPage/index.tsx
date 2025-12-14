import { useParams } from "react-router-dom";
import { projects } from "@constants/projects";

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>(); // Récupère l'ID depuis l'URL
  const project = projects.find((project) => project.slug === id); // Trouve le projet correspondant

  if (!project) {
    return <p>Projet introuvable</p>; // Gestion des erreurs si l'ID est invalide
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
    </div>
  );
}
