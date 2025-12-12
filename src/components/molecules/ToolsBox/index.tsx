import styles from "./ToolsBox.module.scss";

import { skills } from "@constants/skills";

import GenericButton from "@components/atoms/appElements/GenericButton";
import Handle from "@components/atoms/svgIcons/skills/Handle";

import { useToolsBox } from "@hooks/appElements/molecules/useToolsBox";

interface ToolsBoxProps {
  className?: string;
  actions?: () => void;
}

export default function ToolsBox({ className }: ToolsBoxProps) {
  const {
    hoveredItemId,
    handleMouseEnter,
    handleMouseLeave,
    selectedItemId,
    handleClick,
  } = useToolsBox();
  return (
    <div className={styles.toolsContainer}>
      <Handle className={styles.handle} />
      <ul className={styles.toolsList}>
        {skills.map((skill) => {
          const SkillIcon = skill.component;
          return (
            <li
              key={skill.label + skill.id}
              className={
                styles.toolItem +
                (hoveredItemId === skill.id ? ` ${styles.hovered}` : "") +
                (selectedItemId === skill.id ? ` ${styles.selected}` : "")
              }
            >
              <GenericButton
                onMouseEnter={() => handleMouseEnter(skill.id)}
                onMouseLeave={handleMouseLeave}
                action={() => handleClick(skill.id)}
              >
                <div className={styles.toolIcon}>
                  <SkillIcon
                    className={
                      styles.tool
                    }
                  />
                </div>
              </GenericButton>
              <span>{skill.label}</span>
            </li>
          );
        })}
      </ul>
      <div className={styles.lid} aria-hidden="true"></div>
    </div>
  );
}
