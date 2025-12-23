import styles from "./ToolsBox.module.scss";

import { skills } from "@constants/skills";

import Handle from "@components/atoms/svgIcons/skills/Handle";
import ToolItem from "../ToolItem";

import { useToolsBox } from "@hooks/appElements/molecules/useToolsBox";

interface ToolsBoxProps {
  setSelectedTool: (toolId: string | null) => void;
  selectedTool: string | null;
}

export default function ToolsBox({
  setSelectedTool,
  selectedTool,
}: ToolsBoxProps) {
  const { selectedItemId, handleClick } = useToolsBox(setSelectedTool);
  return (
    <div
      className={`${styles.toolsContainer} timeline-point`}
      data-timeline-index={8}
    >
      <Handle className={styles.handle} />
      <ul
        className={
          styles.toolsList + (selectedItemId ? ` ${styles.selected}` : "")
        }
      >
        {skills.map((skill) => {
          return (
            <ToolItem
              key={skill.label + skill.id}
              skill={skill}
              selectedItemId={selectedItemId === skill.id}
              handleClick={() => handleClick(skill.id)}
              selectedTool={selectedTool}
            />
          );
        })}
      </ul>
      <div className={styles.lid} aria-hidden="true"></div>
    </div>
  );
}
