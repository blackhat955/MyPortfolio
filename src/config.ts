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
  countTo: number
  countFrom?: number
  prefix?: string
  suffix?: string
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
  problem?: string
  ownership?: string
  architecture?: string
  decision?: string
  result?: string
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
  siteTitle: "Durgesh Tiwari — Full Stack Engineer",
  siteDescription: "Full stack engineer building production systems end to end, including the AI layer. React, TypeScript, Spring Boot, Flask, Node, AWS.",
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
    "ENGINEER",
  ],
  leadText: "Building production systems end to end — from React and TypeScript interfaces to Spring Boot, Flask, and Node.js services on AWS, including the AI layer.",
  supportingNotes: [
    "React / TypeScript / Spring Boot / Flask / Node.js",
    "AWS / Redis / Kafka / ONNX Runtime / Docker",
    "ICPC Regionalist — Based in Bloomington, IN",
  ],
}

export const manifestoConfig: ManifestoConfig = {
  videoPath: "/videos/vid-1.mp4",
  text: "Full-stack engineer building production systems end to end, from React and TypeScript frontends to Spring Boot, Flask, and Node.js backends on AWS, including the AI layer. I cut page load time by 35% with a GraphQL gateway, infrastructure cost by 30% with Redis caching, and delivered 300ms on-device LLM inference with INT8-quantized ONNX Runtime. ICPC Regionalist.",
}

export const identityConfig: IdentityConfig = {
  sectionLabel: "// PROFILE — IDENTITY PACKET",
  title: "Full-stack engineer. Systems builder.",
  summary: "I build and ship complete production systems: responsive React and TypeScript experiences, Spring Boot, Flask, and Node.js services, AWS infrastructure, and applied AI. I focus on measurable outcomes — faster pages, lower infrastructure cost, reliable distributed workflows, and efficient on-device inference.",
  details: [
    { label: "Location", value: "Bloomington, IN" },
    { label: "Availability", value: "Remote / Hybrid roles" },
    { label: "Focus", value: "Full-stack systems, cloud, AI" },
    { label: "Contact", value: "durgeshse98@gmail.com" },
  ],
}

export const metricsConfig: MetricsConfig = {
  sectionLabel: "// IMPACT — OUTPUT SIGNALS",
  title: "Measured production outcomes.",
  items: [
    { value: "98%", countTo: 98, suffix: "%", label: "Command Success", detail: "Voice-driven browser actions across a Flask and React system." },
    { value: "35%", countTo: 35, suffix: "%", label: "Faster Page Loads", detail: "Consolidated three service calls behind one GraphQL gateway." },
    { value: "30%", countTo: 30, suffix: "%", label: "Infrastructure Cost Cut", detail: "Added Redis cache-aside behavior with Kafka refresh events." },
    { value: "300ms", countTo: 300, suffix: "ms", label: "On-Device Inference", detail: "Tuned an INT8-quantized ONNX Runtime BERT pipeline." },
    { value: "450→220ms", countFrom: 450, countTo: 220, prefix: "450→", suffix: "ms", label: "p95 Latency", detail: "Reduced peak-load latency across Spring Boot REST services." },
    { value: "40K+", countTo: 40, suffix: "K+", label: "Daily Active Users", detail: "Maintained search performance during production traffic spikes." },
    { value: "80%", countTo: 80, suffix: "%", label: "Test Coverage", detail: "JUnit and Mockito coverage with SonarQube static analysis." },
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
      courses: ["Applied Algorithms", "Software Engineering", "Advanced Database Concepts", "Computer Vision"],
    },
    {
      school: "University of Mumbai",
      location: "Mumbai, India",
      degree: "Bachelor of Engineering in Information Technology",
      period: "AUG 2018 — MAY 2022",
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
      slug: "techmentee",
      name: "SOFTWARE ENGINEER",
      code: "TMI",
      address: "TECHMENTEE, INC. — USA",
      status: "ACTIVE DEPLOYMENT // JUN 2026 – PRESENT",
      highlights: [
        "Built a configuration-driven Python pipeline for an E-Pharma platform.",
        "Automated ingestion, validation, feature engineering, and model training.",
        "Designed reusable model workflows and artifacts for Node.js integration.",
      ],
      email: "durgeshse98@gmail.com",
      phone: "PYTHON / SCIKIT-LEARN / PANDAS / JOBLIB / NODE.JS",
      ctaText: "VIEW SYSTEM DETAILS →",
      ctaHref: "#",
      image: "/images/exp-02-techmentee.svg",
      utcOffset: -4,
      article: {
        title: "TECHMENTEE — E-PHARMA ML PIPELINE",
        paragraphs: [
          "Built a configuration-driven Python pipeline for an E-Pharma platform that automates ingestion, validation, feature engineering, and model training, replacing ad-hoc analysis scripts with reusable, testable components.",
          "Designed feature engineering and training workflows with lag and rolling features, multi-model evaluation, and joblib artifact persistence, structured for integration with the Node.js backend.",
        ],
      },
    },
    {
      slug: "kahana",
      name: "SOFTWARE ENGINEER",
      code: "KAH",
      address: "KAHANA — USA (REMOTE)",
      status: "COMPLETED // JUN 2025 – JUN 2026",
      highlights: [
        "Reached 98% command success for voice-driven browser actions.",
        "Cut page load time by 35% with a GraphQL gateway over Flask services.",
        "Delivered 300ms on-device inference with INT8-quantized ONNX Runtime.",
      ],
      email: "durgeshse98@gmail.com",
      phone: "PYTHON / FLASK / REACT / TYPESCRIPT / GRAPHQL / REDIS / KAFKA / ONNX",
      ctaText: "VIEW SYSTEM DETAILS →",
      ctaHref: "#",
      image: "/images/exp-01-kahana.svg",
      utcOffset: -4,
      article: {
        title: "KAHANA — AI BROWSER ENGINEERING",
        paragraphs: [
          "Achieved a 98% command success rate for voice-driven browser actions, including opening and grouping tabs and searching history, using a Python Flask backend and a React, TypeScript, and Tailwind CSS frontend.",
          "Reduced page load time by 35% by consolidating authentication, recommendation, and search-suggestion calls behind a single GraphQL gateway over Flask microservices, with Kafka events keeping recommendations fresh.",
          "Cut infrastructure costs by 30% with a Redis cache-aside layer that repopulates on misses and publishes Kafka events to refresh recommendations, supported by RabbitMQ and Celery asynchronous jobs.",
          "Improved frontend performance by restructuring React state from arrays to hash maps for constant-time lookups, adding memoization to cut re-renders, and using code splitting and lazy loading to shrink the initial load.",
          "Built a two-tier intent engine that races an on-device MiniLM matcher against a Gemini path in parallel threads, takes the higher-confidence result, and cancels the slower path through an atomic flag to save compute.",
          "Optimized on-device inference to a 300ms round trip by tuning an ONNX Runtime BERT pipeline for low-resource devices with multithreading and INT8 quantization, matching intents to a function registry of typed browser handlers.",
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
      phone: "SPRING BOOT / JPA / HIBERNATE / ELASTICSEARCH / JWT / OAUTH2 / JUNIT",
      ctaText: "VIEW SYSTEM DETAILS →",
      ctaHref: "#",
      image: "/images/exp-03-programmers-army.svg",
      utcOffset: 5.5,
      article: {
        title: "PROGRAMMERS ARMY — BACKEND ENGINEERING",
        paragraphs: [
          "Reduced p95 latency from 450ms to 220ms under peak load by building Spring Boot REST services with Spring Data JPA and Hibernate for payments, orders, and assessments, while improving testability through dependency injection and slice tests.",
          "Strengthened application security and reduced authentication-related support tickets by implementing an authentication service with Spring Security, JWT, OAuth2, and role-based access control.",
          "Maintained consistent search performance during traffic spikes across a 40K+ daily active user base by integrating Elasticsearch for full-text search across courses, videos, and PDFs with per-field boosting and fuzzy matching.",
          "Achieved 80% code coverage and improved release quality by implementing automated tests with JUnit and Mockito and integrating SonarQube for static analysis.",
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
      src: "/images/08-docquery.svg",
      label: "DOCQUERY — RAG / FASTAPI / CHROMADB / REACT AGENT",
      category: "AI / RAG",
      title: "DocQuery",
      timeframe: "JAN 2025 — JUL 2025",
      summary: "A citation-grounded document intelligence platform that ingests PDFs, retrieves source-aware context, and routes question answering, summarization, and report generation through a typed ReAct agent.",
      problem: "PDF question answering often produces references that are not traceable to the uploaded source.",
      ownership: "Built the ingestion, retrieval, agent, API, and Gradio interface end to end.",
      architecture: "pypdf → overlapping chunks → all-MiniLM-L6-v2 → ChromaDB → ReAct tools → Groq or Ollama.",
      decision: "Stored filename, page, and chunk metadata with each vector and generated citations from that metadata.",
      result: "Eliminated citation hallucination and shipped the platform live on Hugging Face Spaces.",
      stack: ["Python", "FastAPI", "Gradio", "ChromaDB", "Sentence-Transformers", "Groq", "Ollama", "Docker"],
      metrics: ["Exact filename, page, and chunk citations", "Pluggable cloud and local LLM interface", "Live deployment on Hugging Face Spaces"],
      details: [
        "Built a RAG pipeline that extracts PDF text with pypdf, chunks with overlap, embeds locally using all-MiniLM-L6-v2, and stores vectors in persistent ChromaDB with source, page, and chunk metadata.",
        "Eliminated citation hallucination by grounding every answer in stored vector metadata instead of relying on model-generated references.",
        "Built a ReAct agent with typed tools for question answering, summarization, and structured reports, supporting Groq Llama 3.3 70B and local Ollama llama3.2:3b.",
        "Shipped a Gradio PDF upload and Q&A interface plus FastAPI endpoints for ingestion, querying, health checks, and agent routing.",
      ],
      demoUrl: "https://huggingface.co/spaces/Durgesh98/document-rag-platform",
      repoUrl: "https://github.com/blackhat955/DocumenRAG",
    },
    {
      src: "/images/01-cpp-search-engine.svg",
      label: "C++ SEARCH ENGINE — TRIE / LEVENSHTEIN / NODE ADDON",
      category: "Systems",
      title: "High-Performance C++ Search Engine",
      timeframe: "2025",
      summary: "A developer-focused fuzzy text search engine built with a C++ Trie, inverted index, and recursive Levenshtein search, exposed to the web through a native Node.js addon.",
      problem: "Prefix, exact, and typo-tolerant text lookup needed native speed without excessive Trie-node memory.",
      ownership: "Implemented the C++ search core, memory optimization, N-API binding, and runtime monitoring.",
      architecture: "C++ Trie + inverted index + recursive Levenshtein traversal → N-API addon → Express service.",
      decision: "Replaced unordered_map child storage with a contiguous vector and validated it under AddressSanitizer.",
      result: "Reduced Trie node memory by 42% while supporting fuzzy matching within edit distance 2.",
      stack: ["C++", "Trie", "Levenshtein", "Node.js", "N-API", "Express"],
      metrics: ["42% lower Trie node memory", "Fuzzy matching within edit distance 2", "Real-time latency and throughput monitoring"],
      details: [
        "Implemented a Trie for fast prefix traversal and an inverted index to map matched vocabulary terms back to source line numbers.",
        "Optimized Trie node storage from hash maps to vectors to reduce memory overhead and validated improvements with AddressSanitizer.",
        "Wrapped the C++ engine with node-addon-api so the web layer can call native fuzzy search without moving heavy computation into JavaScript.",
      ],
      demoUrl: "https://high-performance-texts-search-engine.onrender.com/",
      repoUrl: "https://github.com/blackhat955/high_performance_texts_search_engine",
    },
    {
      src: "/images/09-pocketsplit.svg",
      label: "POCKETSPLIT — REACT NATIVE / SPRING BOOT / POSTGRESQL",
      category: "Mobile / Fintech",
      title: "PocketSplit",
      timeframe: "AUG 2024 — JAN 2025",
      summary: "A cross-platform expense-sharing application for splitting bills, tracking friend and group balances, and securely synchronizing sessions and contacts.",
      problem: "Friends and groups needed one cross-platform flow for splitting bills and tracking balances.",
      ownership: "Built the React Native client, Spring Boot APIs, PostgreSQL data layer, authentication, and container delivery.",
      architecture: "React Native + Expo SecureStore → JWT-authenticated Spring Boot REST APIs → PostgreSQL + Flyway.",
      decision: "Used Flyway for repeatable schema changes and Expo SecureStore for client session storage.",
      result: "Containerized the system with Docker Compose and published backend images to GHCR through GitHub Actions.",
      stack: ["React Native", "Expo", "Spring Boot", "PostgreSQL", "Flyway", "JWT", "Docker", "GitHub Actions"],
      metrics: ["Cross-platform expense and balance tracking", "Secure sessions with Expo SecureStore", "Automated container publishing to GHCR"],
      details: [
        "Built a React Native and Expo client for splitting bills, tracking friend and group balances, and synchronizing contacts, with sessions stored through Expo SecureStore.",
        "Built a Spring Boot and PostgreSQL backend with token-authenticated REST APIs, Flyway migrations, and JWT authentication.",
        "Containerized the complete system with Docker Compose and published backend images to GitHub Container Registry through GitHub Actions.",
      ],
      repoUrl: "https://github.com/blackhat955/PocketSplit",
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
