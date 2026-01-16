import Hero from "@components/organisms/main/Hero";
import Presentation from "@components/organisms/main/Presentation";
import Skills from "@components/organisms/main/Skills";
import Technos from "@components/organisms/main/Technos";
import Projects from "@components/organisms/main/Projects";
import Contact from "@components/organisms/main/Contact";

import Footer from "@components/organisms/general/Footer";
import { footerNavLinks } from "@constants/global";
import { projects } from "@constants/projects";

import SectionCTA from "@components/organisms/main/SectionCTA";

import { useScrollToHashOnLoad } from "@hooks/globals/navigation/useScrollToHashOnLoad";

import { useScrollSnap } from "@hooks/globals/navigation/useScrollSnap";

import React, { Suspense } from "react";
const TimeLine = React.lazy(() => import("@components/timeline/TimeLine"));

export default function MainPage() {
  useScrollToHashOnLoad();
  useScrollSnap("main");

  return (
    <>
      <Suspense fallback={null}>
        <TimeLine />
      </Suspense>
      <Hero />
      <Presentation />
      <SectionCTA
        text="Mon histoire commence ici, et peut-être que la suite s’écrit avec vous."
        to="#group4-contactForm"
        id="afterPresentation"
      />
      <Skills />
      <Technos />
      <SectionCTA
        text="Voici ce qui m’accompagne au quotidien, mais avec les bonnes personnes, tout prend un vrai sens."
        to="#group4-contactForm"
        id="afterSkills"
      />
      <Projects />
      <SectionCTA
        text="Ces aventures m’ont fait avancer. Et si la prochaine était la vôtre ?"
        to="#group4-contactForm"
        id="afterProjects"
      />
      <Contact />
      <Footer links={footerNavLinks} projects={projects} />
    </>
  );
}
