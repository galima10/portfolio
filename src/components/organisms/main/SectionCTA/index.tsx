import styles from "./SectionCTA.module.scss";

import AppButton from "@components/atoms/appElements/AppButton";

interface SectionCTAProps {
  text: string;
  to?: string;
  id?: string;
}

export default function SectionCTA({ text, to, id }: SectionCTAProps) {
  return (
    <div className={`${styles.sectionCTA} snapping timeline-point`} id={id}>
      <div className={styles.content}>
        <p className={styles.text}>
          <strong>{text}</strong>
        </p>
        <AppButton
          className={styles.ctaPrimary}
          label="Envoyez moi un message !"
          type="primary"
          to={to}
        />
      </div>
    </div>
  );
}
