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

    if (!to || !main) return;

    // 🔹 1. Gestion des ancres internes ("#section")
    if (to.startsWith("#")) {
      const el = main.querySelector(to) as HTMLElement; // Recherche dans <main>
      if (el) {
        const navbarHeight = 4.5 * 16; // 4.5rem → 72px si 1rem = 16px
        main.scrollTo({
          top: el.offsetTop - navbarHeight, // Scroll relatif à <main>
          behavior: "smooth", // ou "auto" pour instantané
        });
      }
      return;
    }

    // 🔹 2. Gestion des ancres de la main page quand on n'est pas sur la main page ("/#section")
    if (to.startsWith("/#")) {
      const hash = to.slice(1); // "/#hero" -> "#hero"

      if (location.pathname !== "/") {
        navigate(to);
        main.scrollTo({ top: 0, behavior: "auto" });
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
    main.scrollTo({ top: 0 });
  };

  return { handleClick };
}