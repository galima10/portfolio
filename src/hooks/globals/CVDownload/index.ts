export function useCVDownload() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/documents/CV-Magali_MAI-Developpement_web.pdf"; // chemin vers le fichier CV
    link.download = "CV - Magali MAI - Développement web.pdf"; // nom du fichier
    link.click();
  };
  return { handleDownload };
}
