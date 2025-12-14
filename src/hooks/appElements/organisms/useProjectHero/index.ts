import { useEffect, useRef, RefObject } from "react";

import fallbackImg from "@assets/images/fallback.webp";

export function useProjectHero<T extends HTMLElement = HTMLElement>(
  imageSrc?: string
): { sectionRef: RefObject<T> } {
  const sectionRef = useRef<T>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    section.style.setProperty(
      "--hero-bg-image",
      `url(${String(imageSrc || fallbackImg)})`
    );
  }, [imageSrc]);

  return { sectionRef };
}
