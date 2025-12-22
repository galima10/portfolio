import { useState, useEffect, useRef } from "react";
import { useAppSelector } from "@hooks/redux";
import { useCheckIsMobile } from "@hooks/globals/useCheckIsMobile";

export function useTechnosMap() {
  const [selectedTechno, setSelectedTechno] = useState<string | null>(null);

  const { isMobile } = useCheckIsMobile();
  const isManualSelection = useRef(false);

  const currentSectionId = useAppSelector(
    (state) => state.navigation.currentIDSection
  );

  useEffect(() => {
    // Réinitialiser selectedTechno uniquement si ce n'est pas une sélection manuelle
    if (!isManualSelection.current && selectedTechno !== null && isMobile) {
      console.log(
        `Resetting selectedTechno because currentSectionId changed to ${currentSectionId}`
      );
      setSelectedTechno(null);
    }

    // Réinitialiser le flag après le snap
    isManualSelection.current = false;
  }, [currentSectionId]);
  return { selectedTechno, setSelectedTechno, isMobile };
}
