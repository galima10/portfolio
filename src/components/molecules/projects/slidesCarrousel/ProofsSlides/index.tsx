import styles from "../Carrousel.module.scss";

import AppButton from "@components/atoms/appElements/AppButton";
import AppSVG from "@components/atoms/svgIcons/AppSVG";

import { projectTitleDesc } from "@constants/global";

import { useProofsSlide } from "@hooks/appElements/molecules/useProofsSlide";
import App from "App";

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
  const { selectedImage, handleImageClick, closeFullscreen, getNavigationIndications } = useProofsSlide();

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
                      <div className={styles.proofItem}>
                        <img
                          src={item.imgSrc}
                          alt={item.name}
                          loading="lazy"
                          onClick={() => handleImageClick(item.imgSrc)}
                          style={{ cursor: "pointer" }}
                        />
                        <strong>
                          {item.name} - {item.type}
                        </strong>
                      </div>
                      <div className={styles.indicationNav}>
                        {getNavigationIndications(
                          itemIndex,
                          proof.list.length,
                          !!proof.demonstrationLinks
                        ).map((indication) => (
                          <p
                            key={indication.key}
                            className={styles[indication.className]}
                          >
                            {indication.text}
                          </p>
                        ))}
                      </div>
                    </li>
                  ))}
                  {proof.demonstrationLinks && (
                    <li>
                      <div className={styles.proofItem}>
                        <strong>{proof.demonstrationLinks.name}</strong> (
                        {proof.demonstrationLinks.type}):{" "}
                        <AppSVG
                          name="github"
                          aria-label="Icône GitHub"
                          className={styles.githubIcon}
                        />
                        <AppButton
                          label="Ouvrir le lien"
                          type="secondary"
                          className={styles.proofLinkButton}
                          to={proof.demonstrationLinks.url}
                        />
                      </div>
                      <div className={styles.indicationNav}>
                        <p className={styles.indicationLeft}>
                          {"◁ Défilez vers la gauche"}
                        </p>
                      </div>
                    </li>
                  )}
                </ul>
              )}
            </div>
          ))}
      </div>

      {/* Fullscreen Image */}
      {selectedImage && (
        <div className={styles.fullscreenOverlay} onClick={closeFullscreen}>
          <img src={selectedImage} alt="Fullscreen" />
        </div>
      )}
    </div>
  );
}
