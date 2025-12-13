import Hero from "@components/organisms/Hero";
import Presentation from "@components/organisms/Presentation";
import Skills from "@components/organisms/Skills";
import Technos from "@components/organisms/Technos";
import Projects from "@components/organisms/Projects";

import SectionCTA from "@components/organisms/SectionCTA";

import { useScrollToHashOnLoad } from "@hooks/globals/navigation/useScrollToHashOnLoad";

export default function MainPage() {
  useScrollToHashOnLoad();
  return (
    <>
      <Hero />
      <Presentation />
      <SectionCTA text="Mon histoire commence ici, et peut-être que la suite s’écrit avec vous." />
      <Skills />
      <Technos />
      <SectionCTA text="Voici ce qui m’accompagne au quotidien, mais avec les bonnes personnes, tout prend un vrai sens." />
      <Projects />
      <SectionCTA text="Chaque aventure m’a fait avancer. Et si la prochaine était la vôtre ?" />
    </>
  );
}
