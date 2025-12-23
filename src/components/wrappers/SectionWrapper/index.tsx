import styles from "./SectionWrapper.module.scss";

import { useSectionWrapper } from "@hooks/appElements/organisms/useSectionWrapper";

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
  const { titleRef, isVisible, showTitle, isMobile } = useSectionWrapper(id);

  return (
    <section
      id={id}
      className={styles.wrapper + " " + styles[orientation] + " " + className}
    >
      <h2
        ref={titleRef}
        className={`main-h2 ${
          (isVisible && !isMobile) || showTitle ? styles.visible : ""
        }`}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
