import "./styles/main.scss";

import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "@pages/MainPage";
const ProjectPage = React.lazy(() => import("@pages/ProjectPage"));

import Navbar from "@components/organisms/Navbar";
import Footer from "@components/organisms/Footer";

import { headerNavLinks, footerNavLinks } from "@constants/global";
import { projects } from "@constants/projects";

function App() {
  return (
    <BrowserRouter>
      <Navbar
        links={headerNavLinks}
      />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
      </Routes>
      <Footer links={footerNavLinks} projects={projects} />
    </BrowserRouter>
  );
}

export default App;
