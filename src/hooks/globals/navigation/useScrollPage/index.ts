import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

import { sectionsIds } from "@constants/global";

import { scrollToHash } from "@utils/scrollToHash";

export function useScrollPage() {
  const location = useLocation();
  const [isScrolling, setIsScrolling] = useState(false);
  const [step, setStep] = useState(0); // État pour suivre la position actuelle
  const touchStartY = useRef<number | null>(null); // Utilisation de useRef pour éviter les re-rendus inutiles
  const lastScrollTime = useRef<number>(0); // Ref pour limiter la fréquence des défilements

  const mainIds = Object.values(sectionsIds.main);
  const projectsIds = Object.values(sectionsIds.projects);

//   function disableScroll() {
//     document.body.style.overflow = "hidden"; // Désactiver le défilement natif
//   }

  function enableScroll() {
    document.body.style.overflow = ""; // Réactiver le défilement natif
  }

  function onScrollStart(direction: "up" | "down") {
    if (!isScrolling) {
      setIsScrolling(true);
    //   disableScroll(); // Désactiver le défilement natif pendant le défilement personnalisé

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
    enableScroll(); // Réactiver le défilement natif après le défilement personnalisé
  }

  useEffect(() => {
    // Gestion du défilement avec la molette
    function handleWheel(event: WheelEvent) {
      const now = Date.now();
      if (now - lastScrollTime.current < 500) return; // Ignorer les événements trop rapprochés
      lastScrollTime.current = now;

      event.preventDefault();

      const direction = event.deltaY > 0 ? "down" : "up";

      if (!isScrolling) {
        onScrollStart(direction);
      }

      setTimeout(() => {
        onScrollEnd();
      }, 200);
    }

    // Gestion des gestes tactiles
    function handleTouchStart(event: TouchEvent) {
      touchStartY.current = event.touches[0].clientY; // Enregistrer la position initiale du toucher
    }

    function handleTouchMove(event: TouchEvent) {
      if (touchStartY.current === null) return;

      const touchEndY = event.touches[0].clientY;
      const deltaY = touchStartY.current - touchEndY;

      // Ignorer les petits mouvements
      if (Math.abs(deltaY) < 50) return;

      const direction = deltaY > 0 ? "down" : "up";

      const now = Date.now();
      if (now - lastScrollTime.current < 500) return; // Ignorer les événements trop rapprochés
      lastScrollTime.current = now;

      if (!isScrolling) {
        onScrollStart(direction);
      }

      setTimeout(() => {
        onScrollEnd();
      }, 200);

      touchStartY.current = null; // Réinitialiser la position initiale après le défilement
    }

    // Ajouter les écouteurs d'événements
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      // Nettoyer les écouteurs d'événements
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      enableScroll(); // Réactiver le défilement natif au démontage
    };
  }, [isScrolling]);

  return {};
}