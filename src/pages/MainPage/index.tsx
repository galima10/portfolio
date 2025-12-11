import Navbar from "@components/organisms/Navbar";
import Hero from "@components/organisms/Hero";
import Presentation from "@components/organisms/Presentation";
import SectionCTA from "@components/organisms/SectionCTA";

export default function MainPage() {
  return (
    <>
      <Navbar
        links={[
          { label: "Présentation", link: "/" },
          { label: "Compétences", link: "/" },
          { label: "Outils & Technos", link: "/" },
          { label: "Mes projets", link: "/" },
          { label: "Me contacter", link: "/", isCTA: true },
        ]}
      />
      <Hero />
      <Presentation />
      <SectionCTA text="Mon histoire commence ici, et peut-être que la suite s’écrit avec vous." />
    </>
  );
}
