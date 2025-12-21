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

  function enableScroll() {
    document.body.style.overflow = ""; // Réactiver le défilement natif
  }

  function findScrollableParent(element: HTMLElement | null): HTMLElement | null {
    if (!element) return null;
    const style = window.getComputedStyle(element);
    const isScrollable =
      style.overflowY === "auto" || style.overflowY === "scroll";
    if (isScrollable && element.scrollHeight > element.clientHeight) {
      return element; // Retourner l'élément défilable
    }
    return findScrollableParent(element.parentElement); // Remonter dans la hiérarchie
  }

  function isAtScrollBoundary(element: HTMLElement, direction: "up" | "down"): boolean {
    if (direction === "up") {
      return element.scrollTop === 0; // En haut de l'élément
    } else if (direction === "down") {
      return element.scrollTop + element.clientHeight >= element.scrollHeight; // En bas de l'élément
    }
    return false;
  }

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
    enableScroll(); // Réactiver le défilement natif après le défilement personnalisé
  }

  useEffect(() => {
    // Gestion du défilement avec la molette
    function handleWheel(event: WheelEvent) {
      const now = Date.now();
      if (now - lastScrollTime.current < 500) return; // Ignorer les événements trop rapprochés
      lastScrollTime.current = now;

      const target = event.target as HTMLElement;
      const scrollableParent = findScrollableParent(target);

      // Vérifier si un parent défilable existe
      if (scrollableParent) {
        const direction = event.deltaY > 0 ? "down" : "up";

        // Vérifier si l'utilisateur est au début ou à la fin
        if (!isAtScrollBoundary(scrollableParent, direction)) {
          return; // Bloquer le défilement global
        }
      }

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

      const target = event.target as HTMLElement;
      const scrollableParent = findScrollableParent(target);

      // Vérifier si un parent défilable existe
      if (scrollableParent) {
        const direction = deltaY > 0 ? "down" : "up";

        // Vérifier si l'utilisateur est au début ou à la fin
        if (!isAtScrollBoundary(scrollableParent, direction)) {
          return; // Bloquer le défilement global
        }
      }

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