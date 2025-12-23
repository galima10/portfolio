import styles from "./AppSVGTimeLine.module.scss";
import { useAppSelector } from "@hooks/redux";

export default function AppSVGTimeLine() {
//   const timelineRef = useAppSelector((state) => state.timeline.timelineRef);
  return (
    <svg className={styles.timelineSvg} aria-hidden="true"/>
  );
}
