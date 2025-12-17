import styles from "../Carrousel.module.scss";

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
    <div className={`${styles.slides} ${styles.proofsSlide}`}>
      {proofs &&
        proofs.map((proof, index) => (
          <div key={`proof-${index}`}>
            {proof.list && (
              <ul>
                {proof.list.map((item, itemIndex) => (
                  <li key={`proof-item-${itemIndex}`}>
                    <strong>{item.name}</strong> ({item.type})
                    <br />
                    <img src={item.imgSrc} alt={item.name} />
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
  );
}
