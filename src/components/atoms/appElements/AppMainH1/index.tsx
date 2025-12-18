import { useAppMainH1 } from "@hooks/appElements/organisms/useAppMainH1";
import styles from "./AppMainH1.module.scss";

export default function AppMainH1() {
  const { titles, currentTitleIndex, prevTitleIndex } = useAppMainH1();
  return (
    <h1>
      {titles.map((title, index) => (
        <span
          key={index}
          className={
            index === currentTitleIndex
              ? styles.visible
              : index === prevTitleIndex
              ? styles.hidden
              : ""
          }
        >
          {title}
        </span>
      ))}
    </h1>
  );
}
