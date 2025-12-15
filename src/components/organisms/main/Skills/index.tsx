import styles from "./Skills.module.scss";

import SectionWrapper from "@components/wrappers/SectionWrapper";
import ToolsBox from "@components/molecules/main/ToolsBox";

export default function Skills() {
  return (
    <SectionWrapper
      orientation="left"
      title="Mon équipement"
      className={styles.skills}
      id="skills"
    >
      <h3>Choisissez un outil</h3>
      <ToolsBox />
    </SectionWrapper>
  );
}
