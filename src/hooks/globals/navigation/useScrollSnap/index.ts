import { useEffect, useState, useRef } from "react";

export function useScrollSnap(rootSelector: string, threshold: number = 0.6) {
  const [currentSectionId, setCurrentSectionId] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const rootElement = document.querySelector(rootSelector);
    if (!rootElement) {
      console.error(`Element with selector "${rootSelector}" not found.`);
      return;
    }

    const snaps = Array.from(rootElement.children) as HTMLElement[];
    if (snaps.length === 0) {
      console.error("No snap elements found inside the root.");
      return;
    }

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id; // Récupère l'id de l'élément visible
            setCurrentSectionId(id || null); // Met à jour l'état avec l'id ou null si pas d'id
          }
        });
      },
      {
        root: rootElement,
        threshold,
      }
    );

    snaps.forEach((el) => observer.current?.observe(el));

    return () => {
      observer.current?.disconnect();
    };
  }, [rootSelector, threshold]);

  useEffect(() => {
    console.log("Current Section ID:", currentSectionId);
  }, [currentSectionId]);

  // return currentSectionId;
}
