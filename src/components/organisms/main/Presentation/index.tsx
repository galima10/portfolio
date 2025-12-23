import styles from "./Presentation.module.scss";

import SectionWrapper from "@components/wrappers/SectionWrapper";

import photo from "@images/photo_de_profil.webp";

import { biographyList } from "@constants/biography";

import TimeLinePoint from "@components/atoms/appElements/TimeLinePoint";
import { useCheckIsMobile } from "@hooks/globals/useCheckIsMobile";

export default function Presentation() {
  const formattedBiography = biographyList.map((section, index) => {
    const parts = section.split(" ; ");
    return (
      <li
        key={index}
        id={`group1-description-item-${index + 1}`}
        className={`${styles.descriptionItem} snapping`}
      >
        <TimeLinePoint
          className={
            styles.timeLinePoint + " " + styles[`timeLinePoint-${index + 1}`]
          }
          data-timeline-index={index + 4}
        />
        {parts.map((part, partIndex) => {
          if (part.startsWith("##") && part.endsWith("##")) {
            const content = part.slice(2, -2).trim();
            return <h4 key={partIndex}>{content}</h4>;
          } else if (part.startsWith("#") && part.endsWith("#")) {
            const content = part.slice(1, -1).trim();
            return <h3 key={partIndex}>{content}</h3>;
          } else if (part.startsWith("*") && part.endsWith("*")) {
            const content = part.slice(1, -1).trim();
            return (
              <p key={partIndex} className={styles.important}>
                <strong key={partIndex}>{content}</strong>
              </p>
            );
          }
          return <p key={partIndex}>{part.trim()}</p>;
        })}
      </li>
    );
  });

  const { isMobile } = useCheckIsMobile();
  return (
    <SectionWrapper
      title="Qui suis-je ?"
      orientation="right"
      className={`${styles.presentation} snapping`}
      id="group1-presentation"
    >
      <div className={styles.description}>
        <figure className={`${styles.infos} ${isMobile ? "timeline-point" : ""}`}>
          <img src={photo} alt="Photo de profil" loading="lazy" />
          <figcaption>
            <p className={styles.name}>
              <strong>Magali MAI</strong>
            </p>
            <p className={styles.job}>Développeuse web</p>
          </figcaption>
        </figure>
        <div className={styles.descriptionList}>
          <ul>{formattedBiography}</ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
