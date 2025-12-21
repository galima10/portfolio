import styles from "./TechnosCaption.module.scss";

export default function TechnosCaption() {
  return (
    <div className={styles.caption}>
      <p className={styles.captionFrontend}>Front-end</p>
      <p className={styles.captionBackend}>Back-end</p>
      <p className={styles.captionDatabase}>Base de données</p>
      <p className={styles.captionTools}>Outils transverses</p>
      <p className={styles.captionFullstack}>Full-Satck</p>
    </div>
  );
}
