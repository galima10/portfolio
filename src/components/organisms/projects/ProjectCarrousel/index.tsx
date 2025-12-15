import styles from "./ProjectCarrousel.module.scss";

import { ProjectDescriptionType } from "@types";

import ProjectDescriptionSlide from "@components/molecules/main/ProjectDescriptionSlide";

interface ProjectCarrouselProps {
  description?: ProjectDescriptionType;
}

export default function ProjectCarrousel({
  description,
}: ProjectCarrouselProps) {
  return (
    <div className={styles.projectCarrousel}>
      <ul>
        {description && Object.entries(description).map(([key, value]) => (
          <li key={key}>
            <ProjectDescriptionSlide dataKey={key} dataValue={JSON.stringify(value)} />
          </li>
        ))}
      </ul>
    </div>
  );
}
