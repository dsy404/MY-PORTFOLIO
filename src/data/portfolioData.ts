import { Project, SkillItem, ExperienceItem, HackathonItem, ResumeData, CertificateItem } from '../types/portfolio';

export const personalInfo = {
  name: "Deepshikha Yadav",
  title: "B.Tech CSE Student · Full-Stack Developer · AI Enthusiast · Open Source Contributor",
  bio: "I build web and AI-powered solutions, explore emerging technologies, contribute to open source, and love turning real-world problems into practical digital experiences.",
  college: "Shri Ram Swaroop Memorial College of Engineering and Management",
  collegeShort: "SRMCEM, Lucknow",
  degree: "B.Tech in Computer Science and Engineering",
  currentYear: "2nd Year",
  graduationYear: "2029",
  cgpa: "7.75/10 (1st Year)",
  location: "Lucknow, Uttar Pradesh, India",
  email: "dy.deepshikha04aug@gmail.com",
  github: "https://github.com/dsy404",
  githubUsername: "dsy404",
  secondaryGithub: "https://github.com/dsy404",
  linkedin: "https://www.linkedin.com/in/deepshikha-yadav-586b723b6",
  linkedinName: "deepshikha-yadav-586b723b6",
  phone: "9369534593",
  objective: "Second-year B.Tech Computer Science student passionate about building reliable, user-focused AI applications, with hands-on experience developing LLM-powered agents, multi-agent orchestration (LangGraph), and Retrieval-Augmented Generation (RAG) systems.",
  stats: [
    { label: "Graduation Cohort", value: "2029" },
    { label: "Academic CGPA", value: "7.75 / 10" },
    { label: "Current Standing", value: "2nd Year B.Tech" },
    { label: "Open Source Role", value: "GSSoC '26 Contributor" }
  ]
};

export const aboutPillars = [
  {
    number: "01",
    title: "Build",
    subtitle: "Creating practical web and AI solutions",
    description: "Designing end-to-end applications from intuitive web frontends to robust Python backends and AI workflows, with a strong emphasis on clean code and reliable performance."
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
    description: "Visual workflow automation, webhook triggers, multi-service integrations, and autonomous data pipelines.",
    snippet: "// Automated Event Flow\nTrigger: Webhook -> Transform: Python -> Action: Database Sync",
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
    techStack: ["Python", "Multi-Agent Architecture", "NLP & Indian Language Models", "SQL", "Voice TTS/STT", "PWA Offline Cache"],
    developmentHighlights: [
      "Designed central agent orchestrator routing queries dynamically across Teacher, Assessment, and Language agents",
      "Constructed Catch-Up Mode roadmap generator prioritizing high-weightage foundation concepts",
      "Implemented resilient offline caching mechanism allowing uninterrupted learning under poor internet",
      "Built simplified Parent Digest generator translating academic metrics into clear, non-technical updates"
    ],
    outcome: "Created a scalable, compassionate AI education platform ensuring students can catch up, master concepts in their native languages, and receive personalized mentorship regardless of socioeconomic or geographic constraints.",
    githubUrl: "https://github.com/dsy404/Phoenix-AI",
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
    techStack: ["JavaScript", "HTML5 & CSS3", "Tailwind CSS", "NLP Rule Dictionaries", "Web APIs"],
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
  },
  {
    id: "heart-disease-prediction",
    title: "Heart Disease Prediction",
    tagline: "Binary Classification & Clinical Risk Assessment with Logistic Regression",
    focusArea: "Machine Learning · Healthcare · Scikit-Learn",
    category: "Machine Learning / Healthcare",
    summary: "A practical Machine Learning classification project that predicts whether a patient is likely to have heart disease based on medical attributes including age, resting blood pressure, cholesterol, max heart rate, and exercise-induced angina.",
    coreQuote: "Predictive health insights through statistical machine learning and data-driven risk assessment.",
    targetAudience: [
      "Healthcare data researchers & informatics students",
      "Preventive cardiology screening exploration",
      "Developers learning end-to-end classification pipelines",
      "Patients seeking educational cardiovascular risk awareness"
    ],
    problem: "Early detection of cardiac risk factors is vital for preventive cardiology, but complex multi-dimensional health metrics (blood pressure, cholesterol, ST depression) require quantitative synthesis to detect risk patterns reliably.",
    idea: "Trained a Scikit-Learn Logistic Regression binary classification model on a 205-patient clinical dataset, mapping multi-dimensional medical parameters into a calibrated probability of heart disease likelihood (Class 0: No Disease vs Class 1: Disease).",
    features: [
      "Complete end-to-end ML workflow: data loading, cleaning, categorical encoding, EDA, model training, and prediction",
      "Missing data imputation handling numerical values with mean and categorical attributes with mode",
      "Categorical feature encoding for sex, chest pain type, fasting blood sugar, resting ECG, and exercise angina",
      "Exploratory Data Analysis with Matplotlib: age distributions, cholesterol histograms, and correlation heatmaps",
      "80/20 train-test data partitioning evaluating model generalization on unseen patient health records",
      "Interactive prediction module accepting user patient inputs to generate direct classification output"
    ],
    techStack: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Jupyter Notebook", "Logistic Regression"],
    developmentHighlights: [
      "Cleaned and preprocessed a 205-record patient dataset, handling missing values and verifying zero duplicate records",
      "Converted categorical medical parameters into numerical feature vectors ready for classification modeling",
      "Plotted exploratory visualizations including feature distributions and correlation heatmaps using Matplotlib",
      "Trained a Scikit-Learn Logistic Regression classifier separating binary classes with a clear decision boundary"
    ],
    outcome: "Successfully implemented a complete, transparent machine learning classification pipeline from raw tabular data ingestion to exploratory visualization, model evaluation, and patient risk prediction.",
    githubUrl: "https://github.com/dsy404/Heart_Disease_Prediction",
    accentColor: "#e11d48"
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
    technologies: ["Git", "GitHub", "JavaScript", "Python", "Open Source Workflow"],
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

export const certificatesData: CertificateItem[] = [
  // 1. TOP: Google Solution Challenge 2026
  {
    id: "google-solution-challenge-2026",
    title: "Solution Challenge 2026: Build with AI",
    issuer: "Google / Build with AI (Powered by H2S)",
    date: "22/07/2026",
    category: "Cloud & Global Hackathons",
    credentialId: "2026H2SO7SCBWAI-PS09169",
    instructorOrSignatory: "Build with AI & Hack2Skill Global Jury",
    description: "Awarded in recognition of successful prototype submission for Solution Challenge 2026: Build with AI and contribution to the spirit of innovation and problem-solving.",
    skills: ["AI Prototyping", "Google Cloud", "Build with AI", "Responsible AI", "Innovation"],
    verificationUrl: "https://developers.google.com/community/gdsc-solution-challenge",
    status: "Honors",
    badgeColor: "purple",
    platform: "Build with AI / H2S"
  },

  // 2. 2ND: ELUSOC (Summer of Code 2026 - Rank 63)
  {
    id: "elusoc-2026-rank-63",
    title: "ELUSOC 2026 — Summer of Code (Rank 63)",
    issuer: "EduLinkUp / ELUSOC (Hosted on Unstop)",
    date: "September 4, 2026",
    category: "Open Source & Web",
    credentialId: "ELUSOC-2026-CON-063",
    instructorOrSignatory: "EduLinkUp Digital Records & Open Source Board",
    rank: "Rank 63",
    description: "Awarded to Deepshikha Yadav as Contributor with Achievement Tier: Rank 63 in ELUSOC 2026 (Summer of Code organized by EduLinkUp). Authenticity confirmed against official digital records.",
    skills: ["Open Source", "Competitive Coding", "Git / GitHub", "Web Architecture", "Code Contribution"],
    verificationUrl: "https://unstop.com",
    status: "Honors",
    badgeColor: "amber",
    platform: "Unstop / EduLinkUp"
  },

  // 3. 3RD: CodeBlitz 2.0
  {
    id: "codeblitz-2026",
    title: "CodeBlitz 2.0",
    issuer: "Craftora & OSEN (Powered by ElevenLabs, Vakh, LPPGC)",
    date: "October 3, 2026",
    category: "Cloud & Global Hackathons",
    credentialId: "Z2GH-MN3B-9PRE-PZFF",
    instructorOrSignatory: "Vikash Kumar Yadav (Founder, OSEN) & Aryan Pandey (Programme Manager, OSEN)",
    description: "Presented to Deepshikha Yadav for participating in CodeBlitz 2.0 in recognition of dedication, creativity, collaboration, and contribution throughout the event.",
    skills: ["Full-Stack Engineering", "ElevenLabs Voice AI", "Collaboration", "Rapid Development", "Creativity"],
    verificationUrl: "https://craftora.tech/verify/Z2GH-MN3B-9PRE-PZFF",
    status: "Verified",
    badgeColor: "pink",
    platform: "Craftora / OSEN"
  },

  // 4. 4TH: Microsoft & EY AI Skills Passport
  {
    id: "ey-microsoft-ai-skills",
    title: "AI Skills Passport",
    issuer: "EY & Microsoft",
    date: "2026",
    category: "AI & Machine Learning",
    credentialId: "EY-MSFT-AIPASS-DY2026",
    instructorOrSignatory: "EY & Microsoft Global Learning Accreditation",
    description: "Successfully completed the AI Skills Passport course offered by EY and Microsoft, covering general AI foundations, employability, sustainability, business & technology.",
    skills: ["Generative AI", "Microsoft AI", "Prompt Engineering", "Responsible AI", "Enterprise Technology"],
    verificationUrl: "https://learn.microsoft.com",
    status: "Verified",
    badgeColor: "purple",
    platform: "Microsoft Learn / EY"
  },

  // 5. 5TH: Kaggle & Google 5-Day AI Agents
  {
    id: "kaggle-google-ai-agents",
    title: "5-Day AI Agents: Intensive Vibe Coding Course",
    issuer: "Kaggle & Google",
    date: "July 30, 2026",
    category: "AI & Machine Learning",
    credentialId: "KAGGLE-GOOGLE-AI-AGENTS-2026",
    instructorOrSignatory: "Kaggle & Google AI Education Teams",
    description: "Successfully earned the official badge for completing the intensive 5-Day AI Agents: Intensive Vibe Coding Course exploring autonomous agents, multi-agent workflows, and prompt engineering.",
    skills: ["AI Agents", "Multi-Agent Systems", "Google Gemini API", "Kaggle Notebooks", "Vibe Coding"],
    verificationUrl: "https://www.kaggle.com/learn",
    status: "Honors",
    badgeColor: "purple",
    platform: "Kaggle / Google"
  },

  // 6. Coderush 2.0 Hackathon (BBDNIIT)
  {
    id: "coderush-2026",
    title: "Coderush 2.0 Hackathon",
    issuer: "BBDNIIT (AICTE, NBA, CSI, GeeksforGeeks)",
    date: "13th April, 2026",
    category: "Cloud & Global Hackathons",
    credentialId: "CODER-PK7NCB",
    instructorOrSignatory: "Dr. Anurag Srivastava (HOD), Dr. Laxmi Vajpeyi (IIC President), Dr. VK Singh (Director Engineering)",
    description: "Successfully participated in Coderush 2.0 Hackathon organized by BBDNIIT. Commended for enthusiasm, dedication, and innovative spirit.",
    skills: ["Hackathon Prototyping", "CSI & GfK Problem Solving", "Algorithms", "Software Engineering"],
    verificationUrl: "https://bbdniit.ac.in",
    status: "Verified",
    badgeColor: "amber",
    platform: "BBDNIIT / CSI"
  },

  // 7. AttentionX AI Hackathon (UnsaidTalks)
  {
    id: "attentionx-ai-hackathon",
    title: "AttentionX AI Hackathon",
    issuer: "UnsaidTalks Education Pvt. Ltd.",
    date: "18/04/2026",
    category: "Cloud & Global Hackathons",
    credentialId: "UT-ATTNX-AIHACK-2026",
    instructorOrSignatory: "Raghav Chopra (Founder, CEO UnsaidTalks Education Pvt. Ltd.)",
    description: "Successfully attended and participated in the AttentionX AI Hackathon conducted by UnsaidTalks Education, tackling artificial intelligence innovation challenges.",
    skills: ["Artificial Intelligence", "Attention Mechanisms", "Prototyping", "Pitching"],
    verificationUrl: "https://unsaidtalks.com",
    status: "Verified",
    badgeColor: "amber",
    platform: "UnsaidTalks"
  },

  // 8. Adivya 2.0 - Developer Hackathon (Enginow)
  {
    id: "adivya-2026-hackathon",
    title: "Adivya 2.0 — Developer Hackathon",
    issuer: "Enginow",
    date: "2026",
    category: "Cloud & Global Hackathons",
    credentialId: "ENGINOW-ADIVYA-2-TEAM-DY",
    instructorOrSignatory: "Enginow Developer Hackathon Organizing Committee",
    description: "Certified for participating in Adivya 2.0 - Developer Hackathon organized by Enginow as Team dy.deepshikha04aug from SRMCEM.",
    skills: ["Full-Stack Prototyping", "Developer Tooling", "Team Coordination", "Rapid Hackathon Sprints"],
    verificationUrl: "https://enginow.in",
    status: "Verified",
    badgeColor: "pink",
    platform: "Enginow"
  },

  // 9. CodeStrike 2026 (Bytebattle Global Community & Unstop)
  {
    id: "codestrike-2026",
    title: "CodeStrike 2026 — Official Coding Championship",
    issuer: "Bytebattle Global Community (Hosted on Unstop)",
    date: "2026",
    category: "Cloud & Global Hackathons",
    credentialId: "UNSTOP-CODESTRIKE-SRMCEM-2026",
    instructorOrSignatory: "Bytebattle Global Community & Unstop Jury",
    description: "Represented SRMCEM and participated in CodeStrike 2026 — Official Coding Championship organized by Bytebattle Global Community.",
    skills: ["Competitive Programming", "Data Structures", "Speed Coding", "Algorithmic Analysis"],
    verificationUrl: "https://unstop.com",
    status: "Verified",
    badgeColor: "purple",
    platform: "Unstop / Bytebattle"
  },

  // 10. Tech Talk: Generative AI and LLMs (CSI SRMCEM x D'CODERS)
  {
    id: "srmcem-genai-llm-techtalk",
    title: "Tech Talk: Generative AI & Large Language Models",
    issuer: "CSI_SRMCEM × D'CODERS & Dept of CSE, SRMCEM",
    date: "13th November 2025",
    category: "Academic & Specialization",
    credentialId: "SRMCEM-CSI-DCODERS-LLM-2025",
    instructorOrSignatory: "Dr. Sandeep Dubey (HOD AIML & DS), Dr. Pankaj Kumar (HOD CSE), Er. Akhil Pandey (IIC President)",
    description: "Actively participated in Tech Talk with guest speaker Arjit Verma, showcasing enthusiasm and interest in Generative AI, LLMs, and real-world AI applications.",
    skills: ["Generative AI", "Large Language Models (LLMs)", "Deep Learning", "Applied AI Architecture"],
    verificationUrl: "https://srmcem.ac.in",
    status: "Completed",
    badgeColor: "pink",
    platform: "SRMCEM / CSI / IIC"
  },

  // 11. QuizOff 2026: India's Biggest AI Quiz (CampusCrew & Unstop)
  {
    id: "quizoff-2026-ai-quiz",
    title: "QuizOff 2026: India's Biggest AI Quiz",
    issuer: "CampusCrew (Hosted on Unstop)",
    date: "19-JULY-2026",
    category: "AI & Machine Learning",
    credentialId: "QUIZOFF-2026-CC-UNSTOP-DY",
    instructorOrSignatory: "Aaradhya Gupta (Founder, CampusCrew)",
    description: "Recognized among select students who competed in QuizOff 2026: India's Biggest AI Quiz where 5,25,000+ students from 48,500+ institutions across 35+ countries participated.",
    skills: ["AI Fundamentals", "Machine Learning Theory", "Global Competitive AI Quiz", "Speed Assessment"],
    verificationUrl: "https://unstop.com",
    status: "Verified",
    badgeColor: "purple",
    platform: "Unstop / CampusCrew"
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
    technologies: ["HTML5", "CSS3", "JavaScript", "Python", "SQL", "Tailwind CSS", "RESTful APIs"],
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

export const resumeData: ResumeData = {
  name: "DEEPSHIKHA YADAV",
  location: "Lucknow, Uttar Pradesh",
  phone: "9369534593",
  email: "dy.deepshikha04aug@gmail.com",
  linkedin: "linkedin.com/in/deepshikha-yadav-586b723b6",
  linkedinUrl: "https://www.linkedin.com/in/deepshikha-yadav-586b723b6",
  github: "github.com/dsy404",
  githubUrl: "https://github.com/dsy404",
  objective: "Second-year B.Tech Computer Science student passionate about building reliable, user-focused AI applications, with hands-on experience developing LLM-powered agents, multi-agent orchestration (LangGraph), and Retrieval-Augmented Generation (RAG) systems. Strong foundation in Python, C++, and full-stack development, demonstrated through independent projects on reinforcement learning environments, responsible AI, and accessible education technology. Seeking a Software Engineering/AI internship at OpenAI to contribute to safe, impactful AI systems while learning from world-class researchers and engineers.",
  education: {
    institution: "Shri Ramswaroop Memorial College of Engineering and Management",
    expectedGraduation: "2029",
    degree: "B.Tech in Computer Science and Engineering",
    cgpa: "7.75/10 (1st Year)",
    standing: "Currently in 2nd Year"
  },
  technicalSkills: [
    {
      category: "Languages",
      skills: ["Python", "C++"]
    },
    {
      category: "AI/ML & Agents",
      skills: ["LLMs", "RAG", "AI Agents", "LangGraph", "Prompt Engineering", "Reinforcement Learning", "Scikit-learn"]
    },
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "HTML", "CSS"]
    },
    {
      category: "Backend & APIs",
      skills: ["Node.js", "FastAPI", "REST APIs"]
    },
    {
      category: "Libraries & Data",
      skills: ["NumPy", "Pandas", "Matplotlib", "ChromaDB (Vector DB)"]
    },
    {
      category: "Tools & DevOps",
      skills: ["Docker", "n8n", "Git/GitHub", "VS Code", "Jupyter Notebook", "Windows"]
    }
  ],
  projects: [
    {
      title: "AI Customer Support Training Environment",
      techStack: "Python, Docker, FastAPI, OpenEnv",
      githubUrl: "https://github.com/dsy404/openenv-project",
      highlights: [
        "Built an OpenEnv-compliant reinforcement learning environment that trains AI agents to resolve multi-turn customer support issues, from issue classification to full resolution",
        "Designed step-by-step, rule-based reward functions (issue identification, clarification, resolution) achieving a full 1.0 episode reward on sample multi-turn scenarios",
        "Simulated diverse, realistic customer scenarios for reproducible, gym-style agent training and evaluation",
        "Solo-built for a hackathon; used Claude to accelerate code generation and environment architecture"
      ]
    },
    {
      title: "Phoenix AI — Multi-Agent Education Platform",
      techStack: "Next.js, TypeScript, FastAPI, LangGraph, OpenAI/Gemini API, ChromaDB",
      githubUrl: "https://github.com/dsy404/Phoenix-AI",
      highlights: [
        "Architected a LangGraph-powered orchestrator that routes student queries across 10 specialized AI agents (teaching, translation, mentoring, assessment, emotional support, offline sync) for underserved learners",
        "Solved offline access for low-bandwidth (2G) regions by implementing lesson caching, ensuring learning continuity without stable internet",
        "Integrated RAG-based resource recommendations and Whisper/ElevenLabs voice pipelines for multilingual support across 7+ regional languages",
        "Solo-built as capstone project for Google's 5-day AI Intensive Vibe Coding Program"
      ]
    },
    {
      title: "FAIRTRACE-AI — AI Fairness Analysis Platform",
      techStack: "React, FastAPI, Scikit-learn, AIF360, SHAP/LIME",
      githubUrl: "https://github.com/dsy404/FAIRTRACE-AI",
      highlights: [
        "Built an AI fairness evaluation platform that detects and explains demographic bias in ML models using metrics such as Statistical Parity Difference and Disparate Impact",
        "Implemented explainable AI dashboards (SHAP/LIME) and automated bias-mitigation recommendations to support trustworthy AI deployment in hiring, healthcare, and finance",
        "Developed for Google Solution Challenge 2026 under the UN SDG-aligned \"Responsible & Ethical AI for Social Impact\" track"
      ]
    }
  ],
  trainingPrograms: [
    {
      title: "AI/ML Training Program",
      institution: "Shri Ramswaroop Memorial College of Engineering and Management",
      period: "Jul 2026 (2 weeks)",
      highlights: [
        "Completed hands-on training in Python, NumPy, Pandas, Matplotlib, Scikit-learn, reinforcement learning, and classification algorithms (logistic regression, decision trees, KNN, random forest)",
        "Built capstone project Heart Disease Prediction — a logistic regression classifier predicting heart disease risk from patient medical records (github.com/dsy404/Heart_Disease_Prediction)"
      ]
    }
  ],
  openSource: [
    {
      program: "GirlScript Summer of Code 2026",
      contributions: [
        "Contributed 2 web projects to the 100_days_100_web_project repository and resolved bugs in the Pizza-Customization-Web-App repository (~5 pull requests)"
      ]
    }
  ],
  certifications: [
    {
      name: "Google Solution Challenge 2026 — Participation Certificate",
      date: "Jul 2026"
    },
    {
      name: "Microsoft AI Skills Certification",
      date: "Jun 2026"
    }
  ]
};
