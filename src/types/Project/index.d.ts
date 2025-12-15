export interface ProjectDescriptionType {
  context: {
    category: string;
    sector: string;
    type: string;
    customer?: string;
    summaryInfos: string;
  };
  challenges: {
    project: string;
    personal: string;
  };
  objectives: {
    project: {
      main: string;
      key1: string;
      key2?: string;
      secondary: string;
    };
    personal: string[];
  };
  target: {
    principal: string;
    secondary: string;
  };
  deliverablesConstraintsResources: {
    deliverables: {
      name: string;
      format: string;
      goal: string;
      specificities?: string;
      technologies: string;
    }[];
    constraints: {
      temporal?: string[];
      technical?: string[];
      budget?: string[];
      graphic?: string[];
      geographic?: string[];
    };
    resources: {
      available: string[];
      missing: string[];
    };
  };
  planning: {
    name: string;
    mainTasks: string;
    deliverables: string;
    deadline: string;
  }[];
  actions: {
    missions: string[];
    tools: string[];
    skills: string[];
  };
  results: {
    achievements: string;
    learnings: string;
    testimonials?: string;
  };
  proofs?: {
    list?: {
      name: string;
      type: string;
      imgSrc: string;
    }[];
    demonstrationLinks?: {
      name: string;
      type: string;
      url: string;
    };
  }[];
  consclusion: string;
}

export interface StackItemType {
  label: string;
  icon:
    | "typescript"
    | "react"
    | "expo"
    | "jest"
    | "supabase"
    | "bootstrap"
    | "html"
    | "css"
    | "javascript";
}

export interface ProjectType {
  id: string;
  slug: string;
  name: string;
  island: "island1" | "island2" | "island3";
  hook: string;
  label: string;
  stack: StackItemType[];
  preview?: string;
  description?: ProjectDescriptionType;
}
