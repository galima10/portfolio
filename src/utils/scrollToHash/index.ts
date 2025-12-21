export function scrollToHash(hash: string, container: HTMLElement) {
  const el = container.querySelector(hash) as HTMLElement; // Cast en HTMLElement
  if (el) {
    const navbarHeight = 4.5 * 16; // Hauteur de la navbar
    container.scrollTo({
      top: el.offsetTop - navbarHeight, // Scroll relatif au conteneur
      behavior: "smooth", // ou "auto" pour instantané
    });
  }
}
