import { useAppSelector } from "@hooks/redux";
import { useEffect, useRef, useState } from "react";
import { useCheckIsMobile } from "@hooks/globals/useCheckIsMobile";

export function useSectionWrapper(id?: string) {
  const currentIDSection = useAppSelector(
    (state) => state.navigation.currentIDSection
  );
  const { isMobile } = useCheckIsMobile();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [showTitle, setShowTitle] = useState(false);

  // Vérifie si currentIDSection appartient au même groupe que l'ID de la section
  const isVisible =
    currentIDSection &&
    id &&
    currentIDSection.split("-")[0] === id.split("-")[0];

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (isMobile && isVisible) {
      setShowTitle(true); // Affiche le titre
      timer = setTimeout(() => {
        setShowTitle(false); // Cache le titre après 1.5 secondes
      }, 1500);
    } else {
      setShowTitle(false); // Cache immédiatement si on quitte le groupe
    }

    return () => {
      if (timer) clearTimeout(timer); // Nettoie le timer si la condition change
    };
  }, [isMobile, isVisible]);
  return { titleRef, isVisible, showTitle, isMobile };
}
