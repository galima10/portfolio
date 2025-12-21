export type TechnosType = "html" | "css" | "javascript" | "typescript" | "react" | "sass" | "elementor" | "expo" | "github" | "node" | "postman" | "wordpress" | "bootstrap" | "express" | "jest" | "php";

export interface TechnoItem {
  name: string;
  type: "frontend" | "backend" | "database" | "tool" | "fullstack";
  cell?: {
    row: number;
    col: number;
  };
}