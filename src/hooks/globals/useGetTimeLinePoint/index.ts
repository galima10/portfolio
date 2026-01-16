import { useEffect, useState, useRef } from "react";
import { useCheckIsMobile } from "../useCheckIsMobile";

export function useGetTimeLinePoint(ref?: React.RefObject<SVGSVGElement>) {
  const { isMobile, updateIsMobile } = useCheckIsMobile();
  const [timelinePoints, setTimelinePoints] = useState<Record<number, Element>>(
    {}
  );
  const [paths, setPaths] = useState<string[]>([]);
  const [resizeTrigger, setResizeTrigger] = useState(0); // État pour forcer la mise à jour au resize

  // Variable pour contrôler l'intensité de la courbe
  const curveIntensity = 250; // Ajustez cette valeur pour changer l'intensité

  // Ref pour éviter les recalculs multiples
  const hasComputedResize = useRef(false);
  const idleCallbackId = useRef<number | null>(null);

  useEffect(() => {
    // Fonction pour gérer le redimensionnement de l'écran
    const handleResize = () => {
      if (hasComputedResize.current) return; // Évite les recalculs multiples
      hasComputedResize.current = true;

      if (idleCallbackId.current !== null) {
        cancelIdleCallback(idleCallbackId.current); // Annule les callbacks en attente
      }

      idleCallbackId.current = requestIdleCallback(() => {
        updateIsMobile(); // Met à jour l'état `isMobile`
        setResizeTrigger((prev) => prev + 1); // Force une mise à jour

        // Réinitialise le flag après le traitement
        hasComputedResize.current = false;
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (idleCallbackId.current !== null) {
        cancelIdleCallback(idleCallbackId.current); // Nettoie les callbacks en attente
      }
    };
  }, [updateIsMobile]);

  useEffect(() => {
    if (isMobile === null) return;
    generatePaths();
  }, [isMobile]);

  function generatePaths() {
    console.log("Generating paths...");
    const timelinePoints = document.querySelectorAll(".timeline-point");
    timelinePoints.forEach((point, index) => {
      point.setAttribute("data-timeline-index", index.toString());
      setTimelinePoints((prev) => ({ ...prev, [index]: point }));
    });

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

      if (i === 0 || i === 1 || i === 2) {
        const verticalOffset = i === 2 ? 50 : -50; // Décalage positif pour l'index 2, négatif pour 0 et 1
        const controlPoint = {
          x: (p.x + next.x) / 2, // Point de contrôle au milieu horizontalement
          y: (p.y + next.y) / 2 + verticalOffset, // Décalage vertical pour la courbure
        };

        const path = `M ${p.x} ${p.y} Q ${controlPoint.x} ${controlPoint.y} ${next.x} ${next.y}`;
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
  }

  useEffect(() => {
    generatePaths();
  }, [isMobile, resizeTrigger, curveIntensity]); // Ajout de `curveIntensity` comme dépendance

  return { paths };
}