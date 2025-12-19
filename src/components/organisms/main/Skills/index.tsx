import styles from "./Skills.module.scss";

import SectionWrapper from "@components/wrappers/SectionWrapper";
import ToolsBox from "@components/molecules/main/ToolsBox";

import { useState } from "react";

import { skills } from "@constants/skills";

export default function Skills() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  return (
    <SectionWrapper
      orientation="left"
      title="Mon équipement"
      className={styles.skills}
      id="skills"
    >
      {!selectedTool ? (
        <p className={styles.noSkillSelected}>
          <strong>Choisissez un outil</strong>
        </p>
      ) : (
        <div className={styles.skillDetails}>
          <h3>
            {selectedTool &&
              skills.find((skill) => skill.id === selectedTool)?.title}
          </h3>
        </div>
      )}

      <ToolsBox setSelectedTool={setSelectedTool} />
    </SectionWrapper>
  );
}
