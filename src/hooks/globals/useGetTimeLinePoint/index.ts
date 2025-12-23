import { useEffect, useState } from "react";

import { useCheckIsMobile } from "../useCheckIsMobile";

export function useGetTimeLinePoint() {
  const { isMobile } = useCheckIsMobile();

  const [timelinePoints, setTimelinePoints] = useState({});
  useEffect(() => {
    if (isMobile === null) return; // Attendez que isMobile soit défini

    const timelinePoints = document.querySelectorAll(".timeline-point");
    timelinePoints.forEach((point, index) => {
      point.setAttribute("data-timeline-index", index.toString());
      setTimelinePoints((prev) => ({ ...prev, [index]: point }));
    });
  }, [isMobile]); // Exécutez l'effet uniquement lorsque isMobile change

  useEffect(() => {
    console.log(timelinePoints);
  }, [timelinePoints]);
}
