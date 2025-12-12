import { useNavigate } from "react-router-dom";

export function useAppNavigation(action?: () => void, to?: string) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (action) action();

    if (!to) return;

    // 🔹 1. Gestion des ancres internes (#section)
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

    // 🔹 2. Lien externe (http…)
    if (to.startsWith("http")) {
      window.open(to, "_blank", "noopener,noreferrer");
      return;
    }

    // 🔹 3. Navigation interne SPA
    navigate(to);
    window.scrollTo({ top: 0 });
  };

  return { handleClick };
}
