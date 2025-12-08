import "./styles/main.scss";

import AppButton from "@components/atoms/AppButton";
import NavButton from "./components/atoms/NavButton";

function App() {
  return (
    <>
      <AppButton type="primary" text="Primary Button" />
      <AppButton type="secondary" text="Secondary Button" />
      <AppButton type="tertiary" text="Tertiary Button" />
      <NavButton position="navbar" text="Navbar Button" />
      <NavButton position="footer" text="Footer Button" />
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
