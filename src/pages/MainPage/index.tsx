import Hero from "@components/organisms/Hero";
import Presentation from "@components/organisms/Presentation";
import SectionCTA from "@components/organisms/SectionCTA";

import { useScrollToHashOnLoad } from "@hooks/globals/navigation/useScrollToHashOnLoad";

export default function MainPage() {
  useScrollToHashOnLoad();
  return (
    <>
      <Hero />
      <Presentation />
      <SectionCTA text="Mon histoire commence ici, et peut-être que la suite s’écrit avec vous." />
    </>
  );
}
