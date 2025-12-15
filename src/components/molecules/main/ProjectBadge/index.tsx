import styles from "./ProjectBadge.module.scss";

import AppSVG from "@components/atoms/svgIcons/AppSVG";

interface ProjectBadgeProps {
  label: string;
  stack: {
    label: string;
    icon:
      | "typescript"
      | "react"
      | "expo"
      | "jest"
      | "supabase"
      | "bootstrap"
      | "html"
      | "css"
      | "javascript";
  }[];
  name: string;
  island: "island1" | "island2" | "island3";
  isFocused?: boolean;
}

export default function ProjectBadge({
  label,
  stack,
  name,
  island,
  isFocused = false,
}: ProjectBadgeProps) {
  return (
    <figure className={styles.projectBadge}>
      <div className={styles.projectHeader}>
        <AppSVG name={island} className={`${styles.island} ${isFocused ? styles.focused : ""}`} />
        <p>
          <strong>{name}</strong>
        </p>
      </div>
      <figcaption>
        <span className={styles.label}>{label}</span>
        <ul className={styles.stackList}>
          {stack.map((tech) => (
            <li key={tech.label}>
              <AppSVG name={tech.icon} className={styles.techIcon} />
            </li>
          ))}
        </ul>
      </figcaption>
    </figure>
  );
}
