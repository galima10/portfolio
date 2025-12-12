import styles from "./SectionWrapper.module.scss";

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
  return (
    <section id={id} className={styles.wrapper + " " + styles[orientation] + " " + className}>
      <h2 className="main-h2">{title}</h2>
      {children}
    </section>
  );
}
