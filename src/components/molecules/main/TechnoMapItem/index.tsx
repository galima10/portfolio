import styles from "./TechnoMapItem.module.scss";
import AppSVG from "@components/atoms/svgIcons/AppSVG";
import GenericButton from "@components/atoms/appElements/GenericButton";

import { useState } from "react";
import { technosList } from "@constants/technos";
import { TechnoItem } from "@types";
import TechnoButton from "@components/atoms/appElements/TechnoButton";

interface TechnoMapItemProps {
  techno: {
    name: string;
    slug: "languagesMap" | "frameworksMap" | "toolsMap" | "discussedMap";
    className: string;
  };
  setSelectedTechno: (techno: string | null) => void;
  selectedTechno: string | null;
  id?: string;
  className?: string;
  timeStep?: number;
}

export default function TechnoMapItem({
  techno,
  setSelectedTechno,
  selectedTechno,
  id,
  className,
  timeStep
}: TechnoMapItemProps) {
  const [isFocused, setIsFocused] = useState(false);

  const category = techno.slug.replace("Map", "");
  return (
    <GenericButton
      className={
        styles.technoItem +
        " " +
        styles[techno.className] +
        (isFocused ? ` ${styles.focused}` : "") +
        (selectedTechno ? ` ${styles.disabledBackgroud}` : "") + " " + (className ? className : "")
      }
      onMouseEnter={() => {
        if (selectedTechno !== category && !selectedTechno) setIsFocused(true);
        else setIsFocused(false);
      }}
      onMouseLeave={() => {
        setIsFocused(false);
      }}
      action={() => {
        if (!selectedTechno) setSelectedTechno(category);
        setIsFocused(false);
      }}
      id={id}
      timeStep={timeStep}
    >
      <AppSVG name={techno.slug} className={styles.map} />
      <h3>{techno.name}</h3>
      {selectedTechno === category && (
        <div className={styles.technoDetails}>
          {technosList[category].map((technoItem: TechnoItem) => (
            <TechnoButton key={technoItem.name} technoItem={technoItem} />
          ))}
        </div>
      )}
    </GenericButton>
  );
}
