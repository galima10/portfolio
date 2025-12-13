import "./styles/main.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "@pages/MainPage";
import ProjectPage from "@pages/ProjectPage";
import Navbar from "@components/organisms/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar
        links={[
          { label: "Présentation", link: "/#presentation" },
          { label: "Compétences", link: "/#skills" },
          { label: "Outils & Technos", link: "/#technos" },
          { label: "Mes projets", link: "/#projects" },
          { label: "Me contacter", link: "", isCTA: true },
        ]}
      />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
