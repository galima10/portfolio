import styles from "./ToolItem.module.scss";
import GenericButton from "@components/atoms/appElements/GenericButton";

import { useState } from "react";

import AppSVG from "@components/atoms/svgIcons/AppSVG";

interface ToolItemProps {
  skill: {
    id: string;
    label: string;
    component: "hammer" | "brush" | "wrench" | "glass" | "talkie" | "lamp";
  };
  selectedItemId: boolean;
  handleClick: (id: string) => void;
}

export default function ToolItem({ skill, selectedItemId, handleClick }: ToolItemProps) {
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
          <AppSVG name={skill.component} className={styles.tool} />
        </div>
      </GenericButton>
      <span>{skill.label}</span>
    </li>
  );
}
