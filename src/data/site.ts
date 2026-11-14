export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/** ISO date (YYYY-MM-DD) the home page content last changed; used in the sitemap. */
export const siteUpdatedAt = "2026-11-09";

export const profile = {
  name: "Anand K H",
  title: "Software Engineer",
  role: "Full Stack Developer",
  email: "khanand1998@gmail.com",
  location: "Bengaluru, Karnataka, India",
  github: "https://github.com/Anand-KH",
  linkedin: "https://www.linkedin.com/in/anand-k-h-0bb22416b/",
  resume: "/resume.pdf",
  portrait: "/images/Profile-new.png",
  years: "5+",
  tagline:
    "Full Stack Developer with 5+ years of experience building scalable applications with Angular, React.js, Node.js, Express.js, and MongoDB.",
};

export const navLinks = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Impact", id: "impact" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
] as const;

export const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive, interactive, and user-friendly interfaces.",
    icon: "monitor",
    skills: [
      "Angular",
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
    ],
  },
  {
    title: "Backend Development",
    description: "Developing scalable APIs and robust server-side applications.",
    icon: "server",
    skills: ["Node.js", "Express.js", "NestJS", "RESTful API Development"],
  },
  {
    title: "Databases",
    description:
      "Designing and working with data stores for dependable applications.",
    icon: "database",
    skills: ["MongoDB", "MySQL", "Microsoft SQL Server", "SQL"],
  },
  {
    title: "Cloud & Development Tools",
    description: "Tools and practices that support reliable delivery.",
    icon: "layers",
    skills: ["AWS S3", "Git", "GitHub", "GitLab", "Postman", "VS Code", "SSMS", "CI/CD"],
  },
  {
    title: "AI-Assisted Development",
    description:
      "Using AI assistants to speed up coding, debugging, code reviews, and documentation.",
    icon: "sparkles",
    skills: ["ChatGPT", "GitHub Copilot", "Google Gemini", "Claude"],
  },
] as const;

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  overview: string;
  features: string[];
  technologies: string[];
  repo: string;
  demo?: string;
  image?: string;
  accent: string;
  /** ISO date (YYYY-MM-DD) the project page last changed; used in the sitemap. */
  updatedAt: string;
};

export const projects: Project[] = [
  {
    slug: "formacv",
    title: "FormaCV",
    tagline: "Resume builder and ATS analyzer that runs entirely in the browser.",
    description:
      "A browser-based resume builder and ATS analyzer with editable templates, document import, live preview, and local resume storage.",
    overview:
      "FormaCV lets people build and refine a resume without creating an account. Resumes are edited against live-previewed templates, can be imported from existing documents, and are stored locally in the browser.",
    features: [
      "Editable resume templates with a live preview",
      "Document import to start from an existing resume",
      "ATS analysis to check how a resume reads to applicant tracking systems",
      "Local resume storage, so data stays in the browser",
    ],
    technologies: ["React 19", "TypeScript", "Material UI"],
    repo: "https://github.com/Anand-KH/FormaCV-Resume-Builder-ATS-Analyzer",
    demo: "https://formacv.surge.sh/",
    image: "/images/formacv.png",
    accent: "from-indigo-500 to-violet-500",
    updatedAt: "2026-11-09",
  },
  {
    slug: "skycast",
    title: "Skycast Weather Dashboard",
    tagline: "A responsive dashboard for current conditions and city forecasts.",
    description:
      "A responsive weather dashboard using the OpenWeather API to show current conditions and detailed city forecasts.",
    overview:
      "Skycast pulls data from the OpenWeather API and presents current conditions alongside detailed forecasts for any searched city, with a layout that adapts from phone to desktop.",
    features: [
      "Current conditions for a searched city",
      "Detailed city forecasts",
      "Responsive layout across screen sizes",
      "Data fetched from the OpenWeather REST API",
    ],
    technologies: ["React.js", "REST API", "JavaScript"],
    repo: "https://github.com/Anand-KH/Weather_api_react",
    demo: "https://weather_react.surge.sh/",
    image: "/images/skycast.png?v=2",
    accent: "from-emerald-400 to-teal-500",
    updatedAt: "2026-11-09",
  },
  {
    slug: "credit-card-application",
    title: "Credit Card Application",
    tagline: "End-to-end card application workflow with role-based access.",
    description:
      "A full-stack application for applicant submission, eligibility evaluation, approvals, card dispatch, reporting, audit history, and role-based authentication.",
    overview:
      "A full-stack workflow application that takes a credit card application from submission through eligibility evaluation and approval to card dispatch, with reporting and an audit trail along the way.",
    features: [
      "Applicant submission and eligibility evaluation",
      "Approval and card dispatch workflow",
      "Reporting and audit history",
      "Role-based authentication",
    ],
    technologies: ["Angular", "Express.js", "MongoDB"],
    repo: "https://github.com/Anand-KH/Credit-Carrd-Application",
    image: "/images/credit-card-application.png",
    accent: "from-sky-400 to-indigo-500",
    updatedAt: "2026-11-09",
  },
];

export const experience = [
  {
    role: "Associate IT Consultant",
    company: "ITC Infotech India Ltd.",
    period: "Jan 2024 – Present",
    employment: "Full-time · On payroll (PF)",
    current: true,
    summary:
      "Developing full-stack enterprise applications with Angular, Node.js and MongoDB, and building new modules from scratch with Next.js, NestJS and Microsoft SQL Server.",
    highlights: [
      "Designing and developing a Job Scheduler module for automated scheduling, sequential execution and workflow management.",
      "Developed RESTful APIs and integrated frontend and backend services across microservices.",
      "Collaborated with clients and cross-functional teams to understand requirements, resolve issues and deliver solutions.",
    ],
  },
  {
    role: "Software Engineer – Advanced",
    company: "Maiora IT Services and Consulting Pvt. Ltd.",
    period: "Dec 2021 – Dec 2023",
    employment: "Full-time · On payroll (PF)",
    current: false,
    summary:
      "Built and maintained full-stack enterprise applications using Angular, Node.js, Express.js, and MongoDB.",
    highlights: [
      "Integrated HDFC Payment Gateway into a Learning Management System.",
      "Implemented AWS S3 for storing images, videos and documents.",
      "Contributed to 5 in-house projects, delivering application features, API integrations and enhancements.",
      "Received multiple quarterly appreciations in recognition of consistent performance, technical contributions, and project delivery.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Ailoitte Technologies Pvt. Ltd.",
    period: "Aug 2021 – Dec 2021",
    employment: "Full-time",
    current: false,
    summary:
      "Developed responsive React.js interfaces and scalable Node.js RESTful APIs.",
    highlights: [
      "Built Node.js RESTful APIs and improved frontend-backend integration and application reliability.",
    ],
  },
  {
    role: "Student Trainee",
    company: "SWENG Solutions Pvt. Ltd.",
    period: "Sep 2020 – Aug 2021",
    employment: "Paid internship · Certified",
    current: false,
    summary:
      "Completed a paid internship building responsive React.js interfaces and Node.js APIs as part of a collaborative product team.",
    highlights: [
      "Worked on \"Help Me Online\", a full-stack development project, through to satisfactory completion.",
      "Implemented Node.js APIs and collaborated with team members to develop and troubleshoot application features.",
      "Awarded an internship certificate on completion.",
    ],
  },
];

export const stats = [
  { value: "5+", label: "Years of experience" },
  { value: "4", label: "Companies worked with" },
  { value: "5", label: "Projects at Maiora" },
  { value: "Multiple", label: "Quarterly appreciations" },
];

export const impactHighlights = [
  {
    title: "Job Scheduler module",
    detail:
      "Currently designing and developing automated scheduling, sequential execution and workflow management at ITC Infotech.",
  },
  {
    title: "Payments in an LMS",
    detail:
      "Integrated the HDFC Payment Gateway into a Learning Management System at Maiora.",
  },
  {
    title: "Media storage on AWS S3",
    detail:
      "Implemented AWS S3 for storing images, videos and documents across applications at Maiora.",
  },
];

/**
 * Add real testimonials here. The section only renders when this list is non-empty.
 * Example: { quote: "…", name: "Jane Doe", role: "Engineering Manager, Company" }
 */
export const testimonials: { quote: string; name: string; role: string }[] = [];

export const education = {
  degree: "Bachelor of Engineering (B.E.)",
  field: "Electronics and Communication",
  period: "2016 – 2020",
  grade: "CGPA: 6.48",
  school: "RAJARAJESHWARI COLLEGE OF ENGINEERING",
  location: "Bengaluru, Karnataka",
};
