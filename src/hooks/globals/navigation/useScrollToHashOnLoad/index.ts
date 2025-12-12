import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToHash } from "@utils/scrollToHash";


export function useScrollToHashOnLoad() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      scrollToHash(location.hash);
    }
  }, [location.pathname]); // déclenche quand la page change
}