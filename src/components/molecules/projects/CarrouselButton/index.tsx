import styles from "./CarrouselButton.module.scss";
import GenericButton from "@components/atoms/appElements/GenericButton";
import { projectTitleDesc } from "@constants/global";

import { useState } from "react";

export default function CarrouselButton({ keyProp }: { keyProp: string }) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <GenericButton
      className={styles.indicator + (isFocused ? ` ${styles.focused}` : "")}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      ariaLabel={`Bouton carrousel pour ${keyProp && projectTitleDesc[keyProp]}`}
    >
      <div></div>
      <span>
        <strong>{keyProp && projectTitleDesc[keyProp]}</strong>
      </span>
    </GenericButton>
  );
}
