import { scrollToHash } from "@utils/scrollToHash";
import { useState, useEffect } from "react";

import { slugify } from "@utils/slugify";

export function useToolItem(skill: {
  id: string;
  title: string;
  label: string;
  component: "hammer" | "brush" | "wrench" | "glass" | "talkie" | "lamp";
  skillsDetails?: string[];
}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isFocused, setIsFocused] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const id = slugify(skill.label + "-" + skill.id);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleItemClick() {
    if (windowWidth < 768) {
      setIsOpened(!isOpened);
      if (!isOpened)
        setTimeout(() => {
          scrollToHash(`#${id}`);
        }, 100);
      else {
        scrollToHash("#skills");
      }
    }
  }
  return { isFocused, setIsFocused, id, handleItemClick };
}
