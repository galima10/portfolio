import styles from "./../SVGIcons.module.scss";

interface ClassNameType {
  className?: string;
}

export default function Handle({ className }: ClassNameType) {
  return (
    <div className={`${styles.svgIcon} ${className}`} aria-hidden="true">
      <svg
        width="587"
        height="120"
        viewBox="0 0 587 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M586.37 119.28H568.39L567.9 116.8L548.2 17.8H38.16L18.46 116.8L17.97 119.28H0L0.72 115.66C0.83 115.16 5.67 90.78 10.63 65.92C15.58 41.06 20.64 15.7 21.15 13.24C22.95 4.95 28.53 0 36.06 0H550.31C557.83 0 563.41 4.95 565.23 13.24H565.22C566.25 18.15 585.44 114.66 585.65 115.66L586.37 119.28Z"
          className={styles.grey}
        />
      </svg>
    </div>
  );
}
