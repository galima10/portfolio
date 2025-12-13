import styles from "./Technos.module.scss";

import SectionWrapper from "@components/wrappers/SectionWrapper";

import DiscussedMap from "@components/atoms/svgIcons/technos/SVG/DiscussedMap";
import LanguageMap from "@components/atoms/svgIcons/technos/SVG/LanguageMap";
import FrameworksMap from "@components/atoms/svgIcons/technos/SVG/FrameworksMap";
import ToolsMap from "@components/atoms/svgIcons/technos/SVG/ToolsMap";

export default function Technos() {
  return (
    <SectionWrapper
      title="Mes territoires"
      orientation="right"
      className={styles.technos}
    >
      <DiscussedMap />
      {/* <LanguageMap /> */}
      {/* <FrameworksMap /> */}
      {/* <ToolsMap /> */}
    </SectionWrapper>
  );
}
