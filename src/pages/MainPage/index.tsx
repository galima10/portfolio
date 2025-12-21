import Hero from "@components/organisms/main/Hero";
import Presentation from "@components/organisms/main/Presentation";
import Skills from "@components/organisms/main/Skills";
import Technos from "@components/organisms/main/Technos";
import Projects from "@components/organisms/main/Projects";
import Contact from "@components/organisms/main/Contact";

import SectionCTA from "@components/organisms/main/SectionCTA";

import { useScrollToHashOnLoad } from "@hooks/globals/navigation/useScrollToHashOnLoad";
import { useScrollPage } from "@hooks/globals/navigation/useScrollPage";
import { useAppDispatch } from "@hooks/redux";
import { clearNavigationState } from "@stores/features/navigationSlice";
import { useEffect } from "react";

export default function MainPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearNavigationState());
  }, [dispatch]);

  useScrollToHashOnLoad();
  useScrollPage();
  return (
    <>
      <Hero />
      <Presentation />
      <SectionCTA
        text="Mon histoire commence ici, et peut-être que la suite s’écrit avec vous."
        to="#contactForm"
        id="afterPresentation"
      />
      <Skills />
      <Technos />
      <SectionCTA
        text="Voici ce qui m’accompagne au quotidien, mais avec les bonnes personnes, tout prend un vrai sens."
        to="#contactForm"
        id="afterSkills"
      />
      <Projects />
      <SectionCTA
        text="Chaque aventure m’a fait avancer. Et si la prochaine était la vôtre ?"
        to="#contactForm"
        id="afterProjects"
      />
      <Contact />
    </>
  );
}
