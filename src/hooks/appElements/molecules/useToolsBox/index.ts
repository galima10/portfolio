import { useState } from "react";

export function useToolsBox() {
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  function handleClick(itemId: string) {
    setSelectedItemId(itemId === selectedItemId ? null : itemId);
  }

  return { selectedItemId, handleClick };
}
