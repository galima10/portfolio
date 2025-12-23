import { useRef, useEffect } from "react";
import styles from "./TimeLine.module.scss";
import { useGetTimeLinePoint } from "@hooks/globals/useGetTimeLinePoint";

export default function TimeLine() {
  const svgRef = useRef<SVGSVGElement>(null); // Créer un ref pour le SVG
  const { paths } = useGetTimeLinePoint(svgRef); // Récupérer les chemins
  return (
    <div className={styles.timeline}>
      <svg className={styles.timelineSvg} aria-hidden="true" ref={svgRef}>
        {paths.map((path, index) => (
          <path
            key={index}
            d={path}
            // stroke="black"
            // strokeWidth="2"
            // fill="none"
          />
        ))}
      </svg>
    </div>
  );
}
