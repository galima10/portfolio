import styles from "../Carrousel.module.scss";

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
    <div className={`${styles.slides} ${styles.planningSlide}`}>
      <ul>
        {planning.map((plan, index) => (
          <li key={`${plan.name}-${index}`}>
            <strong>{plan.name}</strong> - {plan.mainTasks} -{" "}
            {plan.deliverables} - {plan.deadline}
          </li>
        ))}
      </ul>
    </div>
  );
}
