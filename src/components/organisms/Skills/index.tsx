import styles from "./Skills.module.scss";

import SectionWrapper from "@components/wrappers/SectionWrapper";
import GenericButton from "@components/atoms/appElements/GenericButton";

import Handle from "@components/atoms/svgIcons/skills/Handle";

import ToolsBox from "@components/molecules/ToolsBox";

import { skills } from "@constants/skills";

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
