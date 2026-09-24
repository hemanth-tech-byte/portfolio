import { Project, SkillCategoryGroup, ContentPost, Milestone } from '../types';

export const PERSONAL_INFO = {
  name: 'HEMANTH MAMIDI',
  title: 'CSE FINAL YEAR STUDENT • TECH INFLUENCER',
  degree: 'Bachelor of Technology in Computer Science & Engineering',
  status: 'Final Year Student (Class of 2026)',
  bio: 'I build modern web applications, explore AI and machine learning, and share technology knowledge through content. Passionate about problem-solving, continuous learning, and creating useful digital experiences.',
  email: 'hemanthmamidi.dev@gmail.com',
  mobile: '7702567325',
  location: 'Hyderabad, India',
  availability: 'Open for Campus Placements, Full-Time Software Roles & Internships',
  github: 'https://github.com/hemanth-tech-byte',
  linkedin: 'https://www.linkedin.com/in/hemanth-mamidi-a8a74a377/',
  twitter: 'https://x.com/hemanth_tech',
  youtube: 'https://youtube.com/@hemanthmamidi_tech',
};

export const FEATURE_CARDS = [
  {
    id: 'full-stack',
    title: 'FULL STACK DEVELOPMENT',
    description: 'Modern web applications using React, Node.js, JavaScript, HTML and CSS.',
    icon: 'code',
    primarySkill: 'React • Node.js',
    detail: 'Responsive SPAs, modular UI components, robust REST backends, and performance optimization.',
  },
  {
    id: 'ai-data',
    title: 'AI & DATA',
    description: 'Machine learning, data analysis, Python, Pandas, NumPy, SQL and AI fundamentals.',
    icon: 'sparkles',
    primarySkill: 'Python • Machine Learning',
    detail: 'Predictive modeling, regression, data preprocessing, clustering, and prompt engineering.',
  },
  {
    id: 'problem-solving',
    title: 'PROBLEM SOLVING',
    description: 'Data structures, algorithms, databases, REST APIs and logical problem solving.',
    icon: 'cpu',
    primarySkill: 'DSA • Algorithms',
    detail: 'Optimized algorithmic reasoning, array manipulation, tree/graph traversals, and scalable schema design.',
  },
];

export const TECHNOLOGIES_BAR = [
  'Python',
  'Java',
  'React',
  'Node.js',
  'MySQL',
  'MongoDB',
  'Git',
  'GitHub',
  'Google Cloud',
];

export const TECHNICAL_SKILLS: SkillCategoryGroup[] = [
  {
    id: 'prog-languages',
    title: 'PROGRAMMING LANGUAGES',
    skills: ['Python', 'Java'],
    iconName: 'terminal',
    description: 'Strong foundation in object-oriented programming, scripting, memory management, and asynchronous operations.',
  },
  {
    id: 'dsa',
    title: 'DATA STRUCTURES & ALGORITHMS',
    skills: ['Arrays', 'Trees', 'Graphs', 'Sorting', 'Searching'],
    iconName: 'binary',
    description: 'Algorithmic problem-solving with time/space complexity optimization; 500+ coding challenges solved.',
  },
  {
    id: 'databases',
    title: 'DATABASES',
    skills: ['MySQL', 'MongoDB', 'DBMS'],
    iconName: 'database',
    description: 'Relational query design, normalization, indexing, ACID transactions, and document-based NoSQL stores.',
  },
  {
    id: 'web-dev',
    title: 'WEB DEVELOPMENT',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    iconName: 'layout',
    description: 'Modern full-stack web applications with responsive design, state management, and asynchronous data fetching.',
  },
  {
    id: 'cloud',
    title: 'CLOUD',
    skills: ['Google Cloud'],
    iconName: 'cloud',
    description: 'Deploying web services, cloud storage buckets, serverless functions, and scalable containerized workloads.',
  },
  {
    id: 'version-control',
    title: 'VERSION CONTROL',
    skills: ['Git', 'GitHub', 'Branches', 'Pull Requests', 'Merges'],
    iconName: 'git-branch',
    description: 'Collaborative software development workflows, feature branching, clean commit history, and code reviews.',
  },
  {
    id: 'apis',
    title: 'APIS',
    skills: ['REST APIs'],
    iconName: 'network',
    description: 'RESTful API architecture, endpoint design, authentication headers, error handling, and payload validation.',
  },
  {
    id: 'ai-ml',
    title: 'AI / ML',
    skills: ['Regression', 'Classification', 'Clustering'],
    iconName: 'sparkles',
    description: 'Supervised and unsupervised learning models, feature engineering, loss evaluation, and model validation.',
  },
  {
    id: 'data-analysis',
    title: 'DATA ANALYSIS',
    skills: ['Excel', 'SQL', 'Pandas', 'NumPy'],
    iconName: 'bar-chart-3',
    description: 'Data wrangling, statistical summarization, exploratory data analysis (EDA), and data visual reporting.',
  },
  {
    id: 'ai-literacy',
    title: 'AI LITERACY',
    skills: ['Prompt Engineering', 'AI Fundamentals'],
    iconName: 'brain',
    description: 'LLM orchestration, structured prompt chaining, few-shot prompting, and grounding with modern AI models.',
  },
  {
    id: 'professional-skills',
    title: 'PROFESSIONAL SKILLS',
    skills: [
      'Problem Solving',
      'Logical Thinking',
      'Communication',
      'Documentation',
      'Teamwork',
      'Adaptability',
      'Agile Methodology',
      'Code Reviews',
    ],
    iconName: 'users',
    description: 'Effective cross-functional collaboration, technical writing, fast learning curve, and structured communication.',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'doctor-hospital',
    title: "Doctor's Hospital Website",
    category: 'Full Stack',
    subtitle: 'Comprehensive Healthcare Portal & Patient Appointment System',
    description:
      'A full-stack clinical healthcare management portal allowing patients to browse medical departments, book doctor consultations, and view medical services seamlessly.',
    longDescription:
      "Engineered an intuitive, responsive hospital web application tailored for real-time patient appointment booking, doctor schedules, department directories, and emergency contact accessibility. Built with clean component modularity, patient form validation, and responsive mobile-first design.",
    technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Node.js', 'REST APIs', 'Git'],
    features: [
      'Interactive doctor specialist directory with department-based filtering (Cardiology, Neurology, Pediatrics, etc.)',
      'Automated patient appointment booking form with instant schedule validation',
      'Emergency hotline quick-dial access and clinic hours schedule dashboard',
      'Clean accessible layout optimized across mobile, tablet, and desktop viewports',
    ],
    githubUrl: 'https://github.com/hemanth-tech-byte',
    liveUrl: 'https://github.com/hemanth-tech-byte',
    metrics: 'Seamless booking flow · 100% responsive UI',
    architectureHighlights: [
      'Modular React component hierarchy separating appointment flows from static hospital services',
      'Client-side form sanitization and dynamic date-time appointment scheduling',
    ],
  },
  {
    id: 'lycas-bike-rental',
    title: 'Lycas Bike Rental',
    category: 'Full Stack',
    subtitle: 'Two-Wheeler Rental Booking Platform & Fleet Management',
    description:
      'An end-to-end bike rental web application featuring vehicle catalogue exploration, hourly/daily booking calculations, and availability tracking.',
    longDescription:
      'Developed Lycas Bike Rental to simplify urban commute vehicle rentals. Users can filter through scooters, sportbikes, and cruisers, check real-time availability, calculate rental tariffs by duration, and reserve rides with booking summaries.',
    technologies: ['React', 'Node.js', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'MongoDB'],
    features: [
      'Fleet catalogue with dynamic pricing calculators for hourly, daily, and weekend tariffs',
      'Instant reservation confirmation with pickup & drop-off date-time pickers',
      'Vehicle specs showcase (mileage, engine cc, fuel type, helmet add-on options)',
      'Responsive checkout summary and user reservation status',
    ],
    githubUrl: 'https://github.com/hemanth-tech-byte',
    liveUrl: 'https://github.com/hemanth-tech-byte',
    metrics: 'Dynamic tariff calculation · Instant checkout flow',
    architectureHighlights: [
      'Custom tariff calculation engine factoring in duration and bike tier specifications',
      'State-managed reservation workflow with persistent cart caching',
    ],
  },
  {
    id: 'student-performance',
    title: 'Student Performance Analysis',
    category: 'AI & Data',
    subtitle: 'Educational Machine Learning & Predictive Analytics Dashboard',
    description:
      'Data analysis and predictive modeling pipeline to evaluate student academic metrics, attendance, study patterns, and exam outcomes.',
    longDescription:
      'Leveraged Python, Pandas, NumPy, and Scikit-Learn to analyze historical student academic datasets. Identifies critical factors impacting grade distributions (study hours, parent education, attendance rates) and trains regression models to forecast student outcomes for early academic intervention.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib', 'SQL', 'Data Analysis'],
    features: [
      'Exploratory Data Analysis (EDA) uncovering key correlations between study habits and final scores',
      'Supervised regression models predicting final exam marks with high R² accuracy',
      'Interactive visual distribution charts for attendance vs. academic attainment',
      'Actionable intervention insights to assist educators in identifying at-risk students',
    ],
    githubUrl: 'https://github.com/hemanth-tech-byte',
    liveUrl: 'https://github.com/hemanth-tech-byte',
    metrics: 'Trained on multi-attribute datasets · High predictive correlation',
    architectureHighlights: [
      'Clean data preprocessing and outlier handling pipeline using Pandas and NumPy',
      'Comparative evaluation across Linear Regression, Decision Trees, and Random Forests',
    ],
  },
  {
    id: 'gemini-clone',
    title: 'Gemini AI Clone',
    category: 'Full Stack',
    subtitle: 'Next-Gen Generative AI Conversational Assistant Interface',
    description:
      'A sleek, real-time AI chat application replicating Google Gemini’s intuitive conversational experience, prompt streaming, and rich Markdown rendering.',
    longDescription:
      'Built a full-featured Gemini conversational interface with reactive prompt handling, streaming token responses, code syntax highlighting, history preservation, and prompt suggestion pills. Styled with dark-mode aesthetic and smooth response transitions.',
    technologies: ['React', 'JavaScript', 'Google Gemini API', 'Tailwind CSS', 'Node.js', 'REST APIs'],
    features: [
      'Real-time streaming text generation mimicking Google Gemini UI animations',
      'Markdown and code snippet syntax rendering with one-click copy functionality',
      'Recent conversation history drawer and prompt quick-launch suggestion cards',
      'Custom speech/audio input support and adaptive multi-device interface',
    ],
    githubUrl: 'https://github.com/hemanth-tech-byte',
    liveUrl: 'https://github.com/hemanth-tech-byte',
    metrics: 'Instant token streaming · 100% Gemini UI fidelity',
    architectureHighlights: [
      'Asynchronous stream parsing for token-by-token typewriter effect',
      'Resilient API error handling with rate-limit retries and prompt memory management',
    ],
  },
  {
    id: 'desktop-ai-assistant',
    title: 'Desktop AI Assistant',
    category: 'Upcoming',
    subtitle: 'Future Project • Voice & System Automation Companion',
    description:
      'An intelligent desktop automation companion capable of system-level task execution, voice command recognition, workflow shortcuts, and AI-driven task orchestration.',
    longDescription:
      'Currently in active architectural design and R&D. The Desktop AI Assistant bridges local operating system hooks (opening apps, managing files, controlling playback, system queries) with large language model intelligence and real-time voice synthesis for a hands-free developer experience.',
    technologies: ['Python', 'Speech Recognition', 'System Automation', 'PyQt / Electron', 'LLMs', 'NLP'],
    features: [
      'Natural voice activation and speech-to-text recognition pipeline',
      'System-level automation (file search, app launchers, volume, browser actions)',
      'Context-aware LLM query responses for quick coding definitions and summaries',
      'Background daemon with lightweight CPU/RAM memory footprint',
    ],
    githubUrl: 'https://github.com/hemanth-tech-byte',
    liveUrl: 'https://github.com/hemanth-tech-byte',
    metrics: 'Active R&D · Future Roadmap Project',
    architectureHighlights: [
      'Low-latency modular event bus routing voice triggers to automation scripts',
      'Local-first privacy architecture with optional cloud LLM fallback',
    ],
  },
];

export const CONTENT_POSTS: ContentPost[] = [
  {
    id: 'post-1',
    title: 'Mastering Trees & Graphs: The Visual Guide for Campus Placements',
    category: 'DSA',
    readsOrViews: '42K+ Views',
    readTime: '6 min read',
    summary:
      'Breaking down DFS, BFS, and recursive tree traversals into intuitive visual mental models for engineering interviews.',
    keyTakeaway: 'Mastering the recursion call stack is the single highest-ROI skill for tech placement tests.',
  },
  {
    id: 'post-2',
    title: 'Full-Stack Architecture in 2026: React + Node.js + Cloud Best Practices',
    category: 'Web Dev',
    readsOrViews: '28K+ Views',
    readTime: '8 min read',
    summary:
      'A practical roadmap detailing clean component state management, modular REST endpoint construction, and scalable Google Cloud deployment.',
    keyTakeaway: 'Structure your backend routes with clear separation of controllers, services, and data models.',
  },
  {
    id: 'post-3',
    title: 'Prompt Engineering & AI Fundamentals for CS Undergrads',
    category: 'AI / ML',
    readsOrViews: '35K+ Views',
    readTime: '5 min read',
    summary:
      'How modern software engineers leverage structured prompt chaining, few-shot conditioning, and LLM APIs to build useful software.',
    keyTakeaway: 'Treat prompts like API contracts: validate input schemas and constrain output formatting.',
  },
];

export const MILESTONES: Milestone[] = [
  {
    year: '2022 - 2026',
    title: 'B.Tech in Computer Science & Engineering',
    institution: 'Final Year CSE Undergrad',
    description:
      'Strong academic track record focusing on Operating Systems, Database Management Systems (DBMS), Data Structures & Algorithms, Computer Networks, and Artificial Intelligence.',
  },
  {
    year: '2024 - Present',
    title: 'Tech Influencer & Developer Educator',
    institution: 'Digital Content & Technical Community',
    description:
      'Creating technical carousels, architectural breakdowns, coding guides, and placement preparation resources for thousands of aspiring developers.',
  },
  {
    year: '2023 - 2025',
    title: 'Competitive Programming & DSA Dedication',
    institution: 'LeetCode & GFG Platforms',
    description:
      'Solved 500+ challenges across Arrays, Strings, Trees, Dynamic Programming, and Graph theory with consistent daily streak and optimized solutions.',
  },
];

export const RESUME_DATA = {
  personal: {
    name: 'HEMANTH MAMIDI',
    title: 'Computer Science & Engineering Undergraduate (Final Year)',
    status: 'Final Year CSE Undergrad (Class of 2026)',
    location: 'Hyderabad, Telangana, India',
    email: 'hemanthmamidi.dev@gmail.com',
    mobile: '+91 7702567325',
    mobileRaw: '7702567325',
    github: 'https://github.com/hemanth-tech-byte',
    githubDisplay: 'github.com/hemanth-tech-byte',
    linkedin: 'https://www.linkedin.com/in/hemanth-mamidi-a8a74a377/',
    linkedinDisplay: 'linkedin.com/in/hemanth-mamidi-a8a74a377',
    website: 'https://github.com/hemanth-tech-byte',
  },
  summary:
    'Dedicated and ambitious Computer Science and Engineering final-year student (Class of 2026) with solid core foundations in Data Structures & Algorithms, Full Stack Web Development (React, Node.js, JavaScript), and Applied Machine Learning. Demonstrated history of architecting responsive web portals, creating predictive data pipelines, and educating aspiring developers through tech content. Solved 500+ algorithmic challenges with high problem-solving velocity. Seeking full-time software engineering roles and campus opportunities to build high-impact, scalable digital solutions.',
  education: [
    {
      degree: 'Bachelor of Technology (B.Tech) in Computer Science and Engineering',
      institution: 'Final Year Undergraduate',
      location: 'Hyderabad, Telangana, India',
      period: '2022 – 2026',
      status: 'Graduating 2026',
      coursework: [
        'Data Structures & Algorithms',
        'Database Management Systems (DBMS)',
        'Operating Systems',
        'Object-Oriented Programming (Java/Python)',
        'Computer Networks',
        'Software Engineering',
        'Cloud Computing Fundamentals',
      ],
    },
  ],
  skills: {
    programmingLanguages: ['Python', 'Java', 'JavaScript (ES6+)', 'SQL', 'HTML5', 'CSS3'],
    webDevelopment: ['React.js', 'Node.js', 'RESTful APIs', 'Tailwind CSS', 'Responsive UI/UX', 'State Management'],
    aiAndData: ['Pandas', 'NumPy', 'Scikit-Learn', 'Exploratory Data Analysis (EDA)', 'Regression Modeling', 'Prompt Engineering'],
    databasesAndCloud: ['MySQL', 'MongoDB', 'Google Cloud Platform (GCP)', 'Schema Normalization'],
    toolsAndPractices: ['Git', 'GitHub', 'VS Code', 'Postman', 'Linux/CLI', 'Agile Workflows', 'Code Reviews'],
    coreCompetencies: ['Algorithmic Problem Solving (500+ solved)', 'Full-Stack Architecture', 'Technical Communication', 'Rapid Prototyping'],
  },
  experience: [
    {
      role: 'Tech Influencer & Developer Educator',
      organization: 'Digital Community & Technical Content',
      location: 'Hyderabad, India',
      period: '2024 – Present',
      highlights: [
        'Authored in-depth visual carousels and technical breakdowns on Data Structures & Algorithms, full-stack web development, and coding interview preparation.',
        'Mentored peers and junior developers in building structured problem-solving habits and mastering core computer science paradigms.',
        'Actively cultivated an engaged student developer network emphasizing clean coding, project roadmaps, and career readiness.',
      ],
    },
    {
      role: 'Competitive Programmer & Algorithmic Problem Solver',
      organization: 'LeetCode & GeeksforGeeks',
      location: 'Remote / Self-Directed',
      period: '2023 – 2025',
      highlights: [
        'Solved 500+ algorithmic challenges across Arrays, Trees, Graphs, Dynamic Programming, and Recursion.',
        'Maintained daily problem-solving consistency, optimizing space and time complexity for competitive benchmarks.',
      ],
    },
  ],
  projects: [
    {
      name: "Doctor's Hospital Website",
      category: 'Full Stack Healthcare Portal',
      techStack: 'React, Node.js, JavaScript, HTML5, CSS3, REST APIs',
      points: [
        'Engineered an intuitive clinical portal allowing patients to browse medical departments, view doctor credentials, and book consultation slots.',
        'Built reactive booking forms with real-time schedule checks, dynamic date-time pickers, and client-side validation.',
        'Optimized site layout for 100% responsive display across mobile, tablet, and desktop viewports with emergency hotline quick-access.',
      ],
    },
    {
      name: 'Lycas Bike Rental',
      category: 'Two-Wheeler Rental & Fleet Platform',
      techStack: 'React, Node.js, MongoDB, Tailwind CSS, REST APIs',
      points: [
        'Developed an end-to-end vehicle rental booking application supporting motorcycle & scooter catalogue filtering and specifications showcase.',
        'Designed real-time tariff calculation algorithms for hourly, daily, and weekend rental pricing tiers with instantaneous checkout previews.',
        'Integrated multi-step reservation state management with pickup & drop-off date pickers and persistent booking summaries.',
      ],
    },
    {
      name: 'Student Performance Analysis',
      category: 'Machine Learning & Predictive Modeling',
      techStack: 'Python, Pandas, NumPy, Scikit-Learn, Matplotlib, SQL',
      points: [
        'Conducted exploratory data analysis (EDA) on multi-attribute academic datasets to detect underlying correlations between study habits, attendance, and exam scores.',
        'Trained and validated supervised regression models to accurately forecast student academic outcomes for early pedagogical intervention.',
        'Generated visual data distributions and statistical charts summarizing actionable performance metrics for educational stakeholders.',
      ],
    },
    {
      name: 'Gemini AI Clone',
      category: 'Real-Time Conversational AI Assistant',
      techStack: 'React, Google Gemini API, JavaScript, Tailwind CSS, REST APIs',
      points: [
        'Architected a sleek conversational interface replicating Google Gemini’s user experience, token typewriter streaming, and rich markdown rendering.',
        'Added code syntax highlighting, one-click snippet copying, dynamic prompt templates, and conversation memory preservation.',
        'Engineered asynchronous stream parsing with resilient error recovery and rate-limit handling.',
      ],
    },
    {
      name: 'Desktop AI Assistant (Future Project)',
      category: 'Voice-Activated System Automation & Companion',
      techStack: 'Python, Speech Recognition, OS Automation, PyQt / Electron, LLMs',
      points: [
        'Actively designing a hands-free desktop companion integrating system-level OS control with real-time speech-to-text recognition.',
        'Developing local automation pipelines for application launching, system settings, file queries, and AI-grounded coding definitions.',
      ],
    },
  ],
  achievements: [
    'Solved 500+ Data Structures and Algorithms problems across LeetCode and GeeksforGeeks platforms.',
    'Active Open-Source Contributor on GitHub with full-stack and machine learning repositories.',
    'Tech Educator & Influencer creating visual engineering guides followed by student developers.',
    'Consistently maintained academic excellence throughout the 4-year Computer Science curriculum.',
  ],
};

