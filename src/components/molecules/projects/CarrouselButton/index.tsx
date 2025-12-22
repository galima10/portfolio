import styles from "./CarrouselButton.module.scss";
import GenericButton from "@components/atoms/appElements/GenericButton";
import { projectTitleDesc } from "@constants/global";

import { useAppSelector } from "@hooks/redux";
import { useState } from "react";

export default function CarrouselButton({
  keyProp,
  keysOrder,
}: {
  keyProp: string;
  keysOrder: string[];
}) {
  const [isFocused, setIsFocused] = useState(false);
  const currentSectionId = useAppSelector(
    (state) => state.navigation.currentIDSection
  );

  return (
    <GenericButton
      className={
        styles.indicator +
        (isFocused ? ` ${styles.focused}` : "") +
        (currentSectionId === `carrousel-${keyProp}` ? ` ${styles.active}` : "")
      }
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      ariaLabel={`Bouton carrousel pour ${
        keyProp && projectTitleDesc[keyProp]
      }`}
      to={`#carrousel-${keyProp}`}
    >
      <div></div>
      <span>
        <strong>{keyProp && projectTitleDesc[keyProp]}</strong>
      </span>
    </GenericButton>
  );
}
