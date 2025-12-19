import styles from "./ToolItem.module.scss";
import GenericButton from "@components/atoms/appElements/GenericButton";

import { useToolItem } from "@hooks/appElements/molecules/useToolItem";

import AppSVG from "@components/atoms/svgIcons/AppSVG";

interface ToolItemProps {
  skill: {
    id: string;
    title: string;
    label: string;
    component: "hammer" | "brush" | "wrench" | "glass" | "talkie" | "lamp";
    skillsDetails?: string[];
  };
  selectedItemId: boolean;
  handleClick: (id: string) => void;
  selectedTool: string | null;
}

export default function ToolItem({
  skill,
  selectedItemId,
  handleClick,
  selectedTool,
}: ToolItemProps) {
  const { isFocused, setIsFocused, handleItemClick } = useToolItem(skill);

  return (
    <li
      key={skill.label + skill.id}
      className={
        styles.toolItem +
        (isFocused ? ` ${styles.hovered}` : "") +
        (selectedItemId ? ` ${styles.selected}` : "")

      }
    >
      <div className={styles.toolButton}>
        <GenericButton
          onMouseEnter={() => setIsFocused(true)}
          onMouseLeave={() => setIsFocused(false)}
          action={() => {
            handleClick(skill.id);
            handleItemClick();
          }}
        >
          <div className={styles.toolIcon}>
            <AppSVG name={skill.component} className={styles.tool} />
          </div>
        </GenericButton>
        <span>{skill.label}</span>
      </div>
      {selectedTool === skill.id && (
        <div className={styles.toolDetails}>
          <h3>{skill.title}</h3>
          <ul>
            {skill.skillsDetails?.map((detail, index) => (
              <li key={detail + index}>{detail}</li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}
