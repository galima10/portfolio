import styles from "./TechnoMapItem.module.scss";
import AppSVG from "@components/atoms/svgIcons/AppSVG";
import GenericButton from "@components/atoms/appElements/GenericButton";

import { useState } from "react";
import { technosList } from "@constants/technos";

interface TechnoMapItemProps {
  techno: {
    name: string;
    svgName: "languagesMap" | "frameworksMap" | "toolsMap" | "discussedMap";
    className: string;
  };
}

export default function TechnoMapItem({ techno }: TechnoMapItemProps) {
  const [isFocused, setIsFocused] = useState(false);
  const category = techno.svgName.replace("Map", "");
  // console.log(technosList[category])
  return (
    <GenericButton
      className={styles.technoItem + " " + styles[techno.className] + (isFocused ? ` ${styles.focused}` : "")}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
    >
      <AppSVG name={techno.svgName} className={styles.map} />
      <h3>{techno.name}</h3>
    </GenericButton>
  );
}
