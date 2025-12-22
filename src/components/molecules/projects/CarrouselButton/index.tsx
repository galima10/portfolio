import styles from "./CarrouselButton.module.scss";
import GenericButton from "@components/atoms/appElements/GenericButton";
import { projectTitleDesc } from "@constants/global";

import { useState } from "react";

interface CarrouselButtonProps {
  keyProp: string;
  keysOrder: string[];
  currentSectionId: string;
}

export default function CarrouselButton({
  keyProp,
  keysOrder,
  currentSectionId
}: CarrouselButtonProps) {
  const [isFocused, setIsFocused] = useState(false);
  

  return (
    <GenericButton
      className={
        styles.indicator +
        (isFocused ? ` ${styles.focused}` : "") +
        (keysOrder.indexOf(keyProp) <= keysOrder.indexOf(currentSectionId.slice(10)) ? ` ${styles.active}` : "")
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
