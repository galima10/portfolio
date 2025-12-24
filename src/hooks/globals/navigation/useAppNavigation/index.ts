import { useNavigate, useLocation } from "react-router-dom";
import { scrollToHash } from "@utils/scrollToHash";
import { useEffect, useState } from "react";

export function useAppNavigation(action?: () => void, to?: string) {
  const navigate = useNavigate();
  const location = useLocation();
  const [main, setMain] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const mainElement = document.querySelector("main");
    if (mainElement) {
      setMain(mainElement); // Stocke la référence à <main> une fois que le DOM est prêt
    }
  }, []);

  const handleClick = () => {
    if (action) action();

    if (!to) return;

    // 🔹 1. Gestion des ancres internes ("#section")
    if (to.startsWith("#")) {
      let el: HTMLElement | null = null;

      // Essayer de trouver l'élément dans <main>
      if (main) {
        el = main.querySelector(to) as HTMLElement | null;
      }

      // Si non trouvé dans <main>, chercher dans tout le document
      if (!el) {
        el = document.querySelector(to) as HTMLElement | null;
      }

      // Si l'élément est trouvé, scroller vers lui
      if (el) {

        const navbarHeight = 4.5 * 16; // 4.5rem → 72px si 1rem = 16px
        const scrollContainer = main || window; // Utiliser <main> si défini, sinon window

        // Calculer la position relative de l'élément par rapport au conteneur
        const getRelativeOffset = (
          element: HTMLElement,
          container: HTMLElement | Window
        ): number => {
          let offset = 0;
          let current: HTMLElement | null = element;

          while (current && current !== container) {
            offset += current.offsetTop;
            current = current.offsetParent as HTMLElement | null;
          }

          return offset;
        };

        const relativeOffset = main
          ? getRelativeOffset(el, main)
          : el.offsetTop;

        const scrollOptions: ScrollToOptions = {
          top: relativeOffset - navbarHeight,
          behavior: "smooth", // ou "auto" pour instantané
        };

        if (scrollContainer === window) {
          window.scrollTo(scrollOptions);
        } else {
          scrollContainer.scrollTo(scrollOptions);
        }
      }
      return;
    }

    // 🔹 2. Gestion des ancres de la main page quand on n'est pas sur la main page ("/#section")
    if (to.startsWith("/#")) {
      const hash = to.slice(1); // "/#hero" -> "#hero"

      if (location.pathname !== "/") {
        navigate(to);
        main?.scrollTo({ top: 0, behavior: "auto" });
        return;
      }

      scrollToHash(hash, main);
      return;
    }

    // 🔹 3. Lien externe (http…)
    if (to.startsWith("http")) {
      window.open(to, "_blank", "noopener,noreferrer");
      return;
    }

    // 🔹 4. Navigation interne SPA vers une page interne ("/page")
    navigate(to);
    main?.scrollTo({ top: 0 });
  };

  return { handleClick };
}
