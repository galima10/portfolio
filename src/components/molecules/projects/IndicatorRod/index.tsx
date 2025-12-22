import styles from "./IndicatorRod.module.scss";
import GenericButton from "@components/atoms/appElements/GenericButton";
import { keysOrder } from "@constants/projects";
import CarrouselButton from "../CarrouselButton";

import { useIndicatorRod } from "@hooks/appElements/molecules/useIndicatorRod";

export default function IndicatorRod() {
  const { progressBar1, progressBar2, endPoint, currentSectionId } =
    useIndicatorRod(keysOrder);

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
          <li className={styles.startPoint + " buttonIndicator"}>
            <GenericButton
              className={styles.indicator}
              ariaLabel="Point de départ"
              to="#carrousel-context"
            >
              <div></div>
            </GenericButton>
          </li>
          {keysOrder.map((key) => (
            <li key={key} id={`indicator-${key}`} className="buttonIndicator">
              <CarrouselButton
                keyProp={key}
                keysOrder={keysOrder}
                currentSectionId={currentSectionId}
              />
            </li>
          ))}
        </ul>
        <div
          className={styles.progress1}
          aria-hidden="true"
          ref={progressBar1}
        ></div>
        <div className={styles.endRod}>
          <GenericButton
            className={styles.endPoint + " " + styles.indicator}
            ariaLabel="Point d'arrivée"
            ref={endPoint}
          >
            <div></div>
          </GenericButton>
          <p className={styles.endLabel}>
            <strong>Ces expériences sont mon histoire.</strong>
          </p>
          <div
            className={styles.progress2}
            aria-hidden="true"
            ref={progressBar2}
          ></div>
        </div>
      </div>
    </div>
  );
}
