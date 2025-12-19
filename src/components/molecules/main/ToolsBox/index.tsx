import styles from "./ToolsBox.module.scss";

import { skills } from "@constants/skills";

import Handle from "@components/atoms/svgIcons/skills/Handle";
import ToolItem from "../ToolItem";

import { useToolsBox } from "@hooks/appElements/molecules/useToolsBox";

interface ToolsBoxProps {
  setSelectedTool: (toolId: string | null) => void;
}

export default function ToolsBox({ setSelectedTool }: ToolsBoxProps ) {
  const {
    selectedItemId,
    handleClick,
  } = useToolsBox(setSelectedTool);
  return (
    <div className={styles.toolsContainer}>
      <Handle className={styles.handle} />
      <ul className={styles.toolsList}>
        {skills.map((skill) => {
          return (
            <ToolItem
              key={skill.label + skill.id}
              skill={skill}
              selectedItemId={selectedItemId === skill.id}
              handleClick={() => handleClick(skill.id)}
            />
          );
        })}
      </ul>
      <div className={styles.lid} aria-hidden="true"></div>
    </div>
  );
}
