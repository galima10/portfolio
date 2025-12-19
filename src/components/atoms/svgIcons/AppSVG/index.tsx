import React, { Suspense } from "react";

import Bootstrap from "../tools/Bootstrap";
import CSS from "../tools/CSS";
import Elementor from "../tools/Elementor";
import Expo from "../tools/Expo";
import Express from "../tools/Express";
import Github from "../tools/Github";
import HTML from "../tools/HTML";
import JavaScript from "../tools/JavaScript";
import Jest from "../tools/Jest";
import Node from "../tools/Node";
import PHP from "../tools/PHP";
import Postman from "../tools/Postman";
import Prisma from "../tools/Prisma";
import ReactIcon from "../tools/ReactIcon";
import Sass from "../tools/Sass";
import SQLite from "../tools/SQLite";
import Supabase from "../tools/Supabase";
import Three from "../tools/Three";
import TypeScript from "../tools/TypeScript";
import Vite from "../tools/Vite";
import WampServer from "../tools/WampServer";
import Wordpress from "../tools/Wordpress";

import LinkedIn from "../socialMedias/LinkedIn";
import Logo from "../logo/Logo";

const Brush = React.lazy(() => import("../skills/Brush"));
const Handle = React.lazy(() => import("../skills/Handle"));
const Talkie = React.lazy(() => import("../skills/Talkie"));
const Hammer = React.lazy(() => import("../skills/Hammer"));
const Wrench = React.lazy(() => import("../skills/Wrench"));
const Glass = React.lazy(() => import("../skills/Glass"));
const Lamp = React.lazy(() => import("../skills/Lamp"));

const LanguagesMap = React.lazy(() => import("../technos/SVG/LanguagesMap"));
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
  prisma: Prisma,
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

  languagesMap: LanguagesMap,
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