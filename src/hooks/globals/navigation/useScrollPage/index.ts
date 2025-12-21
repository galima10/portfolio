import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { sectionsIds } from "@constants/global";

import { scrollToHash } from "@utils/scrollToHash";

export function useScrollPage() {
  const location = useLocation();
  const [isScrolling, setIsScrolling] = useState(false);
  const [step, setStep] = useState(0); // Ajout de l'état step pour suivre la position actuelle

  const mainIds = Object.values(sectionsIds.main);
  const projectsIds = Object.values(sectionsIds.projects);

  function onScrollStart(direction: "up" | "down") {
    if (!isScrolling) {
      setIsScrolling(true);

      const ids = location.pathname !== "/" ? projectsIds : mainIds;

      setStep((prevStep) => {
        let newStep;
        if (direction === "down") {
          // Défilement vers le bas : incrémenter le step
          newStep = (prevStep + 1) % ids.length;
        } else {
          // Défilement vers le haut : décrémenter le step
          newStep = (prevStep - 1 + ids.length) % ids.length; // Assurer un cycle positif
        }

        scrollToHash(ids[newStep]); // Utiliser la nouvelle valeur immédiatement
        return newStep; // Mettre à jour l'état avec la nouvelle valeur
      });
    }
  }

  function onScrollEnd() {
    setIsScrolling(false);
  }

  useEffect(() => {
    function handleWheel(event: WheelEvent) {
      event.preventDefault();

      const direction = event.deltaY > 0 ? "down" : "up";

      if (!isScrolling) {
        onScrollStart(direction);
      }

      setTimeout(() => {
        onScrollEnd();
      }, 200);
    }

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isScrolling]);

  return {};
}