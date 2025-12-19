import styles from "./TechnoMapItem.module.scss";
import AppSVG from "@components/atoms/svgIcons/AppSVG";
import GenericButton from "@components/atoms/appElements/GenericButton";

import { useState, useRef } from "react";
import { technosList } from "@constants/technos";

interface TechnoMapItemProps {
  techno: {
    name: string;
    slug: "languagesMap" | "frameworksMap" | "toolsMap" | "discussedMap";
    className: string;
  };
  setSelectedTechno: (techno: string | null) => void;
}

export default function TechnoMapItem({ techno, setSelectedTechno }: TechnoMapItemProps) {
  const [isFocused, setIsFocused] = useState(false);
  const category = techno.slug.replace("Map", "");
  // console.log(technosList[category])
  const mapRef = useRef<HTMLButtonElement>(null);
  return (
    <GenericButton
      className={styles.technoItem + " " + styles[techno.className] + (isFocused ? ` ${styles.focused}` : "")}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      action={() => setSelectedTechno(category)}
      ref={mapRef}
    >
      <AppSVG name={techno.slug} className={styles.map} />
      <h3>{techno.name}</h3>
    </GenericButton>
  );
}
