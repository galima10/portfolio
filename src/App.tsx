import "./styles/main.scss";

import React, { Suspense } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "@pages/MainPage";
const ProjectPage = React.lazy(() => import("@pages/ProjectPage"));

import Navbar from "@components/organisms/general/Navbar";

import { headerNavLinks } from "@constants/global";

function App() {
  return (
    <BrowserRouter>
      <Navbar links={headerNavLinks} />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/projects/:slug"
            element={
              <Suspense fallback={null}>
                <ProjectPage />
              </Suspense>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
