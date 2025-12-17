import styles from "./IndicatorRod.module.scss";
import GenericButton from "@components/atoms/appElements/GenericButton";
import { keysOrder } from "@constants/projects";
import { projectTitleDesc } from "@constants/global";
import CarrouselButton from "../CarrouselButton";

export default function IndicatorRod() {
  return (
    <div className={styles.indicators}>
      <GenericButton className={styles.startButton}>
        Plongez dans l’aventure
        <span>➧</span>
      </GenericButton>
      <ul>
        <li className={styles.startPoint}>
          <GenericButton className={styles.indicator}>
            <div></div>
          </GenericButton>
        </li>
        {keysOrder.map((key) => (
          <li key={key}>
            <CarrouselButton keyProp={key} />
          </li>
        ))}
      </ul>
      <div className={styles.progress}></div>
      <div className={styles.endRod}>
        <GenericButton className={styles.endPoint}>
          <div></div>
        </GenericButton>
        <p className={styles.endLabel}>
          <strong>Ces expériences sont mon histoire.</strong>
        </p>
      </div>
    </div>
  );
}
