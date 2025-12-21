import GenericButton from "../GenericButton";
import { useState } from "react";
import { TechnosType, TechnoItem } from "@types";
import { slugify } from "@utils/slugify";

import styles from "./TechnoButton.module.scss";
import AppSVG from "@components/atoms/svgIcons/AppSVG";

export default function TechnoButton({
  technoItem,
}: {
  technoItem: TechnoItem;
}) {
  const [technoDetailsVisible, setTechnoDetailsVisible] = useState(false);
  return (
    <div
      style={{
        gridRow: technoItem.cell?.row,
        gridColumn: technoItem.cell?.col,
      }}
      onMouseEnter={() => setTechnoDetailsVisible(true)}
      onMouseLeave={() => setTechnoDetailsVisible(false)}
    >
      <div
        key={technoItem.name}
        className={styles.technoDetailItem + " " + styles[technoItem.type]}
      >
        <AppSVG
          name={slugify(technoItem.name) as TechnosType}
          className={styles.technoDetailIcon}
        />
        <span
          className={
            styles.technoDetailName +
            (technoDetailsVisible ? " " + styles.visible : "")
          }
        >
          <strong>{technoItem.name}</strong>
        </span>
      </div>
    </div>
  );
}
