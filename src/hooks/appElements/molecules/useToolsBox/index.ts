import { useState } from "react";

export function useToolsBox() {
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  function handleMouseEnter(itemId: string) {
    setHoveredItemId(itemId);
  }

  function handleMouseLeave() {
    setHoveredItemId(null);
  }

  function handleClick(itemId: string) {
    setSelectedItemId(itemId === selectedItemId ? null : itemId);
  }

  return { hoveredItemId, handleMouseEnter, handleMouseLeave, selectedItemId, handleClick };
}
