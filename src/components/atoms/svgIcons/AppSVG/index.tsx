import React, { Suspense } from "react";

const Bootstrap = React.lazy(() => import("../tools/Bootstrap"));
const CSS = React.lazy(() => import("../tools/CSS"));
const Elementor = React.lazy(() => import("../tools/Elementor"));
const Expo = React.lazy(() => import("../tools/Expo"));
const Express = React.lazy(() => import("../tools/Express"));
const Github = React.lazy(() => import("../tools/Github"));
const HTML = React.lazy(() => import("../tools/HTML"));
const JavaScript = React.lazy(() => import("../tools/JavaScript"));
const Jest = React.lazy(() => import("../tools/Jest"));
const Node = React.lazy(() => import("../tools/Node"));
const PHP = React.lazy(() => import("../tools/PHP"));
const Postman = React.lazy(() => import("../tools/Postman"));
const ReactIcon = React.lazy(() => import("../tools/ReactIcon"));
const Sass = React.lazy(() => import("../tools/Sass"));
const SQLite = React.lazy(() => import("../tools/SQLite"));
const Supabase = React.lazy(() => import("../tools/Supabase"));
const Three = React.lazy(() => import("../tools/Three"));
const TypeScript = React.lazy(() => import("../tools/TypeScript"));
const Vite = React.lazy(() => import("../tools/Vite"));
const WampServer = React.lazy(() => import("../tools/WampServer"));
const Wordpress = React.lazy(() => import("../tools/Wordpress"));

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
  bootstrap: Bootstrap,
  css: CSS,
  elementor: Elementor,
  expo: Expo,
  express: Express,
  github: Github,
  html: HTML,
  javascript: JavaScript,
  jest: Jest,
  node: Node,
  php: PHP,
  postman: Postman,
  react: ReactIcon,
  sass: Sass,
  sqlite: SQLite,
  supabase: Supabase,
  three: Three,
  typescript: TypeScript,
  vite: Vite,
  wampserver: WampServer,
  wordpress: Wordpress,

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