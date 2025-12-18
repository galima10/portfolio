import { useState, useEffect } from "react";

export function useHero() {
  const titles = [
    "Bienvenue sur mon portfolio",
    "Développement web",
    "Magali MAI",
    "Ma passion, bien plus qu'un métier",
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [prevTitleIndex, setPrevTitleIndex] = useState<number | null>(null);
    useEffect(() => {
    const interval = setInterval(() => {
      setPrevTitleIndex(currentTitleIndex);
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 6 * 1000); // Interval entre chaque changement de titre

    return () => clearInterval(interval);
  }, [currentTitleIndex, titles.length]);

  return { titles, currentTitleIndex, prevTitleIndex };
}
