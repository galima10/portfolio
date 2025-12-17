import styles from "../Carrousel.module.scss";

import { translationsProjects } from "@constants/global";

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
    <div className={`${styles.slides} ${styles.contextSlide}`}>
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
  );
}
