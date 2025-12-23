import styles from "./TimeLinePoint.module.scss";

export default function TimeLinePoint({
  className,
  timeStep,
}: {
  className?: string;
  timeStep?: number;
}) {
  return (
    <div
      className={`${styles.timeLinePoint} ${className || ""} timeline-point`}
      aria-hidden="true"
      data-timeline-index={timeStep || null}
    ></div>
  );
}
