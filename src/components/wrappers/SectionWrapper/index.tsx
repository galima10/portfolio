import styles from "./SectionWrapper.module.scss";

import { useAppSelector } from "@hooks/redux";
import { useEffect } from "react";
import { useCheckIsMobile } from "@hooks/globals/useCheckIsMobile";

interface SectionWrapperProps {
  children?: React.ReactNode;
  title: string;
  orientation: "left" | "right";
  className?: string;
  id?: string;
}

export default function SectionWrapper({
  children,
  title,
  className = "",
  orientation,
  id,
}: SectionWrapperProps) {
  const currentIDSection = useAppSelector(
    (state) => state.navigation.currentIDSection
  );
  const { isMobile } = useCheckIsMobile();

  // Vérifie si currentIDSection appartient au même groupe que l'ID de la section
  const isVisible =
    currentIDSection &&
    id &&
    currentIDSection.split("-")[0] === id.split("-")[0];

  return (
    <section
      id={id}
      className={styles.wrapper + " " + styles[orientation] + " " + className}
    >
      <h2 className={`main-h2 ${isVisible && !isMobile ? styles.visible : ""}`}>
        {title}
      </h2>
      {children}
    </section>
  );
}