import { useState } from "react";

export function useProofsSlide() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imgSrc: string) => {
    setSelectedImage(imgSrc);
  };

  const closeFullscreen = () => {
    setSelectedImage(null);
  };

  const getNavigationIndications = (
    itemIndex: number,
    listLength: number,
    hasDemonstrationLinks: boolean
  ) => {
    const indications = [];
    if (itemIndex !== 0) {
      indications.push({
        key: "left",
        text: "◁ Défilez vers la gauche",
        className: "indicationLeft",
      });
    }
    if (itemIndex !== listLength - 1 && !hasDemonstrationLinks) {
      indications.push({
        key: "right",
        text: "Défilez vers la droite ▷",
        className: "indicationRight",
      });
    }
    if (itemIndex !== listLength && hasDemonstrationLinks) {
      indications.push({
        key: "right-link",
        text: "Défilez vers la droite ▷",
        className: "indicationRight",
      });
    }
    return indications;
  };

  return { selectedImage, handleImageClick, closeFullscreen, getNavigationIndications };
}
