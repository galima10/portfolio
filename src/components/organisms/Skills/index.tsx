import styles from "./Skills.module.scss";

import SectionWrapper from "@components/wrappers/SectionWrapper";
import GenericButton from "@components/atoms/appElements/GenericButton";

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
      <ul className={styles.toolsList}>
        {skills.map((skill) => {
          const SkillIcon = skill.component;
          return (
            <li key={skill.label + skill.id} className={styles.toolItem}>
              <GenericButton>
                <SkillIcon className={styles.tool} />
              </GenericButton>
              <span>{skill.label}</span>
            </li>
          );
        })}
      </ul>
    </SectionWrapper>
  );
}
