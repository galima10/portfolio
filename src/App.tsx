import "./styles/main.scss";

import AppButton from "@components/atoms/AppButton";
import NavButton from "@components/atoms/NavButton";
import AppInput from "@components/atoms/AppInput";
import AppSubmitButton from "@components/atoms/AppSubmitButton";
import AppLogo from "@components/atoms/AppLogo";

function App() {
  return (
    <>
      <AppButton type="primary" text="Primary Button" />
      <AppButton type="secondary" text="Secondary Button" />
      <AppButton type="tertiary" text="Tertiary Button" />
      <NavButton position="navbar" text="Navbar Button" />
      <AppLogo />
      <NavButton position="footer" text="Footer Button" />
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
    </>
  );
}

export default App;
