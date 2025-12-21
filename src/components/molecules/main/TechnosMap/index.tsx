import styles from "./TechnosMap.module.scss";

import TechnoMapItem from "../TechnoMapItem";
import GenericButton from "@components/atoms/appElements/GenericButton";
import TechnosCaption from "@components/atoms/appElements/TechnosCaption";

import { useState } from "react";

export default function TechnosMap() {
  const [selectedTechno, setSelectedTechno] = useState<string | null>(null);
  return (
    <div
      className={
        styles.technosMapContainer + (selectedTechno ? ` ${styles.active}` : "")
      }
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
        />
        <TechnoMapItem
          techno={{
            name: "Frameworks & Libraries",
            slug: "frameworksMap",
            className: "frameworksMap",
          }}
          setSelectedTechno={setSelectedTechno}
          selectedTechno={selectedTechno}
        />
        <TechnoMapItem
          techno={{
            name: "Outils & Logiciels",
            slug: "toolsMap",
            className: "toolsMap",
          }}
          setSelectedTechno={setSelectedTechno}
          selectedTechno={selectedTechno}
        />
        <TechnoMapItem
          techno={{
            name: "Abordés",
            slug: "discussedMap",
            className: "discussedMap",
          }}
          setSelectedTechno={setSelectedTechno}
          selectedTechno={selectedTechno}
        />
      </div>
      {selectedTechno && (
        <>
          <GenericButton
            className={styles.backButton}
            action={() => {
              setSelectedTechno(null);
            }}
          >
            ↩
          </GenericButton>
          <TechnosCaption />
        </>
      )}
    </div>
  );
}
