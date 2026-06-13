import { Skill, Project, Experience } from './types';

export const personalData = {
  name: "Rizwan Bugti",
  title: "Frontend & UI Developer",
  subTitle: "Building refined, high-performance web applications with clean, interactive designs and modern technologies.",
  aboutText: "I am a dedicated Frontend and UI Developer passionate about translating ideas into robust, aesthetically elegant web interfaces. Embracing modular structures, readable code, and clean layouts, I craft web applications that are as satisfying to use as they are under the hood. I specialize in the React ecosystem, Tailwind CSS, and TypeScript, and I am always looking for ways to push the boundaries of user experience design.",
  email: "rizwanbugti33@gmail.com",
  location: "Pakistan",
  github: "https://github.com/rizwanbugti384",
  linkedin: "https://www.linkedin.com/in/rizwanbugti",
  instagram: "https://www.instagram.com/rizwanbugti11",
  facebook: "https://www.facebook.com/share/1XrAyvnMoN/",
  twitter: "https://x.com/MRizwanbugti",
  resumeUrl: "#",
  avatarUrl: "/rizwan.png",
};

export const skillsData: Skill[] = [
  // Frontend
  { name: "React", level: 90, category: "Frontend", iconName: "Code" },
  { name: "TypeScript", level: 85, category: "Frontend", iconName: "Code" },
  { name: "Tailwind CSS", level: 95, category: "Frontend", iconName: "Layout" },
  { name: "Next.js", level: 80, category: "Frontend", iconName: "Layers" },
  { name: "HTML5 & CSS3", level: 95, category: "Frontend", iconName: "FileCode" },
  { name: "JavaScript (ES6+)", level: 90, category: "Frontend", iconName: "Code" },
  { name: "Redux / Zustand", level: 80, category: "Frontend", iconName: "Database" },

  // Backend
  { name: "Node.js", level: 75, category: "Backend", iconName: "Server" },
  { name: "Express", level: 78, category: "Backend", iconName: "Server" },
  { name: "RESTful APIs", level: 85, category: "Backend", iconName: "Cpu" },
  { name: "Firebase / Firestore", level: 80, category: "Backend", iconName: "Flame" },

  // Tools & Workflows
  { name: "Git & GitHub", level: 88, category: "Tools", iconName: "GitBranch" },
  { name: "Vite & Webpack", level: 85, category: "Tools", iconName: "Settings" },
  { name: "npm / Yarn", level: 90, category: "Tools", iconName: "Box" },
  { name: "VS Code", level: 95, category: "Tools", iconName: "Terminal" },

  // Design
  { name: "Figma", level: 82, category: "Design", iconName: "PenTool" },
  { name: "UI/UX Architecture", level: 85, category: "Design", iconName: "Framer" },
  { name: "Responsive Design", level: 98, category: "Design", iconName: "Smartphone" },
];

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Interactive Weather Forecaster",
    description: "A sleek, responsive weather application featuring real-time meteorological reports, temperature metrics, and atmospheric conditions.",
    longDescription: "This Interactive Weather Forecasting application queries live weather telemetry APIs to offer current condition checks. Fully responsive and client-aligned, it delivers visually stunning condition indicators and micro-interactions optimized for any device framework.",
    tags: ["HTML5", "CSS3", "JavaScript", "Weather API", "Responsive"],
    imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800",
    demoUrl: "https://rizwanbugti384.github.io/Weather-Apps/",
    githubUrl: "https://github.com/rizwanbugti384/Weather-Apps",
    featured: true
  },
  {
    id: "2",
    title: "E-Commerce Assignment Concept",
    description: "A pristine responsive digital web hub featuring item grids, responsive navigation columns, and premium layout spacing designed for maximum visual fidelity.",
    longDescription: "An HTML-driven responsive web assignment project built to showcase pixel-perfect margins, clean font pairings, and advanced styling standards. Fully accessible and client-aligned, it utilizes optimized component states.",
    tags: ["HTML5", "CSS3", "JavaScript", "Layout Architecture", "Web Design"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    demoUrl: "https://rizwanbugti384.github.io/assisgment15/",
    githubUrl: "https://github.com/rizwanbugti384/assisgment15",
    featured: false
  },
  {
    id: "3",
    title: "Modern Interactive Profile Bio",
    description: "An elegant interactive resume landing portal showcasing personal background milestones, core expertise stack, and career focus details.",
    longDescription: "Designed to serve as a comprehensive personal digital introduction hub. This website features stunning typographical pairings, fluid layout structures, and animated entering transitions built inside a premium space aesthetic.",
    tags: ["HTML5", "Sleek CSS", "JavaScript", "Aesthetics", "Responsive Layout"],
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
    demoUrl: "https://rizwanbugti384.github.io/RizwanBugti-Introduction/",
    githubUrl: "https://github.com/rizwanbugti384/RizwanBugti-Introduction",
    featured: true
  },
  {
    id: "4",
    title: "Official Government Portal Template",
    description: "A highly structured, professional, and accessible government template designed with administrative headers, news feeds, and official departments columns.",
    longDescription: "Developed using rigorous accessibility frameworks, this template demonstrates a secure, high-contrast, robust layout suitable for municipalities and state institutions. Features an interactive layout designed to present dense information beautifully.",
    tags: ["HTML5", "Tailwind CSS", "Semantic UI", "Accessibility", "Aesthetic Structuring"],
    imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80&w=800",
    demoUrl: "https://rizwanbugti384.github.io/government-template/",
    githubUrl: "https://github.com/rizwanbugti384/government-template",
    featured: true
  },
  {
    id: "5",
    title: "State Resource Portal (Alt version)",
    description: "A modern state services digital hub built in collaboration, centering citizen outreach channels, public records listings, and government reports.",
    longDescription: "A specialized branch of the official government template built with advanced navigation headers, helpful localized action targets, and robust grid configurations. Focuses on intuitive user redirection and pixel-precise styling elements.",
    tags: ["HTML5", "CSS Grid", "Interactions", "Collaboration", "Citizen Portal"],
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    demoUrl: "https://mabdullahjs.github.io/government-template/",
    githubUrl: "",
    featured: false
  },
  {
    id: "6",
    title: "Sleek Creative Showcase Reference",
    description: "An ultra-minimalist, high-end designer showcase layout with ambient light states, bespoke typography spacing, and fluid structural pacing.",
    longDescription: "Inspired by cutting-edge visual design systems, this portfolio presents premium digital case studies within a borderless design system. Built around a Swiss design aesthetic, spacing variations provide a deeply tactile feel.",
    tags: ["React", "Vite", "Modernist Design", "Sleek Animations", "Zero-Clutter UI"],
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    demoUrl: "https://nicolasharnisch.vercel.app/",
    githubUrl: "",
    featured: false
  },
  {
    id: "7",
    title: "Smart Agriculture Web Platform",
    description: "A green-themed visual website designed for agricultural hubs, showcasing smart farming resources, seasonal crops guides, and grower services.",
    longDescription: "An immersive, beautifully colored agricultural web showcase centered on organic product lines, modern irrigation techniques, and grain farming technologies. Implements high-contrast accessibility and responsive cards.",
    tags: ["HTML5", "CSS3", "JavaScript", "Green Theme", "Eco Showcase"],
    imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800",
    demoUrl: "https://mmubashirjs.github.io/Agriculture-Website-project/",
    githubUrl: "",
    featured: true
  },
  {
    id: "8",
    title: "Core Student Management Hub",
    description: "An intuitive web application used to catalog records, track classroom registration status, and handle student enrollment listings via clean scripts.",
    longDescription: "A fully clientside data registry concept to handle standard student logs and records gracefully on-page without heavy database delay. Designed with modular input cells and real-time records rendering lists.",
    tags: ["JavaScript (ES6)", "Registry Operations", "Responsive Grid", "Storage Management"],
    imageUrl: "https://images.unsplash.com/photo-1427504494885-3f5ac50727e0?auto=format&fit=crop&q=80&w=800",
    demoUrl: "https://mmubashirjs.github.io/student-management-system-js/",
    githubUrl: "",
    featured: false
  }
];

export const experiencesData: Experience[] = [
  {
    id: "exp1",
    role: "Frontend Developer",
    company: "Freelance / Self-employed",
    period: "2024 - Present",
    description: [
      "Crafting high-quality, responsive web layouts and interactive applications for digital brands.",
      "Optimizing rendering performance, loading speeds, and overall mobile responsiveness of client sites.",
      "Collaborating closely with designers to implement custom Figma prototypes into production-grade Tailwind CSS and React."
    ]
  },
  {
    id: "exp2",
    role: "UI Engineer Specialist",
    company: "Open Source Contributor",
    period: "2023 - 2024",
    description: [
      "Contributing to utility design UI systems, fixing responsive layout issues, and refactoring React components.",
      "Drafting clear, comprehensive documentation templates to guide secondary contributors."
    ]
  }
];
