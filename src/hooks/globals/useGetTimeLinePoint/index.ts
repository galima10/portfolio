import { useEffect, useState } from "react";
import { useCheckIsMobile } from "../useCheckIsMobile";
// import { useAppSelector } from "@hooks/redux";

export function useGetTimeLinePoint(ref?: React.RefObject<SVGSVGElement>) {
  const { isMobile } = useCheckIsMobile();
  const [timelinePoints, setTimelinePoints] = useState({});
  const [paths, setPaths] = useState<string[]>([]);

  useEffect(() => {
    if (isMobile === null) return;

    const timelinePoints = document.querySelectorAll(".timeline-point");
    timelinePoints.forEach((point, index) => {
      point.setAttribute("data-timeline-index", index.toString());
      setTimelinePoints((prev) => ({ ...prev, [index]: point }));
    });
  }, [isMobile]);

  useEffect(() => {
    if (!ref || Object.keys(timelinePoints).length === 0) return;

    // Récupérer la balise <main> avec querySelector
    const mainElement = document.querySelector("main");
    if (!mainElement) {
      console.error("Main element not found in the DOM.");
      return;
    }

    const coords = Object.values(timelinePoints).map((p: Element) => {
      const r = p.getBoundingClientRect();
      const mainRect = mainElement.getBoundingClientRect(); // Coordonnées de <main>

      return {
        x: r.left + r.width / 2 - mainRect.left, // Ajuster par rapport à <main>
        y: r.top + r.height / 2 - mainRect.top + mainElement.scrollTop, // Ajuster avec le scroll de <main>
      };
    });

    const newPaths: string[] = [];
    coords.forEach((p, i) => {
      if (!coords[i + 1]) return;

      const next = coords[i + 1];
      const path = `M ${p.x} ${p.y} L ${next.x} ${next.y}`;
      newPaths.push(path);
    });

    setPaths(newPaths);
  }, [timelinePoints]);

  return { paths };
}