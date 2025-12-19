import { useState } from "react";

export function useToolsBox(action: (toolId: string | null) => void) {
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  function handleClick(itemId: string) {
    setSelectedItemId(itemId === selectedItemId ? null : itemId);
    action(itemId === selectedItemId ? null : itemId);
  }

  return { selectedItemId, handleClick };
}
