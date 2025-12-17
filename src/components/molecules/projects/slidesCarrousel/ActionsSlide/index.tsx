import styles from "../Carrousel.module.scss";

interface ActionsSlideProps {
  actions: {
    missions: string[];
    tools: string[];
    skills: string[];
  };
}

export default function ActionsSlide({ actions }: ActionsSlideProps) {
  return (
    <div className={`${styles.slides} ${styles.actionsSlide}`}>
      <div>
        <strong>Missions</strong>
        <ul>
          {actions.missions.map((mission, index) => (
            <li key={`${mission}-${index}`}>{mission}</li>
          ))}
        </ul>
      </div>
      <div>
        <strong>Tools</strong>
        <ul>
          {actions.tools.map((tool, index) => (
            <li key={`${tool}-${index}`}>{tool}</li>
          ))}
        </ul>
      </div>
      <div>
        <strong>Skills</strong>
        <ul>
          {actions.skills.map((skill, index) => (
            <li key={`${skill}-${index}`}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
