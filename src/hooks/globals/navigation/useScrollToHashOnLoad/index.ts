import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToHash } from "@utils/scrollToHash";

export function useScrollToHashOnLoad() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const mainElement = document.querySelector("main")!;
      scrollToHash(location.hash, mainElement);

      history.replaceState(null, "", location.pathname);
    }
  }, [location.pathname]); // déclenche quand la page change
}
