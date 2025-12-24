import { useEffect, useState, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { setCurrentIDSection } from "@stores/features/navigationSlice";

export function useScrollSnap(rootSelector: string, threshold: number = 0.6) {
  const dispatch = useAppDispatch();
  const currentSectionId = useAppSelector(
    (state) => state.navigation.currentIDSection
  );
  const observer = useRef<IntersectionObserver | null>(null);
  const mutationObserver = useRef<MutationObserver | null>(null);

  useEffect(() => {
    const rootElement = document.querySelector(rootSelector);
    if (!rootElement) {
      console.error(`Element with selector "${rootSelector}" not found.`);
      return;
    }

    const setupIntersectionObserver = () => {
      // Récupérer tous les descendants ayant la classe .snapping, peu importe leur profondeur
      const snaps: HTMLElement[] = Array.from(
        rootElement.querySelectorAll(".snapping")
      );

      if (snaps.length === 0) {
        console.error("No snap elements found inside the root.");
        return;
      }

      // Déconnecter l'ancien observateur avant d'en créer un nouveau
      if (observer.current) {
        observer.current.disconnect();
      }

      // Créer un nouvel observateur
      observer.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.id; // Récupère l'id de l'élément visible
              dispatch(setCurrentIDSection(id || ""));
            }
          });
        },
        {
          root: rootElement,
          threshold,
        }
      );

      // Observer chaque élément
      snaps.forEach((el) => observer.current?.observe(el));
    };

    // Configurer le MutationObserver pour surveiller les changements dans le DOM
    mutationObserver.current = new MutationObserver(() => {
      setupIntersectionObserver(); // Réinitialiser l'observateur lorsque le DOM change
    });

    mutationObserver.current.observe(rootElement, {
      childList: true,
      subtree: true,
    });

    // Initialiser l'observateur d'intersection
    setupIntersectionObserver();

    return () => {
      // Nettoyer les observateurs lors du démontage
      observer.current?.disconnect();
      mutationObserver.current?.disconnect();
    };
  }, [rootSelector, threshold]);

  // useEffect(() => {
  //   console.log("Current Section ID:", currentSectionId);
  // }, [currentSectionId]);

  return currentSectionId;
}