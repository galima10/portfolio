import "./styles/main.scss";

import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "@pages/MainPage";
const ProjectPage = React.lazy(() => import("@pages/ProjectPage"));

import Navbar from "@components/organisms/general/Navbar";
import Footer from "@components/organisms/general/Footer";

import { headerNavLinks, footerNavLinks } from "@constants/global";
import { projects } from "@constants/projects";

function App() {
  return (
    <BrowserRouter>
      <Navbar links={headerNavLinks} />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
        </Routes>
      </main>
      
    </BrowserRouter>
  );
}

export default App;
