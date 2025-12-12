import Hero from "@components/organisms/Hero";
import Presentation from "@components/organisms/Presentation";
import SectionCTA from "@components/organisms/SectionCTA";

export default function MainPage() {
  return (
    <>
      <Hero />
      <Presentation />
      <SectionCTA text="Mon histoire commence ici, et peut-être que la suite s’écrit avec vous." />
    </>
  );
}
