import styles from "./ProjectDescriptionSlide.module.scss";

import { projectTitleDesc } from "@constants/global";

interface ProjectDescriptionSlideProps {
  dataKey: string;
  dataValue: string;
}

export default function ProjectDescriptionSlide({
  dataKey,
  dataValue,
}: ProjectDescriptionSlideProps) {
  const parsedValue = JSON.parse(dataValue);
  const contentMocked = "Le projet est né d’une volonté de faciliter mon quotidien face à l’absence d’alternatives répondant pleinement à mes besoins. L’usage croissant des applications mobiles rend ce projet pertinent, nécessitant une solution simple, intuitive et efficace pour rendre la cuisine plus accessible. Il fallait également éviter la conception d’un produit inefficace, incapable d’apporter une réelle solution, et qui irait à l’encontre de l’objectif recherché.";
  const content = typeof parsedValue === "string" ? parsedValue : contentMocked;
  return (
    <section className={styles.projectDescriptionSlide}>
      <h2>{projectTitleDesc[dataKey]}</h2>
      <div>
        <strong>Projet</strong>
        <p>
          <span></span>
        </p>
      </div>
    </section>
  );
}
