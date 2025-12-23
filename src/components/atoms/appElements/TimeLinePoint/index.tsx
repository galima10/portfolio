import styles from "./TimeLinePoint.module.scss";

export default function TimeLinePoint({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={`${styles.timeLinePoint} ${className || ""} timeline-point`}
      aria-hidden="true"
    ></div>
  );
}
