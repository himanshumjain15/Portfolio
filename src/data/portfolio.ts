// ═══════════════════════════════════════════════════════
// PORTFOLIO DATA — Himanshu Jain
// ═══════════════════════════════════════════════════════

export const personalInfo = {
  name: "Himanshu Jain",
  firstName: "Himanshu",
  tagline: "Turning messy data into clear decisions.",
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
  { label: "Classification Accuracy", value: 99, suffix: "%", accent: "var(--accent-research)" },
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
    company: "Ernst & Young (EY)",
    role: "Data Science Intern",
    location: "Bengaluru, India",
    dates: "Jan 2025 — Jul 2025",
    metrics: [
      { value: "10M+", label: "Records Processed" },
      { value: "25%", label: "Faster Decisions" },
      { value: "50%", label: "Feature Lift" },
    ],
    bullets: [
      "Transformed 10M+ healthcare records into actionable insights using SQL, enabling stakeholders to track adoption trends and optimize rollout of the Tele-Manas application",
      "Designed and deployed Power BI dashboards for 10+ regional teams to track performance KPIs, reducing strategic decision cycles by 25%",
      "Spearheaded A/B tests on 100K+ system users, assigning control and treatment groups to quantify feature lift and validate a 50% improvement prior to large-scale deployment",
      
    ],
    tags: ["SQL", "Power BI", "A/B Testing", "Python", "Healthcare Data"],
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
    gpa: "3.67/4.0",
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
      "Developed a 5-layer CNN optimized with the Sine Cosine Algorithm to classify CT lung scans with 99% accuracy on imbalanced medical datasets, demonstrating that metaheuristic hyperparameter optimization can significantly outperform grid and random search for medical imaging tasks.",
    problem:
      "Lung cancer remains the leading cause of cancer-related deaths, and early detection from CT scans is critical. Existing deep learning models struggle with class imbalance in medical datasets, often missing minority-class diagnoses that are the most clinically important.",
    approach:
      "Designed a 5-layer CNN architecture and optimized hyperparameters using the Sine Cosine Algorithm (SCA), a metaheuristic that explores the parameter space more effectively than traditional grid search. Used TensorFlow for implementation, with careful handling of class imbalance through augmentation and weighted loss functions.",
    findings: [
      "Achieved 99% classification accuracy on CT lung scan dataset",
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
}

export const projects: Project[] = [
  {
    id: "hate-speech-mining",
    title: "Social Media Hate Speech & Toxicity Mining",
    subtitle:
      "An NLP pipeline analyzing 1.77M+ social media records to detect and classify hate speech across 7 toxicity categories.",
    description:
      "End-to-end text analysis pipeline using TF-IDF, SVD embeddings, and KMeans clustering on Google Jigsaw and TweetEval datasets.",
    problem:
      "Online hate speech is a growing problem, but detecting it at scale requires understanding the nuances of toxic language across platforms and contexts. Existing keyword-based approaches miss implicit toxicity, and training classifiers requires understanding the structure and distribution of real-world toxic text data.",
    approach:
      "Built an end-to-end text analysis pipeline processing 1.77 million social media records from Google Jigsaw and TweetEval datasets. The pipeline uses TF-IDF vectorization, SVD for dimensionality reduction, and KMeans clustering to identify patterns across 7 toxicity categories. Used t-SNE visualization, toxicity correlation heatmaps, and WordCloud analysis to understand dataset characteristics before modeling.",
    results: [
      "Processed and analyzed 1.77M+ social media records across two major datasets",
      "Revealed 97.4% vocabulary divergence between datasets, indicating domain-specific language patterns",
      "Identified 91.5% class imbalance — a critical finding for model training strategy",
      "Produced visualizations (t-SNE, heatmaps, WordClouds) that informed feature engineering for BERT and LightGBM",
    ],
    lessons:
      "The biggest lesson was that exploratory data analysis is not a box to check — it fundamentally shaped our modeling decisions. Discovering the extreme vocabulary divergence between Jigsaw and TweetEval meant that a model trained on one would likely fail on the other without careful domain adaptation.",
    tags: ["NLP", "Text Mining", "Python", "scikit-learn", "Clustering"],
    year: "2026",
    links: [{ label: "GitHub", url: "https://github.com/himanshumjain15/toxicity-mining-nlp" }],
    featured: true,
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
      { name: "CNN", proof: "Lung Cancer — 99% accuracy", level: "proficient" },
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
  { label: "TensorFlow", proof: "99% Accuracy" },
  { label: "NLP", proof: "1.77M Records" },
];
