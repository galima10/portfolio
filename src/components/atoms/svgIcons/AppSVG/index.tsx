import Github from "../socialMedias/Github";
import LinkedIn from "../socialMedias/LinkedIn";

import Brush from "../skills/Brush";
import Handle from "../skills/Handle";
import Talkie from "../skills/Talkie";
import Hammer from "../skills/Hammer";
import Wrench from "../skills/Wrench";
import Glass from "../skills/Glass";
import Lamp from "../skills/Lamp";

import Logo from "../logo/Logo";

import LanguageMap from "../technos/SVG/LanguageMap";
import FrameworksMap from "../technos/SVG/FrameworksMap";
import ToolsMap from "../technos/SVG/ToolsMap";
import DiscussedMap from "../technos/SVG/DiscussedMap";

interface AppSVGProps {
  className?: string;
  name: keyof typeof icons;
}

const icons = {
  github: Github,
  linkedin: LinkedIn,

  logo: Logo,

  brush: Brush,
  handle: Handle,
  talkie: Talkie,
  hammer: Hammer,
  wrench: Wrench,
  glass: Glass,
  lamp: Lamp,

  languageMap: LanguageMap,
  frameworksMap: FrameworksMap,
  toolsMap: ToolsMap,
  discussedMap: DiscussedMap,
};

export default function AppSVG({ className, name }: AppSVGProps) {
  const Comp = icons[name];
  return <Comp className={className} />;
}
