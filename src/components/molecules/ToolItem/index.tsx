import styles from "./ToolItem.module.scss";
import GenericButton from "@components/atoms/appElements/GenericButton";

import { useState } from "react";

interface ToolItemProps {
  skill: {
    id: string;
    label: string;
    component: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  };
  selectedItemId: boolean;
  handleClick: (id: string) => void;
}

export default function ToolItem({ skill, selectedItemId, handleClick }: ToolItemProps) {
  const SkillIcon = skill.component;
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <li
      key={skill.label + skill.id}
      className={
        styles.toolItem +
        (isFocused ? ` ${styles.hovered}` : "") +
        (selectedItemId ? ` ${styles.selected}` : "")
      }
    >
      <GenericButton
        onMouseEnter={() => setIsFocused(true)}
        onMouseLeave={() => setIsFocused(false)}
        action={() => handleClick(skill.id)}
      >
        <div className={styles.toolIcon}>
          <SkillIcon className={styles.tool} />
        </div>
      </GenericButton>
      <span>{skill.label}</span>
    </li>
  );
}
