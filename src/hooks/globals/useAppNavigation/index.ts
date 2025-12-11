import { useNavigate } from "react-router-dom";

export function useAppNavigation(action?: () => void, to?: string) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (action) action();

    // si "to" existe, on gère navigation
    if (to) {
      // lien externe ?
      if (to.startsWith("http")) {
        window.open(to, "_blank", "noopener noreferrer");
      }
      // navigation interne SPA
      else {
        navigate(to);
      }
    }
  };
  return { handleClick };
}
