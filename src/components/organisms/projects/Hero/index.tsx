import styles from "./Hero.module.scss";

import AppSVG from "@components/atoms/svgIcons/AppSVG";

type Stacks = "typescript" | "react" | "expo" | "jest" | "supabase" | "bootstrap" | "html" | "css" | "javascript";

interface HeroProps {
  name: string;
  stack: Stacks[];
  hook: string;
}

export default function Hero({ name, stack, hook }: HeroProps) {
  return (
    <section className={styles.hero}>
      <h1>{name}</h1>
      <p>
        <strong>{hook}</strong>
      </p>
      <ul>
        {stack.map((icon) => (
          <li key={icon}>
            <AppSVG name={icon} />
          </li>
        ))}
      </ul>
    </section>
  );
}
