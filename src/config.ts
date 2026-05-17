export interface SiteConfig {
  language: string
  siteTitle: string
  siteDescription: string
}

export interface NavigationLink {
  label: string
  href: string
}

export interface NavigationConfig {
  brandName: string
  links: NavigationLink[]
}

export interface HeroConfig {
  eyebrow: string
  titleLines: string[]
  leadText: string
  supportingNotes: string[]
}

export interface ManifestoConfig {
  videoPath: string
  text: string
}

export interface IdentityConfig {
  sectionLabel: string
  title: string
  summary: string
  details: Array<{
    label: string
    value: string
  }>
}

export interface MetricItem {
  value: string
  label: string
  detail: string
}

export interface MetricsConfig {
  sectionLabel: string
  title: string
  items: MetricItem[]
}

export interface EducationItem {
  school: string
  location: string
  degree: string
  period: string
  gpa: string
  courses: string[]
}

export interface EducationConfig {
  sectionLabel: string
  items: EducationItem[]
}

export interface FacilityArticle {
  title: string
  paragraphs: string[]
}

export interface FacilityItem {
  slug: string
  name: string
  code: string
  address: string
  status: string
  highlights: string[]
  email: string
  phone: string
  ctaText: string
  ctaHref: string
  image: string
  utcOffset: number
  article: FacilityArticle
}

export interface FacilitiesConfig {
  sectionLabel: string
  detailBackText: string
  detailNotFoundText: string
  detailReturnText: string
  items: FacilityItem[]
}

export interface ObservationConfig {
  sectionLabel: string
  videoPath: string
  statusText: string
  latLabel: string
  lonLabel: string
  initialLat: number
  initialLon: number
}

export interface ArchiveItem {
  src: string
  label: string
  category: string
  title: string
  timeframe: string
  summary: string
  stack: string[]
  metrics: string[]
  details: string[]
  demoUrl?: string
  repoUrl?: string
}

export interface ArchivesConfig {
  sectionLabel: string
  vaultTitle: string
  closeText: string
  items: ArchiveItem[]
}

export interface FooterConfig {
  copyrightText: string
  statusText: string
}

export const siteConfig: SiteConfig = {
  language: "en",
  siteTitle: "Durgesh Tiwari | Full Stack Developer",
  siteDescription: "Portfolio of Durgesh Tiwari — Full Stack Developer building scalable web platforms, backend services, cloud deployments, and production-grade user experiences.",
}

export const navigationConfig: NavigationConfig = {
  brandName: "DURGESH TIWARI",
  links: [
    { label: "// PROFILE", href: "#hero" },
    { label: "// EXPERIENCE", href: "#facilities" },
    { label: "// STACK", href: "#manifesto" },
    { label: "// IMPACT", href: "#impact" },
    { label: "// PROJECTS", href: "#archives" },
    { label: "// CONTACT", href: "#footer" },
  ],
}

export const heroConfig: HeroConfig = {
  eyebrow: "OPERATOR: DURGESH TIWARI / STATUS: ACTIVE",
  titleLines: [
    "FULL STACK",
    "DEVELOPER",
  ],
  leadText: "Building scalable web applications, API platforms, and cloud-ready services. 2+ years shipping production code across fintech, edtech, and enterprise platforms.",
  supportingNotes: [
    "React / TypeScript / Spring Boot / Node.js",
    "AWS / Docker / Kubernetes / Redis / RabbitMQ",
    "Based in Bloomington, IN — Open to remote opportunities",
  ],
}

export const manifestoConfig: ManifestoConfig = {
  videoPath: "/videos/vid-1.mp4",
  text: "Full stack developer with 2+ years of production experience across frontend systems, backend APIs, cloud infrastructure, and platform integrations. I've architected microservices handling 40K+ daily active users, reduced system latency by 51%, and cut infrastructure costs by 30% through Redis caching and RabbitMQ optimization. My work spans React and Angular frontends, Spring Boot backends, AWS and Azure cloud deployments, and Elasticsearch-powered search systems. I believe in writing clean, tested code — achieving 80% coverage with JUnit and Mockito — and deploying through automated CI/CD pipelines.",
}

export const identityConfig: IdentityConfig = {
  sectionLabel: "// PROFILE — IDENTITY PACKET",
  title: "Production-minded full stack developer.",
  summary: "I build user-facing applications, backend services, and cloud deployment flows with a focus on measurable reliability, speed, and maintainable code. My strongest work sits at the intersection of React interfaces, Spring Boot services, distributed caching, search, and automated delivery.",
  details: [
    { label: "Location", value: "Bloomington, IN" },
    { label: "Availability", value: "Remote / Hybrid roles" },
    { label: "Focus", value: "Full-stack systems, APIs, cloud" },
    { label: "Contact", value: "durgeshse98@gmail.com" },
  ],
}

export const metricsConfig: MetricsConfig = {
  sectionLabel: "// IMPACT — OUTPUT SIGNALS",
  title: "Measured production outcomes.",
  items: [
    { value: "40K+", label: "Daily Active Users", detail: "Scaled course/search traffic across a production platform." },
    { value: "51%", label: "Latency Reduction", detail: "Improved system response time through backend optimization." },
    { value: "35%", label: "Faster Page Loads", detail: "Reduced load time with service architecture and gateway improvements." },
    { value: "30%", label: "Infra Cost Cut", detail: "Reduced redundant calls with Redis caching and RabbitMQ refresh flows." },
    { value: "80%", label: "Test Coverage", detail: "Built JUnit and Mockito coverage with SonarQube checks." },
    { value: "200+", label: "Students Mentored", detail: "Supported mobile app development, debugging, and PR reviews." },
  ],
}

export const educationConfig: EducationConfig = {
  sectionLabel: "// EDUCATION — ACADEMIC TRACE",
  items: [
    {
      school: "Indiana University Bloomington",
      location: "Bloomington, IN, USA",
      degree: "Master of Science in Data Science",
      period: "AUG 2023 — MAY 2025",
      gpa: "GPA 3.6 / 4.0",
      courses: ["Applied Algorithms", "Software Engineering", "Advanced Database Concepts", "Computer Vision"],
    },
    {
      school: "University of Mumbai",
      location: "Mumbai, India",
      degree: "Bachelor of Engineering in Information Technology",
      period: "AUG 2018 — MAY 2022",
      gpa: "GPA 9.2 / 10.0",
      courses: ["Object Oriented Programming", "Computer Networks", "Operating Systems", "Cryptography Network Security"],
    },
  ],
}

export const facilitiesConfig: FacilitiesConfig = {
  sectionLabel: "// LOGS — EXPERIENCE TELEMETRY",
  detailBackText: "RETURN TO LOGS",
  detailNotFoundText: "Entry not found in system logs.",
  detailReturnText: "Return to main terminal",
  items: [
    {
      slug: "kahana",
      name: "FULL STACK DEVELOPER",
      code: "KAH",
      address: "KAHANA — USA (REMOTE)",
      status: "ACTIVE DEPLOYMENT // JUN 2025 – PRESENT",
      highlights: [
        "98% feature success rate across customizable React and Spring Boot modules.",
        "35% faster page loads through REST microservices behind a GraphQL Gateway.",
        "30% lower infrastructure cost with Redis caching and RabbitMQ refresh flows.",
      ],
      email: "durgeshse98@gmail.com",
      phone: "REACT / SPRING BOOT / REDIS / RABBITMQ / GRAPHQL / TAILWIND",
      ctaText: "VIEW SYSTEM DETAILS →",
      ctaHref: "#",
      image: "/images/exp-01-kahana.svg",
      utcOffset: -4,
      article: {
        title: "KAHANA — FULL STACK DEVELOPMENT",
        paragraphs: [
          "Designed and developed customizable modules and a voice-based search system using React with Tailwind CSS and Spring Boot, improving cross-device user experience and achieving a 98% feature success rate across sessions.",
          "Engineered RESTful Spring Boot microservices for authentication, recommendation, and frequent search, orchestrated via a GraphQL Gateway. This architecture reduced page load time by 35% and enhanced personalized recommendations.",
          "Optimized the search flow using Redis caching and RabbitMQ, serving cached results instantly across services and asynchronously refreshing data for analytics and recommendations. This reduced redundant calls and cut infrastructure costs by 30%.",
          "Accelerated project delivery by resolving business logic gaps and collaborating with cross-functional teams in an Agile environment.",
        ],
      },
    },
    {
      slug: "indiana-university",
      name: "HEAD ASSOC. INSTRUCTOR",
      code: "IUB",
      address: "INDIANA UNIVERSITY — BLOOMINGTON, IN",
      status: "COMPLETED // AUG 2024 – MAY 2025",
      highlights: [
        "Managed 6+ Agile teams through stand-ups, sprint reviews, and delivery planning.",
        "Mentored 200+ students across Node.js, Firebase, React Native, and Kotlin.",
        "Reviewed pull requests and debugged production-style mobile app workflows.",
      ],
      email: "durgeshse98@gmail.com",
      phone: "NODE.JS / REACT NATIVE / KOTLIN / FIREBASE / AGILE / JIRA",
      ctaText: "VIEW SYSTEM DETAILS →",
      ctaHref: "#",
      image: "/images/exp-02-iu.svg",
      utcOffset: -4,
      article: {
        title: "INDIANA UNIVERSITY — INSTRUCTION & LEADERSHIP",
        paragraphs: [
          "Managed 6+ teams in full-stack development with Agile and Jira; led stand-ups and sprint reviews; facilitated Miro brainstorming sessions, improving on-time delivery and team productivity.",
          "Mentored 200+ students in Mobile App Development with Node.js, Firebase, React Native, and Kotlin; provided debugging support and conducted PR reviews to ensure code quality and reduce development time.",
        ],
      },
    },
    {
      slug: "programmers-army",
      name: "SOFTWARE ENGINEER",
      code: "PRA",
      address: "PROGRAMMERS ARMY — INDIA (HYBRID)",
      status: "COMPLETED // MAY 2022 – AUG 2023",
      highlights: [
        "Lowered p95 latency from 450ms to 220ms across Spring Boot services.",
        "Scaled search and course traffic for a 40K+ daily active user platform.",
        "Reached 80% coverage with JUnit, Mockito, and SonarQube quality gates.",
      ],
      email: "durgeshse98@gmail.com",
      phone: "SPRING BOOT / AWS ECS / ELASTICSEARCH / JWT / DOCKER / JENKINS",
      ctaText: "VIEW SYSTEM DETAILS →",
      ctaHref: "#",
      image: "/images/exp-03-programmers-army.svg",
      utcOffset: 5.5,
      article: {
        title: "PROGRAMMERS ARMY — BACKEND ENGINEERING",
        paragraphs: [
          "Built Spring Boot services using Spring Data JPA and Hibernate with REST APIs for payments, orders, and assessments. Improved testability with dependency injection and slice tests, increased release cadence, and lowered p95 latency from 450ms to 220ms under peak load.",
          "Implemented authentication service using Spring Security with JWT, OAuth2, and role-based access control, eliminating unauthorized access while improving login throughput and reducing authentication-related support tickets.",
          "Integrated Elasticsearch for full-text content search across courses, videos, and PDFs with per-field boosting and fuzzy matching, isolating search from the primary database and keeping response times stable during sale-driven traffic spikes across a 40K+ daily active user base.",
          "Deployed Spring Boot microservices to AWS ECS Fargate with per-service task scaling policies, enabling payments and order processing to scale independently during sale traffic spikes without managing underlying infrastructure.",
          "Enhanced code quality and reduced production bugs by implementing JUnit and Mockito-based automated testing and integrating SonarQube for static analysis, achieving 80% code coverage.",
        ],
      },
    },
  ],
}

export const observationConfig: ObservationConfig = {
  sectionLabel: "// TELEMETRY — LIVE PROJECT FEED",
  videoPath: "/videos/vid-2.mp4",
  statusText: "DEPLOYMENT MONITORING ACTIVE",
  latLabel: "STACK:",
  lonLabel: "STATUS:",
  initialLat: 98.0,
  initialLon: 35.0,
}

export const archivesConfig: ArchivesConfig = {
  sectionLabel: "// NETWORK — PROJECT ARCHIVE",
  vaultTitle: "OPEN PROJECT VAULT",
  closeText: "CLOSE VAULT",
  items: [
    {
      src: "/images/01-cpp-search-engine.svg",
      label: "C++ SEARCH ENGINE — TRIE / LEVENSHTEIN / NODE ADDON",
      category: "Systems",
      title: "High Performance C++ Search Engine",
      timeframe: "SYSTEMS PROJECT",
      summary: "A developer-focused fuzzy text search engine built with a C++ Trie, inverted index, and recursive Levenshtein search, exposed to the web through a native Node.js addon.",
      stack: ["C++", "Trie", "Levenshtein", "Node.js", "N-API", "Express"],
      metrics: ["Fuzzy matching within edit distance 2", "Native Node addon via node-addon-api", "Live RSS, latency, and throughput monitoring"],
      details: [
        "Implemented a Trie for fast prefix traversal and an inverted index to map matched vocabulary terms back to source line numbers.",
        "Optimized Trie node storage from hash maps to vectors to reduce memory overhead and validated improvements with AddressSanitizer.",
        "Wrapped the C++ engine with node-addon-api so the web layer can call native fuzzy search without moving heavy computation into JavaScript.",
      ],
      demoUrl: "https://high-performance-texts-search-engine.onrender.com/",
      repoUrl: "https://github.com/blackhat955/high_performance_texts_search_engine",
    },
    {
      src: "/images/02-medical-imaging.svg",
      label: "MEDICAL AI — PYTORCH / GRAD-CAM / GRADIO",
      category: "AI / ML",
      title: "Medical Imaging Analysis with Grad-CAM",
      timeframe: "AI / RESEARCH PROJECT",
      summary: "A chest X-ray pneumonia detection system with PyTorch inference, Grad-CAM visual explanations, uncertainty views, and a medical imaging dashboard for educational analysis.",
      stack: ["Python", "PyTorch", "Grad-CAM", "Gradio", "CNN", "Hugging Face"],
      metrics: ["Real-time inference target under 2 seconds", "20-panel explainability dashboard", "Grad-CAM attention maps for model decisions"],
      details: [
        "Built a medical imaging workflow around chest X-ray classification with visual explanation panels for model attention.",
        "Added Grad-CAM heatmaps so predictions can be inspected spatially instead of shown as only a confidence score.",
        "Designed the interface for education and research use with clear disclaimers around clinical decision-making.",
      ],
      demoUrl: "https://huggingface.co/spaces/devil66/chest-xray-pneumonia-detector",
      repoUrl: "https://github.com/blackhat955/cxr-pneumo-detector-xai",
    },
    {
      src: "/images/03-credit-dashboard.svg",
      label: "CREDIT CARD DASHBOARD — REACT / TYPESCRIPT / TAILWIND",
      category: "Fintech",
      title: "Credit Card Dashboard",
      timeframe: "FINTECH PRODUCT PROTOTYPE",
      summary: "A centralized credit card dashboard for tracking due dates, minimum payments, account settings, notification preferences, and consolidated payment distribution.",
      stack: ["React", "TypeScript", "Tailwind", "Context API", "React Router", "Lucide"],
      metrics: ["Smart payment distribution prototype", "2FA and notification settings flows", "Card search, filtering, masking, and account management"],
      details: [
        "Designed a consolidated card dashboard to reduce the friction of checking multiple bank portals for due dates and payment planning.",
        "Built payment-flow logic that prioritizes minimum dues first, then routes extra payment toward high-risk balances.",
        "Added account controls including card masking, notification preferences, password changes, 2FA setup, and account deletion flow.",
      ],
      demoUrl: "https://credit-consolidator.vercel.app",
      repoUrl: "https://github.com/blackhat955/CreditConsolidator",
    },
    {
      src: "/images/04-stock-prediction.svg",
      label: "STOCK PREDICTION — DASH / C++ / YFINANCE",
      category: "Data / Forecasting",
      title: "Real-Time Stock Prediction Dashboard",
      timeframe: "QUANT / FORECASTING PROJECT",
      summary: "A live stock analytics dashboard that visualizes market history, decomposes trends, and forecasts future prices with Python Dash plus C++ accelerated forecasting routines.",
      stack: ["Python", "Dash", "Plotly", "Pandas", "yfinance", "C++", "pybind11"],
      metrics: ["Live Yahoo Finance data with 60-second refresh", "ElasticNet, ARIMA, Kalman Filter, and Monte Carlo models", "C++ optimization for HFT-style recursive forecasting"],
      details: [
        "Implemented ARIMA, Kalman Filter, and Monte Carlo forecasting workflows with C++ acceleration for recursive numerical routines.",
        "Integrated live ticker and crypto data from Yahoo Finance with automatic refresh for dashboard monitoring.",
        "Compared forecasting models using MAE and surfaced ElasticNet as the strongest performer in the tested setup.",
      ],
      demoUrl: "https://stockpredication.onrender.com/",
      repoUrl: "https://github.com/blackhat955/StockPredication",
    },
    {
      src: "/images/05-collabboard.svg",
      label: "COLLABBOARD — REACT / GRAPHQL / REAL TIME",
      category: "Collaboration",
      title: "CollabBoard",
      timeframe: "TEAM PRODUCTIVITY PLATFORM",
      summary: "A real-time collaborative task board for software engineering students, designed as a simplified JIRA-style workflow for teams learning project management.",
      stack: ["React 19", "TypeScript", "Vite", "Tailwind", "Node.js", "GraphQL", "Apollo"],
      metrics: ["GraphQL subscriptions for real-time board updates", "Kanban workflow with TODO, DOING, and DONE columns", "Task labels, assignment, search, priority ranking, and export"],
      details: [
        "Created a simplified project-management workflow for student teams that need collaboration without full JIRA complexity.",
        "Implemented real-time task updates using Apollo Server, GraphQL subscriptions, and Apollo Client.",
        "Supported task creation, movement, ranking, colored labels, assignees, due dates, search, and JSON/CSV export.",
      ],
      repoUrl: "https://github.com/blackhat955/CollabBoard-Real-Time-Collaboration-Platform",
    },
    {
      src: "/images/06-netpulse.svg",
      label: "NETPULSE — SWIFTUI / NETWORK FRAMEWORK / CORE DATA",
      category: "iOS",
      title: "NetPulse",
      timeframe: "IOS NETWORK UTILITY",
      summary: "An offline-first iOS network quality analyzer that measures latency, jitter, DNS time, and packet loss, then stores and visualizes results locally.",
      stack: ["Swift", "SwiftUI", "Network.framework", "URLSession", "Swift Charts", "Core Data"],
      metrics: ["One-tap network quality test flow", "Local trend history for latency, jitter, DNS, and packet loss", "CSV and JSON export through local storage service"],
      details: [
        "Built an iOS utility focused on quick network diagnostics with a clean status ring and metric cards.",
        "Stored measurements locally so users can review network quality trends without relying on a backend.",
        "Used Swift Charts to visualize historical latency, jitter, DNS timing, and packet-loss patterns.",
      ],
      repoUrl: "https://github.com/blackhat955/Netpulse",
    },
    {
      src: "/images/07-vitalview.svg",
      label: "VITALVIEW — VISIONOS / SWIFTUI / HEALTH DATA",
      category: "visionOS",
      title: "VitalView",
      timeframe: "APPLE VISION PRO HEALTH APP",
      summary: "A visionOS health dashboard concept that presents health data, medication reminders, risk insights, and a personal digital twin experience in 3D space.",
      stack: ["Swift", "SwiftUI", "visionOS", "RealityKit", "Health Data", "Machine Learning"],
      metrics: ["Immersive 3D health data dashboard", "Medication tracking and reminder flow", "Health insights, risk assessment, and digital twin concept"],
      details: [
        "Designed an Apple Vision Pro health dashboard concept for exploring personal metrics in a spatial interface.",
        "Planned health insights, risk assessment, medication reminders, and health-question support as core user workflows.",
        "Used a digital-twin concept to make health data feel more personal and easier to inspect in 3D space.",
      ],
      repoUrl: "https://github.com/blackhat955/vitalview",
    },
  ],
}

export const footerConfig: FooterConfig = {
  copyrightText: "DURGESH TIWARI // 2026 — ALL SYSTEMS OPERATIONAL",
  statusText: "BLOOMINGTON, IN — durgeshse98@gmail.com — +1 (812) 778-5427",
}
