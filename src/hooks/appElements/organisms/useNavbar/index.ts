import { useState, useRef, useEffect } from "react";

export function useNavbar(filterClassActive: string, menuClassOpen: string) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLUListElement>(null);
  const darkFilterRef = useRef<HTMLDivElement>(null);

  function handleMenuToggle() {
    setIsMobileMenuOpen((prev) => !prev);
  }

  useEffect(() => {
    if (isMobileMenuOpen) {
      mobileMenuRef.current?.classList.add(menuClassOpen);
      darkFilterRef.current?.classList.add(filterClassActive);
    } else {
      mobileMenuRef.current?.classList.remove(menuClassOpen);
      darkFilterRef.current?.classList.remove(filterClassActive);
    }
    console.log("isMobileMenuOpen", isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  return {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    mobileMenuRef,
    darkFilterRef,
    handleMenuToggle,
  };
}
