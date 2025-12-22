import styles from "../Carrousel.module.scss";

import GenericButton from "@components/atoms/appElements/GenericButton";
import { projectTitleDesc } from "@constants/global";

interface PlanningSlideProps {
  planning: {
    name: string;
    mainTasks: string;
    deliverables: string;
    deadline: string;
  }[];
}

export default function PlanningSlide({ planning }: PlanningSlideProps) {
  return (
    <div className={styles.slides} aria-label="Diapositive de planification du projet" role="region">
      <h2 className="project-h2">{projectTitleDesc["planning"]}</h2>
      <div className={`${styles.slideContent} ${styles.planningSlide}`}>
        <ul>
          {planning.map((plan, index) => (
            <li key={`${plan.name}-${index}`}>
              <div className={styles.buttonItem}>
                <GenericButton className={styles.button}>
                  <span>{plan.name}</span>
                  <span>▶</span>
                </GenericButton>
                <span>Tâches : {plan.mainTasks}</span>
                <span>Livrables : {plan.deliverables}</span>
                <span>Deadline : {plan.deadline}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
