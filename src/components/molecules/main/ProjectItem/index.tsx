import styles from "./ProjectItem.module.scss";

import GenericButton from "@components/atoms/appElements/GenericButton";
import ProjectBadge from "../ProjectBadge";

import { ProjectDescriptionType } from "@types";
import { slugify } from "@utils/slugify";

import { useState } from "react";

interface ProjectItemProps {
  project: {
    id: string;
    slug: string;
    name: string;
    island: "island1" | "island2" | "island3";
    hook: string;
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
    description: ProjectDescriptionType;
  };
  orientation?: "left" | "right";
}

export default function ProjectItem({
  project,
  orientation = "left",
}: ProjectItemProps) {
  const { id, name, hook, label, stack, island, slug } = project;
  const [isFocused, setIsFocused] = useState(false);
  return (
    <section
      className={styles.projectItem + " " + styles[orientation]}
      id={slugify(id)}
    >
      <hgroup className={`${styles.projectInfo} timeline-point`}>
        <h3>{id}</h3>
        <p>{hook}</p>
      </hgroup>
      <GenericButton
        ariaLabel={`En savoir plus sur le projet ${name}`}
        className={`${styles.projectButton} timeline-point`}
        onMouseEnter={() => setIsFocused(true)}
        onMouseLeave={() => setIsFocused(false)}
        to={`/projects/${slug}`}
      >
        <ProjectBadge
          label={label}
          stack={stack}
          name={name}
          island={island}
          isFocused={isFocused}
        />
      </GenericButton>
    </section>
  );
}
