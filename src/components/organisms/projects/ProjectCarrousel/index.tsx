import styles from "./ProjectCarrousel.module.scss";

import { ProjectDescription } from "@types";

interface ProjectCarrouselProps {
  description: ProjectDescription;
}

export default function ProjectCarrousel({
  description,
}: ProjectCarrouselProps) {
//   const {
//     context,
//     challenges,
//     objectives,
//     target,
//     deliverables,
//     constraints,
//     resources,
//     planning,
//     missions,
//     tools,
//     skills,
//     results,
//     proofs,
//     demonstrationLinks,
//     consclusions,
//   } = description;
const descriptionKeys = description ? Object.keys(description) : [];
  return <div className={styles.projectCarrousel}>
    <ul>

    </ul>
  </div>;
}
