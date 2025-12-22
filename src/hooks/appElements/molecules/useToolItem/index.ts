import { scrollToHash } from "@utils/scrollToHash";
import { useState } from "react";

import { slugify } from "@utils/slugify";

export function useToolItem(skill: {
  id: string;
  title: string;
  label: string;
  component: "hammer" | "brush" | "wrench" | "glass" | "talkie" | "lamp";
  skillsDetails?: string[];
}) {
  const [isFocused, setIsFocused] = useState(false);
  return { isFocused, setIsFocused };
}
