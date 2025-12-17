import styles from "../Carrousel.module.scss";

import { translationsProjects } from "@constants/global";

interface DeliverablesConstraintsResourcesSlideProps {
  deliverablesConstraintsResources: {
    deliverables: {
      name: string;
      format: string;
      goal: string;
      specificities?: string;
      technologies: string;
    }[];
    constraints: {
      temporal?: string[];
      technical?: string[];
      budget?: string[];
      graphic?: string[];
      geographic?: string[];
    };
    resources: {
      available: string[];
      missing: string[];
    };
  };
}

export default function DeliverablesConstraintsResources({
  deliverablesConstraintsResources,
}: DeliverablesConstraintsResourcesSlideProps) {
  console.log(deliverablesConstraintsResources);
  return (
    <div className={styles.deliverablesConstraintsResourcesSlide}>
      <div>
        <strong>{translationsProjects["deliverables"]}</strong>
        <ul>
          {deliverablesConstraintsResources.deliverables.map(
            (deliverable, index) => (
              <li key={`${deliverable.name}-${index}`}>
                <em>{deliverable.name}</em> - {deliverable.format} -{" "}
                {deliverable.goal}
                {deliverable.specificities &&
                  ` - ${deliverable.specificities}`}{" "}
                - {deliverable.technologies}
              </li>
            )
          )}
        </ul>
      </div>
      <div>
        <strong>{translationsProjects["constraints"]}</strong>
        {Object.entries(deliverablesConstraintsResources.constraints).map(
          ([key, values]) =>
            values && (
              <p key={key}>
                <em>{translationsProjects[key]}:</em> {values.join(", ")}
              </p>
            )
        )}
      </div>
      <div>
        <strong>{translationsProjects["resources"]}</strong>
        <ul>
          <li>
            <em>{translationsProjects["available"]}:</em>{" "}
            {deliverablesConstraintsResources.resources.available.join(", ")}
          </li>
          <li>
            <em>{translationsProjects["missing"]}:</em>{" "}
            {deliverablesConstraintsResources.resources.missing.join(", ")}
          </li>
        </ul>
      </div>
    </div>
  );
}
