import { useState } from "react";

export function useProofsSlide() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imgSrc: string) => {
    setSelectedImage(imgSrc);
  };

  const closeFullscreen = () => {
    setSelectedImage(null);
  };
  return { selectedImage, handleImageClick, closeFullscreen};
}
