import { useEffect, useState, useCallback } from "react";

export function useCheckIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Fonction pour vérifier si l'écran est mobile
  const checkIsMobile = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    checkIsMobile(); // Vérification initiale
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, [checkIsMobile]);

  return { isMobile, updateIsMobile: checkIsMobile };
}