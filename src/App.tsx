import "./styles/main.scss";

import Navbar from "./components/organisms/Navbar";

import AppButton from "@components/atoms/appElements/AppButton";
import NavButton from "@components/atoms/appElements/NavButton";
import AppInput from "@components/atoms/appElements/AppInput";
import AppSubmitButton from "@components/atoms/appElements/AppSubmitButton";
import AppLogo from "@components/atoms/appElements/AppLogo";

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
    </>
  );
}

export default App;
