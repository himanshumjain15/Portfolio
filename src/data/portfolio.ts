// ═══════════════════════════════════════════════════════
// PORTFOLIO DATA — Himanshu Jain
// ═══════════════════════════════════════════════════════

export const personalInfo = {
  name: "Himanshu Jain",
  firstName: "Himanshu",
  tagline: "Turning messy data into actionable insights.",
  description:
    "MS Data Science at CU Boulder. Building insights from millions of records at Ernst & Young and LG Electronics. Award-winning researcher in deep learning for medical imaging.",
  email: "himanshumjain15@gmail.com",
  phone: "+1 (303) 641-6694",
  location: "Boulder, CO",
  openToRelocate: true,
  github: "https://github.com/himanshumjain15",
  linkedin: "https://www.linkedin.com/in/himanshu-jain-559335222",
  resumeFile: "/Portfolio/Himanshu_Jain_Resume.pdf",
  university: "University of Colorado Boulder",
  degree: "MS",
  program: "Data Science",
  graduationDate: "May 2027",
  seeking: "Internship & Full-Time",
};

// ═══════════════════════════════════════════════════════
// SECTION CONFIG — Timeline & Accent Colors
// ═══════════════════════════════════════════════════════

export interface SectionConfig {
  id: string;
  label: string;
  accent: string;
  cssVar: string;
}

export const sections: SectionConfig[] = [
  { id: "hero", label: "Home", accent: "#5B6CF5", cssVar: "--accent-hero" },
  { id: "about", label: "About", accent: "#0EA5E9", cssVar: "--accent-about" },
  { id: "experience", label: "Experience", accent: "#10B981", cssVar: "--accent-experience" },
  { id: "projects", label: "Projects", accent: "#F97316", cssVar: "--accent-projects" },
  { id: "research", label: "Research", accent: "#7C3AED", cssVar: "--accent-research" },
  { id: "skills", label: "Skills", accent: "#E11D78", cssVar: "--accent-skills" },
  { id: "leadership", label: "Leadership", accent: "#D97706", cssVar: "--accent-leadership" },
  { id: "contact", label: "Contact", accent: "#0891B2", cssVar: "--accent-contact" },
];

// ═══════════════════════════════════════════════════════
// ABOUT
// ═══════════════════════════════════════════════════════

export const aboutParagraphs = [
  "Master's student in Data Science at the University of Colorado Boulder (Class of 2027), with prior internships at Ernst & Young and LG Electronics. Skilled in SQL, Python, R, and Tableau/Power BI for large-scale data analysis, KPI tracking, and statistical modeling.",
  "Experienced in translating complex analyses into clear business recommendations through dashboards, reports, and presentations. Adept at designing data pipelines, validating insights, and delivering actionable strategies for cross-functional teams. CPT-eligible for Summer 2026.",
];

export const quickInfo = [
  { label: "Program", value: "MS Data Science" },
  { label: "University", value: "CU Boulder" },
  { label: "GPA", value: "3.67 / 4.0" },
  { label: "Location", value: "Boulder, CO" },
  { label: "Status", value: "Open to Relocate" },
];

export const stats = [
  { label: "Records Processed", value: 10, suffix: "M+", accent: "var(--accent-about)" },
  { label: "Classification Accuracy", value: 92, suffix: "%", accent: "var(--accent-research)" },
  { label: "Text Records Analyzed", value: 1.77, suffix: "M+", accent: "var(--accent-projects)" },
  { label: "Industry Internships", value: 2, suffix: "", accent: "var(--accent-experience)" },
];

// ═══════════════════════════════════════════════════════
// EXPERIENCE
// ═══════════════════════════════════════════════════════

export interface Experience {
  company: string;
  role: string;
  location: string;
  dates: string;
  metrics?: { value: string; label: string }[];
  bullets: string[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    company: "Summer Atlantic Capital",
    role: "Data Science Intern",
    location: "Newark, Delaware",
    dates: "Jun 2026 — Aug 2026",
    metrics: [
      { value: "100%", label: "Classification Accuracy" },
      { value: "5", label: "Risk Event Types" },
      { value: "9", label: "Field Annotation Schema" },
    ],
    bullets: [
      "Engineered the NLP backbone of an AI investment risk agent (spaCy NER, FinBERT, SentenceTransformer) that automatically converts raw regulatory, sanctions, and geopolitical documents into structured risk signals, achieving 100% event classification accuracy across 5 risk event types and enabling analysts to replace manual document review with model-generated alerts",
      "Designed a retraining pipeline for a production AI agent with a 9-field annotation schema and automated validation framework, ensuring human-reviewed labels feed cleanly into NLP model updates, directly improving the reliability of risk scores and confidence outputs consumed by portfolio managers on the SAC Nexus platform",
    ],
    tags: ["spaCy", "FinBERT", "SentenceTransformers", "NLP", "Python", "Risk Modeling"],
  },
  {
    company: "Ernst & Young (EY)",
    role: "Data Science Intern",
    location: "Bengaluru, India",
    dates: "Jan 2025 — Jul 2025",
    metrics: [
      { value: "10M+", label: "Records Processed" },
      { value: "25%", label: "Faster Decisions" },
      { value: "22%", label: "Feature Lift" },
    ],
    bullets: [
      "Transformed 10M+ healthcare records into actionable insights using SQL, enabling stakeholders to track adoption trends and optimize rollout of Tele-MANAS, a national mental health platform",
      "Designed and deployed Power BI dashboards for 10+ regional teams to track performance KPIs, reducing strategic decision cycles by 25%",
      "Spearheaded A/B tests on 100K+ platform users to evaluate an auto call routing feature, assigning control and treatment groups to quantify feature lift and validate a 22% improvement in adoption rate prior to large-scale deployment",
      "Cleaned and standardized healthcare records using SQL, performing outlier analysis via statistical thresholds and data validation checks, improving analysis accuracy by 40%",
      "Orchestrated user-centric feature rollouts cross-functionally with medical professionals, engineers, and government officials, leading to a 30 % increase in adoption across the national health platform"
    ],
    tags: ["SQL", "Power BI", "A/B Testing", "Python", "Healthcare Data", "Outlier Analysis", "Cross-Functional Collaboration"],
  },
  {
    company: "LG Electronics",
    role: "Data Analyst Intern",
    location: "Noida, India",
    dates: "May 2024 — Jun 2024",
    metrics: [
      { value: "15%", label: "Faster Approvals" },
      { value: "10%", label: "Cost Savings" },
      { value: "5+", label: "Vendors Analyzed" },
    ],
    bullets: [
      "Engineered Python + SQL workflows to integrate supplier KPI data, enabling 15% faster contract approvals and reducing manual review effort",
      "Analyzed supplier pricing and performance across 5+ vendor categories using Excel and SQL, supporting cost optimization decisions",
      "Identified potential 10% cost savings through vendor performance analysis and Tableau dashboards, enabling data-driven negotiations",
    ],
    tags: ["Python", "SQL", "Tableau", "Excel", "Supply Chain"],
  },
  {
    company: "Manipal Institute of Technology",
    role: "Research Intern",
    location: "Manipal, India",
    dates: "Oct 2023 — Jan 2024",
    metrics: [
      { value: "92%", label: "Accuracy" },
      { value: "5", label: "Layer CNN" },
      { value: "1", label: "Best Paper Award" },
    ],
    bullets: [
      "Engineered a 5-layer CNN using PyTorch, optimized with a Sine Cosine Algorithm (SCA), classifying lung CT scans into benign, malignant, and normal categories with 92% accuracy",
      "Published research at the 5th International Conference on Data Analytics (London, 2024), winning Best Paper Award for the proposed automated lung cancer screening framework",
    ],
    tags: ["PyTorch", "CNN", "Deep Learning", "Medical Imaging", "Sine Cosine Algorithm"],
  },
];

// ═══════════════════════════════════════════════════════
// LEADERSHIP
// ═══════════════════════════════════════════════════════

export interface Leadership {
  organization: string;
  role: string;
  dates: string;
  metrics?: { value: string; label: string }[];
  bullets: string[];
}

export const leadership: Leadership[] = [
  {
    organization: "REVELS 2024",
    role: "All-India Intercollegiate Cultural Festival",
    dates: "Jun 2023 — Aug 2024",
    metrics: [
      { value: "20", label: "Team Members Led" },
      { value: "5K+", label: "Attendees Served" },
      { value: "10+", label: "Committees Coordinated" },
    ],
    bullets: [
      "Led a 20-member hospitality team serving 5,000+ attendees; coordinated with 10+ student committees and external partners to manage accommodation, catering, and event logistics",
    ],
  },
];

// ═══════════════════════════════════════════════════════
// EDUCATION
// ═══════════════════════════════════════════════════════

export interface Education {
  institution: string;
  degree: string;
  dates: string;
  location: string;
  gpa?: string;
  coursework?: string[];
}

export const education: Education[] = [
  {
    institution: "University of Colorado Boulder",
    degree: "Master of Science in Data Science",
    dates: "Aug 2025 — May 2027",
    location: "Boulder, CO",
    coursework: ["Statistical Inference", "Data Mining", "Big Data Architecture"],
  },
  {
    institution: "Manipal Institute of Technology",
    degree: "Bachelor of Science in Electronics and Communication",
    dates: "Aug 2021 — May 2025",
    location: "India",
  },
];

// ═══════════════════════════════════════════════════════
// RESEARCH / PUBLICATIONS
// ═══════════════════════════════════════════════════════

export interface Research {
  id: string;
  title: string;
  venue: string;
  status: string;
  year: string;
  authors: string;
  summary: string;
  problem: string;
  approach: string;
  findings: string[];
  tags: string[];
  links: { label: string; url: string }[];
  award?: string;
}

export const research: Research[] = [
  {
    id: "lung-cancer-cnn",
    title: "Optimized CNN Framework for Lung Cancer Detection Using Sine Cosine Algorithm",
    venue: "5th International Conference on Data Analytics, London",
    status: "Published",
    year: "2024",
    authors: "Himanshu Jain et al.",
    summary:
      "Developed a 5-layer CNN optimized with the Sine Cosine Algorithm to classify CT lung scans with 92% accuracy on imbalanced medical datasets, demonstrating that metaheuristic hyperparameter optimization can significantly outperform grid and random search for medical imaging tasks.",
    problem:
      "Lung cancer remains the leading cause of cancer-related deaths, and early detection from CT scans is critical. Existing deep learning models struggle with class imbalance in medical datasets, often missing minority-class diagnoses that are the most clinically important.",
    approach:
      "Designed a 5-layer CNN architecture and optimized hyperparameters using the Sine Cosine Algorithm (SCA), a metaheuristic that explores the parameter space more effectively than traditional grid search. Used TensorFlow for implementation, with careful handling of class imbalance through augmentation and weighted loss functions.",
    findings: [
      "Achieved 92% classification accuracy on CT lung scan dataset",
      "Outperformed baseline CNN and traditional ML methods on imbalanced data",
      "Won Best Paper Award at the conference, recognizing innovation in deep learning optimization",
    ],
    tags: ["Deep Learning", "CNN", "TensorFlow", "Medical Imaging", "Optimization"],
    links: [{ label: "Paper", url: "https://link.springer.com/chapter/10.1007/978-981-96-3352-4_46" }],
    award: "Best Paper Award",
  },
];

// ═══════════════════════════════════════════════════════
// PROJECTS
// ═══════════════════════════════════════════════════════

export interface ProjectCaseStudy {
  overview: string;
  problemStatement: string;
  approachSummary: string;
  systemArchitecture: string;
  keyFeatures: string[];
  techStack: { category: string; items: string[] }[];
  deployment: string;
  challenges: { challenge: string; solution: string }[];
  improvements: string[];
  footerTags: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  approach: string;
  results: string[];
  lessons: string;
  tags: string[];
  year: string;
  links: { label: string; url: string }[];
  featured: boolean;
  image?: string;
  category?: string;
  caseStudy?: ProjectCaseStudy;
}

export const projects: Project[] = [
  {
    id: "intellitalent",
    title: "IntelliTalent - Resume to Job Matching",
    subtitle:
      "End-to-end resume-to-job matching platform using PyMuPDF parsing, GPT-4o-mini skill extraction over a FAISS-backed RAG pipeline, and hybrid 60% cosine / 40% skill-overlap scoring on live listings.",
    description:
      "An NLP-driven platform that matches resumes to live job listings. Resumes are parsed with PyMuPDF, skills extracted using GPT-4o-mini via a FAISS-backed RAG pipeline, and jobs ranked with a hybrid score of 60% cosine similarity and 40% skill overlap over listings scraped from Apify. Latency is optimized with regex taxonomy matching (50ms vs. 5+ seconds per-job LLM calls) and batched OpenAI embeddings with vectorized NumPy cosine similarity. Deployed across AWS EC2 and GCP Cloud Run with O*NET role clustering and MongoDB text search.",
    problem:
      "Job seekers waste time manually scanning listings that turn out to be irrelevant. Keyword-based search produces both false negatives and noise, and gives no clarity on how well a resume actually qualifies for a role.",
    approach:
      "Parse the PDF resume with PyMuPDF, extract structured skills with GPT-4o-mini over a FAISS-backed RAG index, scrape live listings from LinkedIn and Indeed via Apify, embed everything with OpenAI's text-embedding-3-small, and rank with a hybrid score of 60% semantic similarity plus 40% skill overlap — returning ranked matches with skill-gap analysis.",
    results: [
      "FAISS-backed RAG for GPT-4o-mini skill extraction",
      "Hybrid job ranking: 60% semantic similarity + 40% skill overlap",
      "Regex taxonomy matching replaces per-job LLM calls (~50ms vs. 5+ sec per job)",
      "Batch OpenAI embeddings with vectorized cosine similarity",
      "O*NET role clustering with GPT-generated role suggestions",
      "MongoDB TTL indexes auto-expire scraped listings after 7 days",
    ],
    lessons:
      "Per-job LLM calls made ranking too slow, so regex taxonomy matching replaced them, cutting skill matching to ~50ms per job. FAISS-injected RAG context kept token overhead down by supplying only the relevant taxonomy slice per resume, and MongoDB TTL indexes solved staleness by auto-expiring listings after 7 days.",
    tags: ["Python", "GPT-4o-mini", "FAISS", "PyMuPDF", "MongoDB", "AWS EC2", "GCP Cloud Run"],
    year: "2026",
    links: [
      { label: "GitHub", url: "https://github.com/himanshumjain15/intelli-talent-alignment" },
      { label: "Live Demo", url: "https://intelli-talent.ddns.net/landing.html" },
    ],
    featured: false,
    image: "/Portfolio/images/intellitalent-cover.png",
    category: "AI / ML",
    caseStudy: {
      overview:
        "An NLP-driven platform that matches resumes to live job listings. Resumes are parsed with PyMuPDF, skills extracted using GPT-4o-mini via a FAISS-backed RAG pipeline, and jobs ranked with a hybrid score of 60% cosine similarity and 40% skill overlap over listings scraped from Apify. Latency is optimized with regex taxonomy matching (50ms vs. 5+ seconds per-job LLM calls) and batched OpenAI embeddings with vectorized NumPy cosine similarity. Deployed across AWS EC2 and GCP Cloud Run with O*NET role clustering and MongoDB text search.",
      problemStatement:
        "Job seekers waste time manually scanning listings that turn out to be irrelevant. Keyword-based search produces both false negatives and noise, and gives no clarity on how well a resume actually qualifies for a role.",
      approachSummary:
        "Parse the PDF resume with PyMuPDF, extract structured skills with GPT-4o-mini over a FAISS-backed RAG index, scrape live listings from LinkedIn and Indeed via Apify, embed everything with OpenAI's text-embedding-3-small, and rank with a hybrid score of 60% semantic similarity plus 40% skill overlap — returning ranked matches with skill-gap analysis.",
      systemArchitecture:
        "A multi-stage pipeline moves a resume from upload to ranked matches: PDF upload → PyMuPDF extraction → GPT-4o-mini skill extraction via FAISS RAG → Apify job scraping → batch embeddings → vectorized cosine similarity → hybrid scoring → MongoDB storage → a web dashboard of ranked matches.",
      keyFeatures: [
        "FAISS-backed RAG for GPT-4o-mini skill extraction",
        "Hybrid job ranking: 60% semantic similarity + 40% skill overlap",
        "Regex taxonomy matching replaces per-job LLM calls (~50ms vs. 5+ sec per job)",
        "Batch OpenAI embeddings with vectorized cosine similarity",
        "O*NET role clustering with GPT-generated role suggestions",
        "Bcrypt auth with OTP verification and brute-force protection",
        "MongoDB TTL indexes auto-expire scraped listings after 7 days",
      ],
      techStack: [
        { category: "LLM & Embeddings", items: ["GPT-4o-mini", "text-embedding-3-small", "Llama 3.3 70B (Groq)"] },
        { category: "Core", items: ["LangChain", "FAISS", "PyMuPDF", "MongoDB 7.0"] },
        { category: "Data", items: ["Apify Actors", "O*NET", "OpenAI embeddings"] },
        { category: "Deployment", items: ["Docker", "AWS EC2", "GCP Cloud Run"] },
        { category: "Security", items: ["AWS SSM Parameter Store", "GCP Secret Manager", "Bcrypt"] },
      ],
      deployment:
        "Containerized with Docker and deployed through AWS (deploy_aws.sh) and GCP Cloud Run (deploy_gcp.sh) scripts, with secrets managed via AWS SSM Parameter Store and GCP Secret Manager.",
      challenges: [
        {
          challenge: "Per-job LLM calls made ranking too slow — 5+ seconds per listing.",
          solution: "Regex taxonomy matching replaced per-job LLM calls, cutting skill matching to ~50ms per job.",
        },
        {
          challenge: "Feeding the full skill taxonomy to the model added heavy token overhead.",
          solution: "FAISS-injected RAG context supplies only the relevant taxonomy slice per resume.",
        },
        {
          challenge: "Scraped job listings went stale and bloated storage over time.",
          solution: "MongoDB TTL indexes automatically expire listings after 7 days.",
        },
      ],
      improvements: [
        "Application tracker to manage jobs a user has applied to",
        "Resume quality scoring with actionable feedback",
        "Cross-user alerts when strong new matches appear",
        "A personal analytics dashboard for search activity",
      ],
      footerTags: ["NLP", "RAG", "LLM", "Job Matching"],
    },
  },
  {
    id: "hate-speech-mining",
    title: "Toxicity Mining",
    subtitle:
      "NLP pipeline classifying hate speech and toxicity across 1.8M+ social media records using classical ML and transformer-based models, with two-stage DistilBERT domain adaptation across corpora.",
    description:
      "A machine learning project that categorizes toxic language and hate speech on social media platforms, distinguishing between generic offensive language and hate speech targeted at specific entities, users, or groups. Uses BERT and DistilBERT transformer models alongside traditional classifiers like Naive Bayes, Logistic Regression, SVM, and LightGBM. Trained on Google Jigsaw Civil Comments (1.8M rows) and TweetEval Hate Speech datasets.",
    problem:
      "Social platforms need to separate generic offensive language from hate speech aimed at specific people or groups — a distinction generic toxicity filters routinely miss, and a hard one to learn because toxic vocabulary differs sharply from platform to platform (only 2.6% overlap between the two corpora).",
    approach:
      "Ran two preprocessing tracks over the combined corpus — TF-IDF with stopword removal for classical models and minimal normalization for transformers — then compared a classical ML baseline (TF-IDF → TruncatedSVD/LSA → clustering and linear/tree classifiers) against a fine-tuned DistilBERT trained end-to-end on the balanced Jigsaw + TweetEval set, evaluating both with precision, recall, F1, and confusion-matrix analysis across corpora.",
    results: [
      "Trained and evaluated across 1.8M+ records from Google Jigsaw Civil Comments and TweetEval Hate Speech datasets",
      "Found only 2.6% vocabulary overlap between the two corpora, revealing sharp platform-specific toxic language patterns",
      "TruncatedSVD (LSA) to 200 dimensions with KMeans (k=2) recovered toxic/non-toxic structure, but clustered poorly (silhouette ≈ 0.10) on linearly inseparable features",
      "Switched from a staged Jigsaw→Twitter fine-tune (stalled at ~67% accuracy) to end-to-end DistilBERT training on the combined, balanced corpus, which trained stably across both sources",
      "Evaluated with precision, recall, F1, and confusion matrices instead of raw accuracy, since Jigsaw was 91.7% non-toxic",
    ],
    lessons:
      "The biggest lesson was that classical clustering (TF-IDF + LSA + KMeans) couldn't linearly separate toxic from non-toxic text, which justified moving to a fine-tuned DistilBERT model trained end-to-end on the combined corpus. Balancing the dataset and evaluating with precision, recall, and F1 rather than accuracy was essential given Jigsaw's 91.7% non-toxic skew. Future work includes multi-class target identification, a real-time moderation API, and multilingual toxicity detection.",
    tags: ["Python", "BERT", "DistilBERT", "LightGBM", "TF-IDF"],
    year: "2026",
    links: [
      { label: "GitHub", url: "https://github.com/himanshumjain15/toxicity-mining-nlp" },
      { label: "Live Demo", url: "https://glenpaulson.github.io/toxicity-mining-website/#/data-exploration" },
    ],
    featured: false,
    image: "/Portfolio/images/hate-speech-mining-cover.png",
    category: "AI / ML",
    caseStudy: {
      overview:
        "A machine learning project that categorizes toxic language and hate speech on social media platforms, distinguishing between generic offensive language and hate speech targeted at specific entities, users, or groups. Uses BERT and DistilBERT transformer models alongside traditional classifiers like Naive Bayes, Logistic Regression, SVM, and LightGBM. Trained on Google Jigsaw Civil Comments (1.8M rows) and TweetEval Hate Speech datasets.",
      problemStatement:
        "Social platforms need to separate generic offensive language from hate speech aimed at specific people or groups — a distinction generic toxicity filters routinely miss, and a hard one to learn because toxic vocabulary differs sharply from platform to platform (only 2.6% overlap between the two corpora).",
      approachSummary:
        "Run two preprocessing tracks over the combined corpus — TF-IDF with stopword removal for classical models and minimal normalization for transformers — then compare a classical ML baseline against a fine-tuned DistilBERT trained end-to-end on the balanced Jigsaw + TweetEval set.",
      systemArchitecture:
        "The pipeline spans 1.8M+ records from Google Jigsaw Civil Comments and TweetEval. Text flows through dual preprocessing tracks into two modeling paths: a classical track (TF-IDF → TruncatedSVD/LSA → clustering and linear/tree classifiers) and a transformer track (minimal normalization → DistilBERT fine-tuning), with evaluation via precision, recall, F1, and confusion-matrix analysis across both corpora.",
      keyFeatures: [
        "Distinguishes generic offensive language from targeted hate speech",
        "Trained on Google Jigsaw Civil Comments (1.8M rows) and TweetEval",
        "BERT and DistilBERT transformers with Naive Bayes, Logistic Regression, SVM, and LightGBM baselines",
        "Dual preprocessing: TF-IDF + stopword removal and minimal normalization",
        "TruncatedSVD (LSA) to 200 dims with KMeans (k=2) recovering toxic/non-toxic structure",
        "DistilBERT fine-tuned end-to-end on the combined, balanced Jigsaw + TweetEval corpus",
      ],
      techStack: [
        { category: "Data", items: ["Google Jigsaw Civil Comments (1.8M rows)", "TweetEval Hate Speech"] },
        {
          category: "Classical ML",
          items: ["scikit-learn", "TF-IDF", "TruncatedSVD (LSA)", "KMeans", "Naive Bayes", "Logistic Regression", "SVM", "LightGBM"],
        },
        { category: "Deep Learning", items: ["PyTorch", "Hugging Face Transformers", "BERT", "DistilBERT"] },
        { category: "Website", items: ["TypeScript"] },
      ],
      deployment: "The results and write-up are published as a static site on GitHub Pages.",
      challenges: [
        {
          challenge:
            "Only 2.6% vocabulary overlap between the forum-comment and tweet corpora, and a staged Jigsaw→Twitter fine-tune stalled around 67% accuracy.",
          solution:
            "Switched to direct end-to-end DistilBERT training on the combined, balanced corpus with consistent preprocessing, which trained stably across both sources.",
        },
        {
          challenge: "The Jigsaw corpus was 91.7% non-toxic, making raw accuracy a misleading metric.",
          solution: "Balanced the combined dataset and evaluated with precision, recall, F1, and confusion matrices instead of accuracy.",
        },
        {
          challenge:
            "KMeans on the TF-IDF/LSA features clustered poorly (silhouette ≈ 0.10) — toxic and non-toxic text overlap heavily in linear space.",
          solution: "Used that finding to justify moving from classical clustering to fine-tuned DistilBERT for the classification task.",
        },
      ],
      improvements: [
        "Multi-class targeting to identify which group a hate-speech instance is aimed at",
        "A real-time inference API for live moderation",
        "Multilingual toxicity detection beyond English",
      ],
      footerTags: ["NLP", "BERT", "Hate Speech Detection", "Machine Learning"],
    },
  },
  {
    id: "lm-assisted-automated-eda-pipeline",
    title: "LM-Assisted Automated EDA Pipeline",
    subtitle:
      "An end-to-end Python workflow that ingests any CSV, computes robust statistics, and generates verified LLM-driven dataset insights.",
    description:
      "Built an automated EDA pipeline using Python, Pandas, and Seaborn with Gemini API integration and a fact-verification layer to ensure narrative outputs use only computed values.",
    problem:
      "Exploratory data analysis is often manual, repetitive, and difficult to scale across datasets. Analysts spend significant time producing baseline statistics, checking data quality, creating visualizations, and writing summaries, which slows iteration and increases reporting inconsistency.",
    approach:
      "Developed a reusable Python pipeline that accepts arbitrary CSV inputs, computes descriptive statistics, performs outlier detection with the IQR method, and auto-generates 5+ visualizations using Seaborn. Added Gemini API integration behind a verification layer that passes only computed statistical outputs to the model, constraining generated narratives to factual dataset values.",
    results: [
      "Automated end-to-end EDA from raw CSV ingestion to structured Markdown reporting",
      "Generated descriptive statistics, IQR-based outlier checks, and 5+ visualizations per run",
      "Produced 5-10 dataset-specific narrative insights for each dataset execution",
      "Maintained zero hallucinated numeric values by verifying all LLM inputs against computed statistics",
    ],
    lessons:
      "The key takeaway was that LLM quality in analytics depends heavily on context control, not just prompting. By restricting model input to verified computed metrics, the pipeline retained narrative flexibility while preserving statistical correctness and trustworthiness.",
    tags: ["Python", "Gemini API", "Pandas", "Seaborn", "EDA", "Automation"],
    year: "2026",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/himanshumjain15/DM-Assignment-02-Automated-Dataset-Insight-Generator-LLM-Assisted-EDA-",
      },
    ],
    featured: false,
  },

  {
    id: "wine-quality",
    title: "Statistical Analysis of Wine Quality",
    subtitle:
      "A hypothesis-driven study of 6,400+ wine samples using R to identify the key chemical drivers of perceived quality.",
    description:
      "Used EDA, correlation analysis, and two-sample t-tests in R to find what makes wine taste good, with statistically significant results.",
    problem:
      "Wine producers and distributors need to understand which measurable chemical properties drive consumer perception of quality. While domain experts have intuitions, data-driven evidence linking specific compounds to quality ratings can inform production decisions.",
    approach:
      "Analyzed 6,400+ wine samples from the UCI Wine Quality dataset using R and the Tidyverse. The analysis included comprehensive EDA with correlation matrices, two-sample t-tests comparing red and white wines, and bootstrapping to validate findings without relying on parametric assumptions.",
    results: [
      "Identified alcohol content and volatile acidity as the two strongest predictors of perceived wine quality",
      "Found statistically significant differences between red and white wines on key chemical metrics",
      "Validated results through bootstrapping, confirming robustness of parametric test conclusions",
      "Produced actionable insights for product positioning based on chemical composition profiles",
    ],
    lessons:
      "This project reinforced the value of simple, well-executed statistical analysis. Sometimes a clear t-test tells a more honest story than a complex model. The bootstrapping exercise was particularly valuable — it built my confidence that the parametric results were not artifacts of distributional assumptions.",
    tags: ["R", "Tidyverse", "Hypothesis Testing", "Statistics", "Bootstrapping"],
    year: "2025",
    links: [{ label: "GitHub", url: "https://github.com/himanshumjain15/wine-quality-analysis" }],
    featured: false,
  },
];

// ═══════════════════════════════════════════════════════
// SKILLS
// ═══════════════════════════════════════════════════════

export interface SkillGroup {
  title: string;
  accent: string;
  skills: { name: string; proof?: string; level?: "expert" | "proficient" | "familiar" }[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Core Methods",
    accent: "var(--accent-research)",
    skills: [
      { name: "Statistical Inference", proof: "CU Boulder Coursework", level: "proficient" },
      { name: "A/B Testing", proof: "EY — 100K+ user experiments", level: "expert" },
      { name: "Hypothesis Testing", proof: "Wine Quality Analysis", level: "expert" },
      { name: "EDA", proof: "All projects", level: "expert" },
      { name: "Feature Engineering", proof: "Hate Speech Mining", level: "proficient" },
      { name: "Bootstrapping", proof: "Wine Quality Analysis", level: "proficient" },
      { name: "Outlier Analysis", proof: "EY — data validation", level: "expert" },
    ],
  },
  {
    title: "Languages & Libraries",
    accent: "var(--accent-hero)",
    skills: [
      { name: "Python", proof: "Primary language — all projects", level: "expert" },
      { name: "R", proof: "Wine Quality Analysis", level: "proficient" },
      { name: "SQL", proof: "EY & LG — 10M+ records", level: "expert" },
      { name: "Pandas & NumPy", proof: "All Python projects", level: "expert" },
      { name: "scikit-learn", proof: "Hate Speech Mining", level: "proficient" },
      { name: "Tidyverse", proof: "Wine Quality Analysis", level: "proficient" },
    ],
  },
  {
    title: "ML & Deep Learning",
    accent: "var(--accent-projects)",
    skills: [
      { name: "CNN", proof: "Lung Cancer — 92% accuracy", level: "proficient" },
      { name: "NLP & Text Mining", proof: "1.77M records analyzed", level: "proficient" },
      { name: "TensorFlow", proof: "Lung Cancer Detection", level: "proficient" },
      { name: "KMeans Clustering", proof: "Hate Speech Mining", level: "proficient" },
      { name: "Linear Regression", proof: "Coursework", level: "proficient" },
      { name: "TF-IDF / SVD", proof: "Hate Speech Mining", level: "proficient" },
    ],
  },
  {
    title: "Data Visualization",
    accent: "var(--accent-about)",
    skills: [
      { name: "Tableau", proof: "LG — vendor dashboards", level: "proficient" },
      { name: "Power BI", proof: "EY — 10+ regional dashboards", level: "expert" },
      { name: "Matplotlib", proof: "All Python projects", level: "expert" },
      { name: "Seaborn", proof: "Lung Cancer & Hate Speech", level: "expert" },
    ],
  },
  {
    title: "Statistical Methods",
    accent: "var(--accent-experience)",
    skills: [
      { name: "Outlier Analysis", proof: "EY — data validation", level: "expert" },
      { name: "Correlation Analysis", proof: "Wine Quality", level: "proficient" },
      { name: "t-Tests", proof: "Wine Quality Analysis", level: "proficient" },
      { name: "Data Mining", proof: "CU Boulder Coursework", level: "proficient" },
    ],
  },
  {
    title: "Infrastructure & Tools",
    accent: "var(--accent-contact)",
    skills: [
      { name: "AWS", proof: "Cloud experience", level: "familiar" },
      { name: "Git & GitHub", proof: "All projects", level: "expert" },
      { name: "Jira", proof: "EY — project management", level: "proficient" },
      { name: "Excel", proof: "LG — vendor analysis", level: "expert" },
    ],
  },
];

export const certifications = [
  { name: "Google Data Analytics Professional Certificate", issuer: "Google" },
  { name: "Data Analysis With Tidyverse", issuer: "University of Colorado Boulder" },
];

// ═══════════════════════════════════════════════════════
// FLOATING BADGES (Hero)
// ═══════════════════════════════════════════════════════

export const floatingBadges = [
  { label: "Python", proof: "All Projects" },
  { label: "SQL", proof: "10M+ Records" },
  { label: "TensorFlow", proof: "92% Accuracy" },
  { label: "NLP", proof: "1.77M Records" },
];
