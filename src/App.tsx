import "./styles/main.scss";

import Navbar from "./components/organisms/Navbar";

import AppButton from "@components/atoms/AppButton";
import NavButton from "@components/atoms/NavButton";
import AppInput from "@components/atoms/AppInput";
import AppSubmitButton from "@components/atoms/AppSubmitButton";
import AppLogo from "@components/atoms/AppLogo";

function App() {
  return (
    <>
      <AppButton type="primary" label="Primary Button" />
      <AppButton type="secondary" label="Secondary Button" />
      <AppButton type="tertiary" label="Tertiary Button" />
      <NavButton position="navbar" label="Navbar Button" />
      <AppLogo />
      <NavButton position="footer" label="Footer Button" />
      <AppInput label="Standard Input" placeholder="Enter text here" />
      <AppSubmitButton />
      <AppInput
        isTextarea
        label="Textarea Input"
        placeholder="Enter multiple lines of text here"
      />
      <h1>Titre H1</h1>
      <h2>Titre H2</h2>
      <h3>Titre H3</h3>
      <h4>Titre H4</h4>
      <h5>Titre H5</h5>
      <h6>Titre H6</h6>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p>
        <small>Small text example</small>
      </p>
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
