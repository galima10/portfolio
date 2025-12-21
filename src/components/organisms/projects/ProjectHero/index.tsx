import styles from "./ProjectHero.module.scss";

import AppSVG from "@components/atoms/svgIcons/AppSVG";

import { useProjectHero } from "@hooks/appElements/organisms/useProjectHero";

type Stacks =
  | "typescript"
  | "react"
  | "expo"
  | "jest"
  | "supabase"
  | "bootstrap"
  | "html"
  | "css"
  | "javascript";

interface HeroProps {
  name: string;
  stack: Stacks[];
  hook: string;
  imageSrc?: string;
}

export default function ProjectHero({
  name,
  stack,
  hook,
  imageSrc,
}: HeroProps) {
  const { sectionRef } = useProjectHero<HTMLDivElement>(imageSrc);

  return (
    <section className={styles.hero} ref={sectionRef} id="hero">
      <div className={styles.content}>
        <hgroup>
          <h1>{name}</h1>
          <p>
            <strong>{hook}</strong>
          </p>
        </hgroup>
        <ul>
          {stack.map((icon) => (
            <li key={icon}>
              <AppSVG name={icon} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
