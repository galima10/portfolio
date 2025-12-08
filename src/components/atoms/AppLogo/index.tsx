import styles from "./AppLogo.module.scss";

interface AppLogoProps {
  className?: string;
  link?: string;
}

export default function AppLogo({ className = "", link = "#" }: AppLogoProps) {
  return (
    <a href={link} className={`${styles.logo} ${className}`}>
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M45.9995 18.9731L19.4553 43.8889V20.2755L30.7273 30.8556L34.7274 27.1005V3.75509L30.7273 0L18.5832 11.3972L21.6572 14.2815L30.5447 5.93981V24.9157L4.00052 0L0 3.75509V30.8954L4.18313 34.8213V5.93981L15.2726 16.3491V46.1579L19.1115 49.7606H19.3453L45.8169 24.9134V50L50 46.0736V22.7282L45.9995 18.9731Z"
          fill="url(#paint0_linear_385_457)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_385_457"
            x1="50"
            y1="25"
            x2="0"
            y2="25"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#5C967D" />
            <stop offset="1" stop-color="#5A587D" />
          </linearGradient>
        </defs>
      </svg>
    </a>
  );
}
