import styles from "../Carrousel.module.scss";

import { projectTitleDesc } from "@constants/global";

interface ProofsSlideProps {
  proofs: {
    list?: {
      name: string;
      type: string;
      imgSrc: string;
    }[];
    demonstrationLinks?: {
      name: string;
      type: string;
      url: string;
    };
  }[];
}

export default function ProofsSlide({ proofs }: ProofsSlideProps) {
  return (
    <div
      className={styles.slides}
      aria-label="Diapositive des preuves du projet"
      role="region"
    >
      <h2 className="project-h2">{projectTitleDesc.proofs}</h2>
      <div className={`${styles.slideContent} ${styles.proofsSlide}`}>
        {proofs &&
          proofs.map((proof, index) => (
            <div key={`proof-${index}`}>
              {proof.list && (
                <ul>
                  {proof.list.map((item, itemIndex) => (
                    <li key={`proof-item-${itemIndex}`}>
                      <img src={item.imgSrc} alt={item.name} loading="lazy" />
                      <strong>
                        {item.name} - {item.type}
                      </strong>
                    </li>
                  ))}
                </ul>
              )}
              {proof.demonstrationLinks && (
                <div>
                  <strong>{proof.demonstrationLinks.name}</strong> (
                  {proof.demonstrationLinks.type}):{" "}
                  <a
                    href={proof.demonstrationLinks.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {proof.demonstrationLinks.url}
                  </a>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
