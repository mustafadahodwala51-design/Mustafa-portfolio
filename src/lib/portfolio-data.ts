import type {
  BlogPost,
  Certification,
  Project,
  SkillGroup,
  Testimonial,
  TimelineEvent,
} from "@/types/portfolio";

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
] as const;

export const TIMELINE: TimelineEvent[] = [
  { stage: "The Start", title: "From Commerce to Code", description: "Started out in Commerce, but kept drifting toward analytical problem-solving and anything numbers-driven." },
  { stage: "The Spark", title: "Discovered Data Science", description: "Realized data and AI weren't a niche — they were how modern problems actually get solved at scale." },
  { stage: "The Pivot", title: "B.Sc. Data Science, B.K. Birla College", description: "Began formal study in Data Science at B.K. Birla College of Arts, Science & Commerce, Kalyan, Maharashtra." },
  { stage: "First Build", title: "First Machine Learning Project", description: "Shipped the Employee Attrition Prediction system end-to-end — from raw HR data to a working prediction UI." },
  { stage: "Credentials", title: "Certifications in AI", description: "Earned Oracle, IBM, and EY / Microsoft AI credentials to reinforce foundations with formal recognition." },
  { stage: "Shipping", title: "Building Real Products", description: "Expanded into full products — TraffinityX for smart traffic, and Sahasya for women's safety." },
  { stage: "Now", title: "What's Next", description: "Actively seeking a Data Science / ML / AI internship to apply these skills to real, high-impact problems." },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: "Programming Languages",
    items: ["Python", "SQL", "R", "C++", "JavaScript"],
  },
  {
  label: "AI & CORE CONCEPTS",
  items: [
    "Prompt Engineering",
    "Artificial Intelligence",
    "Deep Learning",
    "Generative AI",
    "Statistics",
    "Probability",
    "Model Evaluation",
    "Data Cleaning"
  ]
},
  {
    label: "Libraries & Machine Learning",
    items: [
      "Pandas", "NumPy", "Matplotlib", "Scikit-Learn",
      "Machine Learning", "Data Analysis", "Feature Engineering", "Data Visualization","Plotly","Tkinter","Seaborn"
    ],
  },
  {
    label: "Tools & Platforms",
    items: ["Git", "GitHub", "Jupyter Notebook", "VS Code", "Excel", "Power BI", "MySQL","Google Colab","JupyterLab","Oracle Cloud(OCI AI)"],
  },

  {
  label: "Frontend & Backend",
  items: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "REST APIs",
    "Supabase",
    "Git",
    "GitHub"
  ]
},
];

export const MARQUEE_SKILLS = [
  "Python", "Pandas", "NumPy", "Scikit-Learn", "SQL", "Git",
  "Power BI", "Jupyter", "Machine Learning", "Matplotlib", "GitHub",
];

export const PROJECTS: Project[] = [
  {
    slug: "employee-attrition-prediction",
    title: "Employee Attrition Prediction",
    category: "Machine Learning",
    description:
      "An end-to-end machine learning application that predicts whether an employee is likely to leave an organization using HR analytics data, covering data cleaning, EDA, feature engineering, model training, and an interactive prediction interface.",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Scikit-Learn",
      "Tkinter",
      "Git",
      "GitHub",
    ],
    highlights: [
      { value: "88.44%", label: "Accuracy" },
      { value: "Logistic", label: "Model" },
      { value: "HR Data", label: "Dataset" },
    ],
    featured: true,
    github: "#",
    demo: "#",
  },

  {
    slug: "traffinityx",
    title: "TraffinityX",
    category: "AI · Traffic Systems",
    description:
      "A smart AI-powered traffic management platform that monitors traffic, detects congestion, predicts traffic flow, and visualizes insights through a real-time dashboard.",
    tech: [
      "Python",
      "Machine Learning",
      "Computer Vision",
      "Data Analytics",
      "Dashboard UI",
    ],
    highlights: [
      { value: "AI", label: "Prediction" },
      { value: "Live", label: "Traffic" },
      { value: "Vision", label: "CV" },
    ],
    github: "#",
    demo: "#",
  },

  {
    slug: "house-price-prediction",
    title: "House Price Prediction",
    category: "Machine Learning",
    description:
      "An end-to-end machine learning project for predicting residential property prices using EDA, feature engineering, regression models, and an interactive dashboard.",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "Plotly",
      "Matplotlib",
      "Seaborn",
    ],
    highlights: [
      { value: "EDA", label: "Analysis" },
      { value: "Regression", label: "Model" },
      { value: "Dashboard", label: "Interactive" },
    ],
    github: "#",
    demo: "#",
  },

  {
    slug: "sahasya",
    title: "Sahasya",
    category: "Safety Tech",
    description:
      "An intelligent women's safety application offering emergency SOS alerts, live location sharing, safe route suggestions, and quick access to nearby help centers.",
    tech: [
      "Python",
      "App Development",
      "Location Services",
      "Real-Time Alerts",
    ],
    highlights: [
      { value: "SOS", label: "Alerts" },
      { value: "GPS", label: "Tracking" },
      { value: "Safe", label: "Routes" },
    ],
    github: "#",
    demo: "#",
  },

  {
    slug: "weatherzilla",
    title: "WeatherZilla",
    category: "Web App",
    description:
      "A modern weather application that displays live temperature, humidity, wind speed, and cloud conditions using real-time weather APIs.",
    tech: [
      "JavaScript",
      "HTML",
      "CSS",
      "Weather API",
    ],
    highlights: [
      { value: "Live", label: "Weather" },
      { value: "API", label: "Source" },
      { value: "UI", label: "Responsive" },
    ],
    github: "#",
    demo: "#",
  },
];

export const CERTIFICATIONS: Certification[] = [
  { title: "Oracle Cloud Infrastructure AI Foundations Associate", issuer: "Oracle", date: "2025" /* TODO real date */, url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=5C02F1721712294A5A8EC737EF1A73B893DC6D998E3D5B14B7F53CEC9E90C188" },
  { title: "Oracle Cloud Infrastructure Generative AI Professional", issuer: "Oracle", date: "2025", url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=85A5F7BFD6B738DA5F9B2C522D2B8FB3EEBF85BD82D07B374E394A7023886CF0" },
  { title: "Artificial Intelligence Fundamentals", issuer: "IBM", date: "2025", url: "/certificates/ibm-ai-fundamentals-certificate.pdf" },
  { title: "Microsoft AI Skills Passport", issuer: "EY & Microsoft", date: "2025", url: "/certificates/microsoft-ai-skills-passport.pdf" },
  { title: "Data Analysis And Visualization Using Python", issuer: "B.K.Birla College ", date: "2026", url: "/certificates/data-analysis-certificate.pdf" },
  { title: "Business Statistics", issuer: "Saylor University", date: "2026", url: "/certificates/business-statistics-certificate.pdf" },
  { title: "Google Solution Challenge Hackathon", issuer: "HACK2SKILL", date: "2026", url: "https://certificate.hack2skill.com/verify/2026H2S07SCBWAI-PS11575" },


];

// TODO: replace with real achievements as earned
export const ACHIEVEMENTS = [
  {
    title: "Academic Excellence",
    description: "Achieved 92.33% in HSC and currently maintaining a 9.64/10 CGPA in B.Sc. Data Science.",
    icon: "star" as const,
  },
  {
    title: "Hackathon Experience",
    description: "Built AI-driven solutions during the Google Hackathon, contributing to the 'Sahasya' women safety project.",
    icon: "trophy" as const,
  },
  {
    title: "AI & Data Science Certified",
    description: "Completed multiple industry-recognized certifications from Oracle, IBM, and Microsoft in AI, Generative AI, Data Analysis, and Business Statistics.",
    icon: "award" as const,
  },
];

// TODO: replace with real testimonials
export const TESTIMONIALS: Testimonial[] = [
  { quote: "This is a placeholder testimonial — replace with real feedback from a mentor, professor, or project collaborator.", name: "Name Placeholder", role: "Role Placeholder" },
  { quote: "This is a placeholder testimonial — replace with real feedback from a mentor, professor, or project collaborator.", name: "Name Placeholder", role: "Role Placeholder" },
  { quote: "This is a placeholder testimonial — replace with real feedback from a mentor, professor, or project collaborator.", name: "Name Placeholder", role: "Role Placeholder" },
];

export const BLOG_POSTS: BlogPost[] = [
  { category: "Machine Learning", title: "Understanding Feature Engineering for Beginners", readTime: "5 min read" },
  { category: "Career", title: "From Commerce to Data Science: What I Learned", readTime: "7 min read" },
  { category: "Data Analysis", title: "The EDA Habits That Save Every Project", readTime: "6 min read" },
];

export const CONTACT = {
  // TODO: replace with real values
  email: "dahodmustafa53@gmail.com",
  linkedin: "https://www.linkedin.com/in/mustafa-dahodwala-876b78366",
  github: "https://github.com/mustafadahodwala51-design",
  location: "Kalyan, Maharashtra, India",
  resumeUrl: "/resume-mustafa-dahodwala.pdf",
};
