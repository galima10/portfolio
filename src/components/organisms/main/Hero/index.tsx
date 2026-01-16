import styles from "./Hero.module.scss";

import AppButton from "@components/atoms/appElements/AppButton";
import GenericButton from "@components/atoms/appElements/GenericButton";
import React, { Suspense } from "react";
const AppMainH1 = React.lazy(
  () => import("@components/atoms/appElements/AppMainH1")
);

import TimeLinePoint from "@components/atoms/appElements/TimeLinePoint";

import { useCVDownload } from "@hooks/globals/CVDownload";

export default function Hero() {
  const { handleDownload } = useCVDownload();

  return (
    <section className={`${styles.hero} snapping`} id="hero">
      <Suspense fallback={null}>
        <AppMainH1 />
      </Suspense>
      <TimeLinePoint className={styles.timeLinePoint}/>
      <AppButton
        className={`${styles.ctaPrimary} timeline-point`}
        label="Envoyez moi un message !"
        type="primary"
        to="#group4-contactForm"
      />

      <AppButton
        className={`${styles.ctaSecondary} timeline-point`}
        label="Téléchargez mon CV"
        type="secondary"
        action={handleDownload}

      />
      <GenericButton
        className={`${styles.ctaLink} timeline-point`}
        to="#group1-presentation"
      >
        Une aventure humaine et pleine de sens
        <span>➧</span>
      </GenericButton>
    </section>
  );
}
