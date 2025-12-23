import styles from "./Hero.module.scss";

import AppButton from "@components/atoms/appElements/AppButton";
import GenericButton from "@components/atoms/appElements/GenericButton";
import React from "react";
const AppMainH1 = React.lazy(
  () => import("@components/atoms/appElements/AppMainH1")
);

import TimeLinePoint from "@components/atoms/appElements/TimeLinePoint";

import { useCVDownload } from "@hooks/globals/CVDownload";

export default function Hero() {
  const { handleDownload } = useCVDownload();

  return (
    <section className={`${styles.hero} snapping`} id="hero">
      <AppMainH1 />
      <TimeLinePoint className={styles.timeLinePoint} timeStep={0} />
      <AppButton
        className={`${styles.ctaPrimary} timeline-point`}
        label="Envoyez moi un message !"
        type="primary"
        to="#group4-contactForm"
        timeStep={1}
      />

      <AppButton
        className={`${styles.ctaSecondary} timeline-point`}
        label="Téléchargez mon CV"
        type="secondary"
        action={handleDownload}
        timeStep={2}
      />
      <GenericButton
        className={`${styles.ctaLink} timeline-point`}
        to="#group1-presentation"
        timeStep={3}
      >
        Une aventure humaine et pleine de sens
        <span>➧</span>
      </GenericButton>
    </section>
  );
}
