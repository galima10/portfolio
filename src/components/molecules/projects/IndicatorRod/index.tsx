import styles from "./IndicatorRod.module.scss";
import GenericButton from "@components/atoms/appElements/GenericButton";
import { keysOrder } from "@constants/projects";
import CarrouselButton from "../CarrouselButton";

import { useAppSelector } from "@hooks/redux";

export default function IndicatorRod() {
  const currentSectionId = useAppSelector(
    (state) => state.navigation.currentIDSection
  );
  return (
    <div
      className={styles.indicatorsContainer}
      aria-label="Indicateur de progression du carrousel de projets"
      role="region"
    >
      <div className={styles.indicators}>
        <GenericButton className={styles.startButton} to="#carrousel-context">
          Plongez dans l’aventure
          <span>➧</span>
        </GenericButton>
        <ul>
          <li className={styles.startPoint}>
            <GenericButton
              className={styles.indicator}
              ariaLabel="Point de départ"
              to="#carrousel-context"
            >
              <div></div>
            </GenericButton>
          </li>
          {keysOrder.map((key) => (
            <li key={key}>
              <CarrouselButton
                keyProp={key}
                keysOrder={keysOrder}
                currentSectionId={currentSectionId}
              />
            </li>
          ))}
        </ul>
        <div className={styles.progress1} aria-hidden="true"></div>
        <div className={styles.endRod}>
          <GenericButton
            className={`${styles.endPoint} ${
              currentSectionId === "projectCTA" && styles.active
            }`}
            ariaLabel="Point d'arrivée"
          >
            <div></div>
          </GenericButton>
          <p className={styles.endLabel}>
            <strong>Ces expériences sont mon histoire.</strong>
          </p>
          <div className={styles.progress2} aria-hidden="true"></div>
        </div>
      </div>
    </div>
  );
}
