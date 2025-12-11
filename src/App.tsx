import "./styles/main.scss";

import Navbar from "./components/organisms/Navbar";
import Hero from "@components/organisms/Hero";
import Presentation from "@components/organisms/Presentation";

function App() {
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
    </>
  );
}

export default App;
