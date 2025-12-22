import { useAppSelector } from "@hooks/redux";
import { useRef, useEffect, useState } from "react";
import styles from "@components/molecules/projects/IndicatorRod/IndicatorRod.module.scss";

export function useIndicatorRod(keysOrder: string[]) {
  const currentSectionId = useAppSelector(
    (state) => state.navigation.currentIDSection
  );
  const progressBar1Ref = useRef<HTMLDivElement>(null);
  const progressBar2Ref = useRef<HTMLDivElement>(null);
  const endPointRef = useRef<HTMLButtonElement>(null);

  const [totalIndicators, setTotalIndicators] = useState<Element[]>([]);

  useEffect(() => {
    // Récupère tous les points dans un tableau
    setTotalIndicators(
      Array.from(document.getElementsByClassName("buttonIndicator"))
    );
  }, []);

  useEffect(() => {
    if (
      !progressBar1Ref.current ||
      !progressBar2Ref.current ||
      !endPointRef.current ||
      totalIndicators.length === 0
    )
      return;

    const progress1 = progressBar1Ref.current;
    const progress2 = progressBar2Ref.current;
    const endPoint = endPointRef.current;

    // Si on est sur la section #projectCTA, la barre doit être à 100%
    if (currentSectionId === "projectCTA") {
      progress1.style.height = "100%";
      progress1.addEventListener(
        "transitionend",
        () => {
          progress2.style.width = "100%";
        },
        { once: true }
      );
      progress2.addEventListener(
        "transitionend",
        () => {
          endPoint.classList.add(styles.active);
        },
        { once: true }
      );
      return;
    } else {
      progress2.style.width = "0%";
      endPoint.classList.remove(styles.active);
    }

    // Trouve l'index de l'élément actif
    const activeIndex = keysOrder.indexOf(currentSectionId.slice(10));

    // Si on est sur le point de départ (startPoint), la hauteur doit être 0
    if (activeIndex < 0) {
      progress1.style.height = "0px";
      return;
    }

    // Calcule la hauteur totale jusqu'à l'élément actif
    let totalHeight = 0;

    // Utilise requestAnimationFrame pour synchroniser avec le rendu
    requestAnimationFrame(() => {
      for (let i = 0; i <= activeIndex; i++) {
        const currentElement = totalIndicators[i + 1] as HTMLElement;
        if (currentElement) {
          const currentTop = currentElement.getBoundingClientRect().top;
          const progressTop = progress1.getBoundingClientRect().top;

          // Ajoute la distance entre le haut de la barre et le haut du bouton
          totalHeight = currentTop - progressTop + 12;
        }
      }

      // Applique la hauteur calculée à la barre de progression
      progress1.style.height = `${totalHeight}px`;
    });
  }, [currentSectionId, totalIndicators]);
  return {
    progressBar1: progressBar1Ref,
    progressBar2: progressBar2Ref,
    endPoint: endPointRef,
    currentSectionId,
  };
}
