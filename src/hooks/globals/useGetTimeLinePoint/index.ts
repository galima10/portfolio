import { useEffect, useState } from "react";

export function useGetTimeLinePoint() {
  const [timelinePoints, setTimelinePoints] = useState({});
  useEffect(() => {
    const timelinePoints = document.querySelectorAll(".timeline-point");
    timelinePoints.forEach((point, index) => {
      point.setAttribute("data-timeline-index", index.toString());
      setTimelinePoints((prev) => ({ ...prev, [index]: point }));
    });
  }, []);

  useEffect(() => {
    console.log(timelinePoints);
  }, [timelinePoints]);
}
