import { Project, SkillItem, ExperienceItem, HackathonItem } from '../types/portfolio';

export const personalInfo = {
  name: "Deepshikha Yadav",
  title: "B.Tech CSE Student · Full-Stack Developer · AI Enthusiast · Open Source Contributor",
  bio: "I build web and AI-powered solutions, explore emerging technologies, contribute to open source, and love turning real-world problems into practical digital experiences.",
  college: "Shri Ram Swaroop Memorial College of Engineering and Management",
  collegeShort: "SRMCEM, Lucknow",
  degree: "B.Tech in Computer Science and Engineering",
  currentYear: "2nd Year",
  graduationYear: "2029",
  location: "Lucknow, Uttar Pradesh, India",
  email: "dy.deepshikha04aug@gmail.com",
  github: "https://github.com/dsy404",
  githubUsername: "dsy404",
  linkedin: "https://www.linkedin.com/in/deepshikha-yadav",
  linkedinName: "Deepshikha Yadav",
  phone: "9369534593",
  objective: "To become a skilled software developer, contribute to impactful open-source initiatives, and use artificial intelligence and full-stack technologies to solve meaningful real-world challenges.",
  stats: [
    { label: "Graduation Cohort", value: "2029" },
    { label: "Current Standing", value: "2nd Year B.Tech" },
    { label: "Primary Discipline", value: "Computer Science" },
    { label: "Open Source Role", value: "GSSoC '26 Contributor" }
  ]
};

export const aboutPillars = [
  {
    number: "01",
    title: "Build",
    subtitle: "Creating practical web and AI solutions",
    description: "Designing end-to-end applications from intuitive React frontends to robust Python & Node backends, with a strong emphasis on clean code and reliable performance."
  },
  {
    number: "02",
    title: "Learn",
    subtitle: "Continuously exploring new technologies",
    description: "Constantly expanding skills across machine learning frameworks, data manipulation pipelines, cloud containerization, and modern software engineering paradigms."
  },
  {
    number: "03",
    title: "Contribute",
    subtitle: "Participating in open source & collaborative development",
    description: "Collaborating with worldwide developer communities, reviewing pull requests, improving documentation, and participating in programs like GirlScript Summer of Code."
  },
  {
    number: "04",
    title: "Solve",
    subtitle: "Addressing real-world challenges through technology",
    description: "Tackling real-life workflow bottlenecks and communication gaps during hackathons and engineering sprints with focused, functional tech prototypes."
  }
];

export const skillsData: SkillItem[] = [
  // Programming Languages
  {
    name: "C",
    category: "Languages",
    description: "Foundational low-level systems programming, memory management, pointers, and algorithmic structures.",
    snippet: "#include <stdio.h>\nint main() { printf(\"Efficiency & Systems Logic\\n\"); return 0; }",
    iconName: "Code2"
  },
  {
    name: "C++",
    category: "Languages",
    description: "Object-oriented software development, STL data structures, algorithmic complexity optimization.",
    snippet: "#include <vector>\nstd::vector<int> solve() { return {1, 2, 3}; }",
    iconName: "Binary"
  },
  {
    name: "Python",
    category: "Languages",
    description: "Primary language for data manipulation, machine learning workflows, automation scripts, and backend tools.",
    snippet: "import numpy as np\ndef process_stream(data):\n    return np.mean(data, axis=0)",
    iconName: "FileCode"
  },

  // AI / ML & Automation
  {
    name: "NumPy",
    category: "AI / ML",
    description: "N-dimensional array computation, linear algebra transformations, and high-performance vector math.",
    snippet: "arr = np.array([[1, 2], [3, 4]])\neigenvalues = np.linalg.eigvals(arr)",
    iconName: "Cpu"
  },
  {
    name: "Pandas",
    category: "AI / ML",
    description: "Data analysis, tabular transformation, missing-value imputation, aggregation, and ETL pipelines.",
    snippet: "df = pd.read_csv('metrics.csv')\nclean_df = df.dropna().groupby('category').mean()",
    iconName: "Table"
  },
  {
    name: "Matplotlib",
    category: "AI / ML",
    description: "Data visualization, distribution plots, evaluation curves, correlation heatmaps, and publication graphics.",
    snippet: "plt.plot(epochs, loss, label='Validation Loss')\nplt.xlabel('Epoch'); plt.show()",
    iconName: "BarChart3"
  },
  {
    name: "Scikit-Learn",
    category: "AI / ML",
    description: "Machine learning model training: classification, regression, clustering, model evaluation, and cross-validation.",
    snippet: "from sklearn.ensemble import RandomForestClassifier\nclf = RandomForestClassifier().fit(X_train, y_train)",
    iconName: "Sparkles"
  },
  {
    name: "n8n",
    category: "AI / ML",
    description: "Node-based workflow automation, webhook triggers, multi-service integrations, and autonomous data pipelines.",
    snippet: "// Automated Event Node\nTrigger: Webhook -> Transform: Python -> Action: Database Sync",
    iconName: "Workflow"
  },

  // Database
  {
    name: "SQL",
    category: "Database",
    description: "Relational database schema modeling, complex query joins, indexing, aggregation, and integrity constraints.",
    snippet: "SELECT user_id, COUNT(*) as activity_count\nFROM audit_logs\nGROUP BY user_id\nHAVING activity_count > 10;",
    iconName: "Database"
  },

  // DevOps / Tools
  {
    name: "Docker",
    category: "DevOps & Tools",
    description: "Containerization of full-stack services, Dockerfile crafting, consistent cross-environment runtime deployment.",
    snippet: "FROM python:3.11-slim\nWORKDIR /app\nCOPY requirements.txt .\nCMD [\"python\", \"app.py\"]",
    iconName: "Box"
  },
  {
    name: "GitHub",
    category: "DevOps & Tools",
    description: "Version control, branching strategies, collaborative pull requests, issue tracking, and CI/CD pipelines.",
    snippet: "git checkout -b feat/intelligent-pipeline\ngit commit -m 'feat: optimize tensor processing'\ngit push origin",
    iconName: "GitBranch"
  },
  {
    name: "Power BI",
    category: "DevOps & Tools",
    description: "Interactive executive dashboards, business intelligence reporting, DAX calculations, and KPI tracking.",
    snippet: "DAX: Total Revenue = SUM(Sales[Amount])\nKPI Velocity = DIVIDE([Current], [Baseline], 0)",
    iconName: "PieChart"
  },

  // Soft Skills
  {
    name: "Problem Solving",
    category: "Soft Skills",
    description: "Algorithmic thinking, decomposing ambiguous specifications into solvable modules, debugging root causes.",
    iconName: "Lightbulb"
  },
  {
    name: "Time Management",
    category: "Soft Skills",
    description: "Structured sprint organization, hackathon time-box discipline, balanced academic and engineering commitments.",
    iconName: "Clock"
  }
];

export const projectsData: Project[] = [
  {
    id: "phoenix-ai",
    title: "Phoenix AI",
    tagline: "Multilingual, Multi-Agent AI Education Platform & Personalized Learning Companion",
    focusArea: "AI · EdTech · Multi-Agent Systems",
    category: "AI / EdTech",
    summary: "A multilingual, multi-agent AI education platform designed to help students who face barriers such as missed schooling, language differences, limited access to teachers, poor internet connectivity, and lack of personalized academic support. It acts as a personal AI learning companion that can teach, assess, mentor, translate, and create personalized learning plans.",
    coreQuote: "No child should fall behind because life got in the way.",
    targetAudience: [
      "Students in underserved and rural communities",
      "Students who have missed school and need to catch up",
      "Students facing language barriers (multilingual Indian languages)",
      "Students with limited access to qualified teachers",
      "Students studying with slow or unreliable internet",
      "Parents seeking simple updates about their child's learning progress"
    ],
    problem: "Millions of students in underserved communities fall behind due to missed schooling from health or family circumstances, language barriers where instruction is in an unfamiliar tongue, scarce access to qualified tutors, and spotty internet connectivity.",
    idea: "Phoenix AI is an AI-powered education support system designed around the reality that students can fall behind for reasons beyond academics. A central AI orchestrator coordinates specialized agents (Teacher, Language, Catch-Up, Mentor, Assessment, Parent, Offline Sync) to adapt to each student's pace, native tongue, and curriculum recovery needs.",
    features: [
      "Multi-Agent AI System: Central orchestrator coordinating Teacher, Language, Catch-Up, Mentor, Assessment, and Parent agents",
      "AI Teacher: Personalized explanations, real-world examples, summaries, notes, and voice-based learning tailored to student level",
      "Multilingual Learning: Translates and explains difficult concepts across multiple Indian languages for intuitive comprehension",
      "Catch-Up Mode: Generates personalized academic recovery roadmaps for students who missed days or weeks of school",
      "AI Study Mentor: Adaptive study schedules, daily streak tracking, goal management, and study habit formation",
      "Personalized Assessment: Dynamic quizzes that identify weak topics, calibrate difficulty, and explain mistakes step-by-step",
      "Parent Dashboard: Plain-language progress reports and performance insights requiring no technical or advanced background",
      "Career Guidance & Smart Resources: Maps interests to learning paths, scholarships, and curated free learning materials",
      "Low-Bandwidth & Offline Support: Cached lessons for spotty connectivity with background delta synchronization",
      "Voice Learning & Accessibility: Speech-based interaction, high contrast, and keyboard navigation"
    ],
    techStack: ["Python", "Multi-Agent Architecture", "NLP & Indian Language Models", "React", "Node.js", "SQL", "Voice TTS/STT", "PWA Offline Cache"],
    developmentHighlights: [
      "Designed central agent orchestrator routing queries dynamically across Teacher, Assessment, and Language agents",
      "Constructed Catch-Up Mode roadmap generator prioritizing high-weightage foundation concepts",
      "Implemented resilient offline caching mechanism allowing uninterrupted learning under poor internet",
      "Built simplified Parent Digest generator translating academic metrics into clear, non-technical updates"
    ],
    outcome: "Created a scalable, compassionate AI education platform ensuring students can catch up, master concepts in their native languages, and receive personalized mentorship regardless of socioeconomic or geographic constraints.",
    githubUrl: "https://github.com/dsy404/phoenix-ai",
    accentColor: "#2563eb"
  },
  {
    id: "genzify",
    title: "GenZify",
    tagline: "Creative Contextual Language Transformer & Slang Engine",
    focusArea: "Creative Web · NLP · Interactive UX",
    category: "Creative Web / NLP",
    summary: "A modern, creative web app that transforms traditional, formal, or mundane text into dynamic Gen-Z internet slang, authentic vernacular, and culturally relevant communication.",
    problem: "Traditional communications and formal messages often feel rigid and disconnected from modern digital culture, while manual slang translation lacks contextual tone awareness.",
    idea: "GenZify bridges generational communication styles with an interactive, responsive web experience that detects sentence intent, applies linguistic rule mappings, and modulates slang intensity on the fly.",
    features: [
      "Multi-level Slang Intensity Controller (Casual Chill, Peak Gen-Z, Unhinged Turbo Mode)",
      "Instant real-time bidirectional translation with zero reload latency",
      "One-click copy to clipboard with instant toast confirmation",
      "Curated phrase presets: Corporate Email to Slack, Academic Paper to Viral Review, Formal Apology to Real Talk",
      "Interactive glossary explaining terms like 'no cap', 'locked in', 'delulu', 'rizz', and 'rent free'",
      "Responsive, sleek dark interface designed with accessible contrast and micro-interactions"
    ],
    techStack: ["JavaScript", "React", "Node.js", "Express.js", "Tailwind CSS", "NLP Rule Dictionaries"],
    developmentHighlights: [
      "Designed a token-based sentiment and idiom replacement engine preserving original sentence meaning",
      "Implemented responsive state architecture with instant preview and micro-animation feedback",
      "Crafted an interactive playground allowing immediate text experimentation directly in the browser",
      "Built resilient error handling and boundary tests across edge-case grammatical punctuation"
    ],
    outcome: "Built a viral, memorable web tool that combines creative humor with robust frontend engineering, loved by peers and showcasing creative full-stack development capability.",
    githubUrl: "https://github.com/dsy404/genzify",
    demoUrl: "#genzify-live-demo",
    accentColor: "#38bdf8"
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "gssoc-2026",
    role: "Open Source Contributor",
    organization: "GirlScript Summer of Code (GSSoC 2026)",
    period: "2026",
    location: "Remote / Open Source",
    type: "Open Source",
    description: "Active contributor to open-source software repositories under the GirlScript Foundation banner, working alongside maintainers and peer developers to enhance production software.",
    keyContributions: [
      "Collaborated on real-world repositories to fix bugs, optimize component rendering, and improve UI usability",
      "Submitted well-documented Pull Requests adhering strictly to contributing guidelines and coding standards",
      "Engaged in constructive code reviews, incorporating maintainer feedback to refine implementation quality",
      "Assisted in structuring project documentation and modular utility scripts for newcomer onboarding"
    ],
    technologies: ["Git", "GitHub", "JavaScript", "React", "Python", "Open Source Workflow"],
    link: "https://gssoc.girlscript.tech"
  },
  {
    id: "oss-community",
    role: "Community Developer & Open Source Enthusiast",
    organization: "Global Developer Communities & GitHub",
    period: "2025 – Present",
    location: "Global / Remote",
    type: "Open Source",
    description: "Continuous involvement in open-source developer ecosystems, exploring diverse codebases, submitting patches, and building public developer tools.",
    keyContributions: [
      "Actively maintaining personal public repositories on GitHub (dsy404) with clear documentation and tests",
      "Exploring open-source AI tooling, data science notebooks, and automation workflow libraries",
      "Participating in developer discussions, issue triage, and collaborative problem-solving"
    ],
    technologies: ["GitHub", "Python", "SQL", "Docker", "Markdown", "Issue Triage"]
  }
];

export const hackathonsData: HackathonItem[] = [
  {
    id: "et-ai-hackathon",
    title: "ET AI Hackathon",
    organizer: "Economic Times (ET) India & Hack2Skill",
    date: "2025 – 2026",
    category: "National Level AI Hackathon",
    summary: "A premier national-level hackathon uniting emerging engineers and developers to architect impactful AI-driven solutions addressing real enterprise and societal problem statements.",
    learnings: [
      "Formulated AI-first problem solving methodologies under intense time constraints",
      "Coordinated cross-functional teamwork, delegating modules between logic, data preparation, and presentation",
      "Delivered a rapid working prototype demonstrating end-to-end feasibility and technical clarity",
      "Gained deep appreciation for production-readiness, error resilience, and user experience in AI products"
    ],
    skillsApplied: ["Artificial Intelligence", "Machine Learning", "Rapid Prototyping", "Team Collaboration", "Pitching Technical Solutions"]
  },
  {
    id: "srmcem-tech-activities",
    title: "College Technical Events & Hackathons",
    organizer: "Shri Ram Swaroop Memorial College of Engineering and Management (SRMCEM)",
    date: "2024 – Present",
    category: "Campus & Inter-College Competitions",
    summary: "Active participant in campus hackathons, coding contests, and hands-on developer workshops hosted by the Department of Computer Science & Engineering.",
    learnings: [
      "Honed speed in algorithmic problem solving and modular software structuring",
      "Participated in workshops covering modern web frameworks, data analysis with Python, and cloud tools",
      "Networked with ambitious peers to exchange best engineering practices and collaborative project ideas"
    ],
    skillsApplied: ["C++ Algorithms", "Full-Stack Development", "Problem Solving", "Time Management", "Hands-on Workshops"]
  }
];

export const educationData = {
  degree: "Bachelor of Technology (B.Tech)",
  major: "Computer Science and Engineering",
  institution: "Shri Ram Swaroop Memorial College of Engineering and Management",
  institutionShort: "SRMCEM, Lucknow",
  affiliation: "Affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
  currentStanding: "2nd Year Undergraduate",
  graduationYear: "2029",
  location: "Lucknow, Uttar Pradesh, India",
  highlights: [
    "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming (C++), Database Management Systems (SQL), Operating Systems, Discrete Mathematics",
    "Active participant in technical club initiatives, algorithmic coding challenges, and innovation hackathons",
    "Self-directed project learning in full-stack web engineering, Python data science libraries, and workflow automation",
    "Continuous growth mindset dedicated to writing clean, maintainable software and building real-world digital solutions"
  ]
};

export const servicesData = [
  {
    id: "full-stack",
    title: "Full-Stack Web Development",
    subtitle: "End-to-End Modern Web Engineering",
    description: "Creating responsive, performant, and intuitive web applications from component-driven user interfaces to backend REST APIs and persistent database schemas.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Express.js", "SQL", "Tailwind CSS"],
    capabilities: [
      "Responsive, mobile-first web applications with accessible design",
      "Interactive single-page applications (SPAs) with state management",
      "RESTful API design and backend endpoint integration",
      "Relational database modeling, SQL queries, and data integrity",
      "Clean code architecture, modular components, and git-tracked workflows"
    ],
    accent: "from-blue-600/20 to-indigo-600/20",
    borderAccent: "border-blue-500/30"
  },
  {
    id: "open-source",
    title: "Open Source Contribution",
    subtitle: "Collaborative Software & Community Impact",
    description: "Actively contributing to open-source ecosystems, collaborating with worldwide developers, and improving codebase reliability through peer reviews and quality pull requests.",
    technologies: ["Git", "GitHub", "Pull Request Reviews", "Issue Tracking", "Documentation", "GSSoC 2026"],
    capabilities: [
      "Reading and understanding complex, pre-existing codebases quickly",
      "Writing clear, reproducible issue reports and actionable bug fixes",
      "Adhering to community coding guidelines and style standards",
      "Collaborative teamwork in programs like GirlScript Summer of Code",
      "Iterative improvements to project documentation and developer setup"
    ],
    accent: "from-sky-600/20 to-blue-600/20",
    borderAccent: "border-sky-500/30"
  }
];
