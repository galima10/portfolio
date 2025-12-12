import { useNavigate, useLocation } from "react-router-dom";

import { scrollToHash } from "@utils/scrollToHash";

export function useAppNavigation(action?: () => void, to?: string) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (action) action();

    if (!to) return;

    // 🔹 1. Gestion des ancres internes ("#section")
    if (to.startsWith("#")) {
      const el = document.querySelector(to);
      if (el) {
        const navbarHeight = 4.5 * 16; // 4.5rem → 72px si 1rem = 16px
        window.scrollTo({
          top: el.getBoundingClientRect().top + window.scrollY - navbarHeight,
          behavior: "smooth", // ou "auto" pour instantané
        });
      }
      return;
    }

    // 🔹 2. Gestion des ancres de la main page quand on n'est pas sur la main page ("/#section")
    if (to.startsWith("/#")) {
      const hash = to.slice(1); // "/#skills" -> "#skills"

      if (location.pathname !== "/") {
        // Si on n'est PAS sur la home, navigue vers "/#section"
        navigate(to);
        return;
      }

      // Si on EST déjà sur "/", scroll directement
      scrollToHash(hash);
      return;
    }

    // 🔹 3. Lien externe (http…)
    if (to.startsWith("http")) {
      window.open(to, "_blank", "noopener,noreferrer");
      return;
    }

    // 🔹 4. Navigation interne SPA vers une page interne ("/page")
    navigate(to);
    window.scrollTo({ top: 0 });
  };

  return { handleClick };
}
