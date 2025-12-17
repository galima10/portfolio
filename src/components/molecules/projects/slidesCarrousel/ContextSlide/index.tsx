import styles from "../Carrousel.module.scss";

import { translationsProjects, projectTitleDesc } from "@constants/global";

interface ContextSlideProps {
  context: {
    category: string;
    sector: string;
    type: string;
    customer?: string;
    summaryInfos: string;
  };
}

export default function ContextSlide({ context }: ContextSlideProps) {
  return (
    <div className={styles.slides}>
      <h2 className="project-h2">{projectTitleDesc.context}</h2>
      <div className={`${styles.slideContent} ${styles.contextSlide}`}>
        {context &&
          Object.entries(context).map(([key, value]) => (
            <p key={key}>
              {key !== "summaryInfos" && (
                <span>
                  <strong>{translationsProjects[key]}:</strong>
                </span>
              )}{" "}
              <span>{value}</span>
            </p>
          ))}
      </div>
    </div>
  );
}
