import { useEffect, useState } from "react";
import { useCheckIsMobile } from "../useCheckIsMobile";

export function useGetTimeLinePoint(ref?: React.RefObject<SVGSVGElement>) {
  const { isMobile, updateIsMobile } = useCheckIsMobile();
  const [timelinePoints, setTimelinePoints] = useState<Record<number, Element>>({});
  const [paths, setPaths] = useState<string[]>([]);
  const [resizeTrigger, setResizeTrigger] = useState(0); // État pour forcer la mise à jour au resize

  // Variable pour contrôler l'intensité de la courbe
  const curveIntensity = 200; // Ajustez cette valeur pour changer l'intensité

  useEffect(() => {
    // Fonction pour gérer le redimensionnement de l'écran
    const handleResize = () => {
      updateIsMobile(); // Met à jour l'état `isMobile`
      setResizeTrigger((prev) => prev + 1); // Force une mise à jour
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [updateIsMobile]);

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

    const mainElement = document.querySelector("main");
    if (!mainElement) {
      console.error("Main element not found in the DOM.");
      return;
    }

    const coords = Object.values(timelinePoints).map((p: Element) => {
      const r = p.getBoundingClientRect();
      const mainRect = mainElement.getBoundingClientRect();

      return {
        x: r.left + r.width / 2 - mainRect.left,
        y: r.top + r.height / 2 - mainRect.top + mainElement.scrollTop,
      };
    });

    const newPaths: string[] = [];
    coords.forEach((p, i) => {
      if (!coords[i + 1]) return;

      const next = coords[i + 1];

      if (i === 0 && !isMobile) {
        const path = `M ${p.x} ${p.y} L ${next.x} ${next.y}`;
        newPaths.push(path);
        return;
      }

      // Si les points sont entre 0, 1 et 2, créer une ligne droite
      if (i === 1 || i === 2) {
        const path = `M ${p.x} ${p.y} L ${next.x} ${next.y}`;
        newPaths.push(path);
        return;
      }

      // Calculer les points de contrôle pour une tangence verticale
      const controlPoint1 = {
        x: p.x, // Aligné verticalement avec le point actuel
        y: p.y + curveIntensity, // Décalage vers le bas (intensité contrôlée)
      };

      const controlPoint2 = {
        x: next.x, // Aligné verticalement avec le point suivant
        y: next.y - curveIntensity, // Décalage vers le haut (intensité contrôlée)
      };

      // Utiliser une courbe de Bézier cubique
      const path = `M ${p.x} ${p.y} C ${controlPoint1.x} ${controlPoint1.y}, ${controlPoint2.x} ${controlPoint2.y}, ${next.x} ${next.y}`;
      newPaths.push(path);
    });

    setPaths(newPaths);
  }, [timelinePoints, isMobile, resizeTrigger, curveIntensity]); // Ajout de `curveIntensity` comme dépendance

  return { paths };
}