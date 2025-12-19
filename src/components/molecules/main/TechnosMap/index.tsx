import styles from "./TechnosMap.module.scss";

import TechnoMapItem from "../TechnoMapItem";

export default function TechnosMap() {
  return (
    <div className={styles.technoMaps}>
      <TechnoMapItem
        techno={{
          name: "Langages maîtrisés",
          svgName: "languagesMap",
          className: "languagesMap",
        }}
      />
      <TechnoMapItem
        techno={{
          name: "Frameworks & Libraries",
          svgName: "frameworksMap",
          className: "frameworksMap",
        }}
      />
      <TechnoMapItem
        techno={{
          name: "Outils & Logiciels",
          svgName: "toolsMap",
          className: "toolsMap",
        }}
      />
      <TechnoMapItem
        techno={{
          name: "Abordés",
          svgName: "discussedMap",
          className: "discussedMap",
        }}
      />
    </div>
  );
}
