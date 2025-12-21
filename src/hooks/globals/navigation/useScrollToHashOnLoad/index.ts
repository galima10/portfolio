import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToHash } from "@utils/scrollToHash";

import { useAppDispatch } from "@hooks/redux";
import { stepUpdated } from "@stores/features/navigationSlice";
import { sectionsIds } from "@constants/global";

export function useScrollToHashOnLoad() {
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (location.hash) {
      scrollToHash(location.hash);
      dispatch(
        stepUpdated(
          Object.values(sectionsIds.main).indexOf(location.hash)
        )
      );
    }
  }, [location.pathname]); // déclenche quand la page change
}
