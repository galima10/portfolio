export function scrollToHash(hash: string) {
  const el = document.querySelector(hash);
  if (el) {
    const navbarHeight = 4.5 * 16; // Hauteur de la navbar
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - navbarHeight,
      behavior: "smooth", // ou "auto" pour instantané
    });
  }
}