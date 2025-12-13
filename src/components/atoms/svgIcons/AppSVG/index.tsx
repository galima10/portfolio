import React, { Suspense } from "react";

const Github = React.lazy(() => import("../socialMedias/Github"));
const LinkedIn = React.lazy(() => import("../socialMedias/LinkedIn"));

const Brush = React.lazy(() => import("../skills/Brush"));
const Handle = React.lazy(() => import("../skills/Handle"));
const Talkie = React.lazy(() => import("../skills/Talkie"));
const Hammer = React.lazy(() => import("../skills/Hammer"));
const Wrench = React.lazy(() => import("../skills/Wrench"));
const Glass = React.lazy(() => import("../skills/Glass"));
const Lamp = React.lazy(() => import("../skills/Lamp"));

const Logo = React.lazy(() => import("../logo/Logo"));

const LanguageMap = React.lazy(() => import("../technos/SVG/LanguageMap"));
const FrameworksMap = React.lazy(() => import("../technos/SVG/FrameworksMap"));
const ToolsMap = React.lazy(() => import("../technos/SVG/ToolsMap"));
const DiscussedMap = React.lazy(() => import("../technos/SVG/DiscussedMap"));

const Island1 = React.lazy(() => import("../projects/Island1"));
const Island2 = React.lazy(() => import("../projects/Island2"));
const Island3 = React.lazy(() => import("../projects/Island3"));

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

  island1: Island1,
  island2: Island2,
  island3: Island3,
};

export default function AppSVG({ className, name }: AppSVGProps) {
  const Comp = icons[name];

  if (!Comp) {
    console.error(`Icon "${name}" not found in AppSVG.`);
    return null;
  }

  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <Comp className={className} />
    </Suspense>
  );
}