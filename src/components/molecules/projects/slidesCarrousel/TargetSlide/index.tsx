import styles from "../Carrousel.module.scss";

import { translationsProjects } from "@constants/global";

interface TargetSlideProps {
  target: {
    principal: string;
    relay?: string;
  };
}

export default function TargetSlide({ target }: TargetSlideProps) {
  return <div className={styles.targetSlide}>
    {target && (
      <>
        <p>
            <strong>{translationsProjects["principal"]}:</strong> {target.principal}
        </p>
        {target.relay && (
          <p>
            <strong>{translationsProjects["relay"]}:</strong> {target.relay}
          </p>
        )}
      </>
    )}
  </div>;
}
