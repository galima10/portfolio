import styles from "./SectionCTA.module.scss";

import AppButton from "@components/atoms/appElements/AppButton";

interface SectionCTAProps {
  text: string;
  to?: string;
  id?: string;
}

export default function SectionCTA({ text, to, id }: SectionCTAProps) {
  return (
    <div className={styles.sectionCTA} id={id}>
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
  );
}
