import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { scrollToHash } from "@utils/scrollToHash";

export function useScrollPage() {
  const location = useLocation();
  let scrollTimeout: NodeJS.Timeout | null = null;
  const [isScrolling, setIsScrolling] = useState(false);
  const [step, setStep] = useState(0);

  function onScrollStart() {
    if (!isScrolling) {
      console.log("Défilement");
      setIsScrolling(true);
    }
  }

  function onScrollEnd() {
    setIsScrolling(false);
    console.log("Défilement fini");
  }

  useEffect(() => {
    function handleScroll() {
      // Déclencher l'action au début du défilement
      if (scrollTimeout === null) {
        onScrollStart();
      }

      // Réinitialiser le timeout pour détecter la fin du défilement
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(() => {
        onScrollEnd();
        scrollTimeout = null; // Réinitialiser pour détecter un nouveau défilement
      }, 200); // 200ms après la fin du défilement
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Nettoyer les écouteurs d'événements
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [onScrollStart, onScrollEnd]);
}
