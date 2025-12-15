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
  console.log({ dataKey, parsedValue });
  return (
    <section className={styles.projectDescriptionSlide}>
      <h2>{projectTitleDesc[dataKey]}</h2>
    </section>
  );
}
