export interface ProjectDescription {
  context: {
    category: string;
    sector: string;
    type: string;
    customer: string;
    summaryInfos: string;
  };
  challenges: {
    project: string;
    personal: string;
  };
  objectives: {
    project: {
      main: string;
      keys: string[];
      secondary: string;
    };
    personal: string[];
  };
  target: {
    principal: string;
    secondary: string;
  };
  deliverables: {
    name: string;
    format: string;
    goal: string;
    technologies: string;
  }[];
  constraints: {
    temporal: string[];
    technical: string[];
    budget: string[];
    graphic: string[];
  };
  resources: {
    available: {
      category: string;
      items: string[];
    }[];
    missing: {
      name: string;
      solution: string;
    }[];
  };
  planning: {
    name: string;
    mainTasks: string[];
    deliverables: string[];
    deadline: string;
  }[];
  missions: string[];
  tools: {
    name: string;
    purpose: string;
  }[];
  skills: {
    hard: string[];
    soft: string[];
  };
  results: {
    achievements: string;
    learnings: string;
    testimonials: string[];
  };
  proofs: {
    name: string;
    type: string;
    imgSrc: string;
  }[];
  demonstrationLinks?: {
    name: string;
    type: string;
    url: string;
  }[];
  consclusions: string;
}