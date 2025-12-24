import styles from "./TechnosMap.module.scss";

import TechnoMapItem from "../TechnoMapItem";
import GenericButton from "@components/atoms/appElements/GenericButton";
import TechnosCaption from "@components/atoms/appElements/TechnosCaption";

import { useTechnosMap } from "@hooks/appElements/molecules/useTechnosMap";

export default function TechnosMap() {
  const { selectedTechno, setSelectedTechno, isMobile } = useTechnosMap();

  return (
    <div
      className={`${styles.technosMapContainer} ${
        selectedTechno ? ` ${styles.active}` : ""
      } ${isMobile ? "" : "timeline-point"}`}
    >
      <div
        className={
          styles.technoMaps +
          (selectedTechno ? ` ${styles[selectedTechno + "Centred"]}` : "")
        }
      >
        <TechnoMapItem
          techno={{
            name: "Langages maîtrisés",
            slug: "languagesMap",
            className: "languagesMap",
          }}
          setSelectedTechno={setSelectedTechno}
          selectedTechno={selectedTechno}
          id="group2-technos-1"
          className={isMobile ? "snapping timeline-point" : ""}
        />
        <TechnoMapItem
          techno={{
            name: "Frameworks & Libraries",
            slug: "frameworksMap",
            className: "frameworksMap",
          }}
          setSelectedTechno={setSelectedTechno}
          selectedTechno={selectedTechno}
          id="group2-technos-2"
          className={isMobile ? "snapping timeline-point" : ""}
        />
        <TechnoMapItem
          techno={{
            name: "Outils & Logiciels",
            slug: "toolsMap",
            className: "toolsMap",
          }}
          setSelectedTechno={setSelectedTechno}
          selectedTechno={selectedTechno}
          id="group2-technos-3"
          className={isMobile ? "snapping timeline-point" : ""}
        />
        <TechnoMapItem
          techno={{
            name: "Abordés",
            slug: "discussedMap",
            className: "discussedMap",
          }}
          setSelectedTechno={setSelectedTechno}
          selectedTechno={selectedTechno}
          id="group2-technos-4"
          className={isMobile ? "snapping timeline-point" : ""}
        />
      </div>
      <div
        className={
          styles.backAndCaption + (selectedTechno ? ` ${styles.visible}` : "")
        }
      >
        <GenericButton
          className={styles.backButton}
          action={() => {
            setSelectedTechno(null);
          }}
        >
          ↩
        </GenericButton>
        <TechnosCaption />
      </div>
    </div>
  );
}
