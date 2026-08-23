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
      { value: "790K", label: "Records Processed" },
      { value: "~1,600", label: "Records Recovered" },
      { value: "2", label: "Silent Bugs Fixed" },
    ],
    bullets: [
      "Built a Python/SQL platform for self-service compensation lookups, using precomputation and two-tier caching over 790K market records to cut lookup time from 10–20 minutes to seconds",
      "Surfaced org-wide pay-equity gaps via Tableau dashboards backed by a MAD/modified-Z outlier detection and privacy-suppression engine",
      "Integrated Claude API-driven entity resolution with human-in-the-loop review, strengthening match reliability across internal and external market-record sources",
      "Restored data integrity for compensation benchmarking by fixing two silent pipeline defects, recovering ~1,600 dropped market records",
    ],
    tags: ["Python", "SQL", "Tableau", "Claude API", "Statistical Analysis", "Data Engineering"],
  },
  {
    company: "Ernst & Young (EY)",
    role: "Data Science Intern",
    location: "Bengaluru, India",
    dates: "Jan 2025 — Jul 2025",
    metrics: [
      { value: "10M+", label: "Records Processed" },
      { value: "25%", label: "Faster Decisions" },
      { value: "22%", label: "Engagement Lift" },
    ],
    bullets: [
      "Validated a 22% engagement lift by running A/B tests on 100K+ platform users to evaluate an auto call routing feature, using a two-sample t-test to establish significance before scaling",
      "Increased adoption by 30% on Tele-MANAS, a national mental health platform, by turning 10M+ records into actionable insights via SQL to surface regional drop-off patterns",
      "Partnered with medical, engineering, and government stakeholders to translate drop-off insights into cross-functional rollouts across Tele-MANAS",
      "Reduced strategic decision cycles by 25% for 10+ regional teams by designing and deploying Power BI dashboards to track performance KPIs",
    ],
    tags: ["SQL", "Power BI", "A/B Testing", "Python", "Healthcare Data", "Cross-Functional Collaboration"],
  },
  {
    company: "LG Electronics",
    role: "Data Analyst Intern",
    location: "Noida, India",
    dates: "May 2024 — Jun 2024",
    metrics: [
      { value: "15%", label: "Faster Approvals" },
      { value: "10%", label: "Cost Savings" },
    ],
    bullets: [
      "Identified a 10% cost-saving opportunity by applying z-score outlier analysis to flag suppliers with anomalous raw material costs, enabling data-driven negotiations",
      "Accelerated contract approvals by 15% by designing a scalable Python + SQL pipeline to integrate and process supplier KPI data, reducing manual review effort",
    ],
    tags: ["Python", "SQL", "Outlier Analysis", "Supply Chain"],
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
      "Engineered a 5-layer CNN (PyTorch, SCA-optimized) classifying lung CT scans at 92% accuracy; published, winning Best Paper Award at ICDATA 2024 (London)",
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
  approachTable?: { headers: string[]; rows: string[][] };
  systemArchitecture: string;
  keyFeatures: string[];
  techStack: { category: string; items: string[] }[];
  deployment: string;
  challenges: { challenge: string; solution: string }[];
  resultsIntro?: string;
  resultsSummary?: string;
  resultsTable?: { headers: string[]; rows: string[][] };
  resultsNote?: string;
  limitations?: string[];
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
  workflow?: string[];
}

export const projects: Project[] = [
  {
    id: "cinematch",
    title: "CineMatch — Hybrid Movie Recommender",
    subtitle:
      "A hybrid movie recommender validated with a real A/B experiment — a 44.9% relative lift over a popularity baseline (p = 0.00072) — and deployed as a live API with a public demo.",
    description:
      "A movie recommendation system that learns what someone will enjoy from how people behave, not from what films are labelled as. It runs as a live web service on AWS with a public demo, and its central claim was tested with a proper A/B experiment rather than asserted.",
    problem:
      "Every team building recommendations faces the same question before investing in personalization: is it actually worth it? A \"most popular\" list is nearly free to build and surprisingly hard to beat, because popular films really are widely liked. So the project was framed as a hypothesis to test, not a model to build — H0: a personalized hybrid model performs about the same as a popularity baseline; H1: the hybrid performs significantly better.",
    approach:
      "Three models were built to answer it: a popularity baseline, a content-based model (genre matching), and a collaborative filtering model (ALS), blended into a 90% CF / 10% content hybrid. Two findings were not obvious in advance — content-based filtering alone was the worst approach by a wide margin despite looking the most plausible, and exploratory analysis (98.3% empty interaction matrix, top 10% of films absorbing 60% of ratings) drove the design rather than following it.",
    results: [
      "Hybrid model achieved 43.65% hit-rate@10 vs. 31.13% for the popularity baseline and just 5.25% for content-based alone",
      "A/B experiment showed a 13.19 percentage-point lift (44.9% relative improvement) at p = 0.00072",
      "The lift's 95% CI (5.64 to 20.74 points) clears the pre-registered 4.67-point significance threshold even at its pessimistic end",
      "Deployed as a live FastAPI + Postgres service on AWS EC2 with a public Streamlit demo, not just a notebook",
    ],
    lessons:
      "The honest caveats matter as much as the result: this is an offline/counterfactual experiment, not a live one; the ~300-viewers-per-group sample has strong power for the effect observed but would likely miss a smaller one; and tuning the blend weight on the same held-out data used for significance testing gives the hybrid a small home-field advantage that a stricter design would remove.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Docker", "AWS", "Streamlit"],
    year: "2026",
    links: [
      { label: "GitHub", url: "https://github.com/himanshumjain15/recommendation-system" },
      { label: "Live Demo", url: "https://himanshumjain15-recsys.streamlit.app" },
    ],
    featured: false,
    image: "/Portfolio/images/cinematch-cover.png",
    category: "AI / ML",
    caseStudy: {
      overview:
        "A movie recommendation system that learns what someone will enjoy from how people behave, not from what films are labelled as. It runs as a live web service on AWS with a public demo, and its central claim was tested with a proper A/B experiment rather than asserted. The result: personalized recommendations found something a viewer genuinely liked for 43 out of every 100 viewers, versus 31 for showing everyone the same popular films — a gap statistically significant at p = 0.00072. Most recommender projects stop at a notebook with an accuracy score; this one ships a Postgres database, a REST API, containerized deployment, a pre-registered experiment, and a front end anyone can click.",
      problemStatement:
        "Every team building recommendations faces the same question before investing in personalization: is it actually worth it? A \"most popular\" list is nearly free to build and surprisingly hard to beat, because popular films really are widely liked. So the project was framed as a hypothesis to test, not a model to build — H0: a personalized hybrid model performs about the same as a popularity baseline. H1: the hybrid performs significantly better.",
      approachSummary:
        "Three models were built to test the hypothesis: a popularity baseline, a content-based model using genre matching, and a collaborative filtering model (ALS) capturing behavioral similarity, blended into a 90% CF / 10% content hybrid. Two findings were not obvious in advance. Content-based filtering alone was the worst approach by a wide margin — six times worse than simply showing popular films — despite producing the most convincing-looking output, because genre tags say nothing about whether a film is any good or whether anyone will actually watch it. And exploratory analysis drove the design rather than following it: the interaction matrix was 98.3% empty, which is why collaborative filtering alone was expected to struggle for sparse users and why blending in a content signal was worth it at all, while the top 10% of films absorbing 60% of all ratings is what made the popularity baseline a serious opponent rather than a strawman.",
      approachTable: {
        headers: ["Approach", "How it decides", "Hit-rate@10"],
        rows: [
          ["Popularity", "Most-rated films, same for everyone", "31.13%"],
          ["Content-based", "Films with matching genres", "5.25%"],
          ["Collaborative filtering", "What similar-behaving people liked", "42.13%"],
          ["Hybrid (90% CF, 10% content)", "Both signals blended", "43.65%"],
        ],
      },
      systemArchitecture:
        "MovieLens data feeds Postgres, which trains three models. FastAPI serves them and logs every recommendation back to Postgres. The Streamlit demo calls that API over HTTP. The data layer uses five Postgres tables (users, items, interactions, recommendation_logs, experiment_assignments) with the schema initialized automatically on first container start. FastAPI loads the trained model and similarity matrix once at startup and answers requests in milliseconds, writing every recommendation served back to Postgres. Users are bucketed deterministically into control and treatment groups, each served by a different model, with results compared via a two-proportion test. The Streamlit front end calls the live API rather than holding its own copy of the model, so what a visitor sees is the deployed system's real output.",
      keyFeatures: [
        "Three models compared honestly — the demo shows the same viewer's recommendations from all three approaches side by side, each labelled with its measured hit rate, including the weakest one",
        "Recommendations that log themselves — every response is written to recommendation_logs with the model that produced it, giving the A/B analysis a real audit trail instead of guesswork",
        "Deterministic bucketing via an MD5 hash of user ID — Python's built-in hash() was rejected because it returns integers unchanged, which would have quietly split users by odd and even",
        "Pre-registered success criteria — the minimum detectable effect (15% relative lift) and the analysis method were fixed before looking at any results, so the threshold couldn't be rationalized after the fact",
        "Personas grounded in real data — example viewers are real MovieLens users with genuinely dominant taste, shown alongside their actual genre breakdown after an earlier mislabeling (a \"comedy lover\" who was 57% drama) was caught and corrected",
      ],
      techStack: [
        { category: "Modeling", items: ["Python", "pandas", "NumPy", "scikit-learn", "implicit (ALS)", "SciPy", "statsmodels"] },
        { category: "Backend", items: ["FastAPI", "PostgreSQL", "SQLAlchemy", "psycopg2"] },
        { category: "Infrastructure", items: ["Docker", "Docker Compose", "AWS EC2", "Streamlit Community Cloud"] },
        { category: "Front End", items: ["Streamlit", "Custom CSS", "TMDB API"] },
      ],
      deployment:
        "Deployed as two separate pieces. The API and database run on a single AWS EC2 instance using the same Docker Compose file as local development, so there's no separate deployment configuration that can drift, with an Elastic IP keeping the address stable across instance restarts. The Streamlit demo deploys straight from the GitHub repository to Streamlit Community Cloud, redeploying automatically on every push, and calls the EC2 API over HTTP rather than holding its own copy of the model. Because the raw dataset is deliberately not committed to the repository, both the container build and the demo download it on first run, so a fresh clone works without manual setup.",
      challenges: [
        {
          challenge:
            "The compiled ALS code depends on libgomp, which the slim Python base image doesn't ship — the container built cleanly and crashed on startup.",
          solution:
            "Installed the missing system library. This is exactly the class of hidden dependency that containerization exists to expose — it had been invisible locally because the host already had it.",
        },
        {
          challenge:
            "The API tried to reach Postgres at \"localhost\", which inside a container means the container itself, not the database next to it.",
          solution: "Fixed by addressing Postgres by its Docker Compose service name instead.",
        },
        {
          challenge:
            "The content similarity matrix needs roughly 700MB, but the EC2 instance had only 1GB total, shared with the OS and the database — causing out-of-memory failures.",
          solution: "Added swap space, which solved it without upgrading to a paid instance size.",
        },
        {
          challenge:
            "After a reboot the site went down only partly: Postgres came back because it had a restart policy and the API didn't — the instance looked healthy while serving nothing.",
          solution: "Configured both services to restart automatically.",
        },
        {
          challenge: "Repeated image builds exhausted an 8GB disk volume mid-deployment.",
          solution:
            "Pruning unused layers unblocked it immediately; resizing the volume and extending the filesystem fixed it properly.",
        },
        {
          challenge:
            "The demo first deployed with an invalid TMDB API key, so every poster lookup returned nothing, and the cache stored those empty results — correcting the key changed nothing because the cache answered instead of retrying.",
          solution:
            "Only a restart cleared it. Caching a failure isn't the same as caching a result, so the app now surfaces a visible warning when the key is missing instead of failing silently.",
        },
      ],
      resultsIntro:
        "From the A/B experiment, with viewers split into two groups and each group served by a different model:",
      resultsSummary:
        "Lift: 13.19 percentage points, a 44.9% relative improvement, p = 0.00072. The lift's confidence interval runs from 5.64 to 20.74 points — even its pessimistic end clears the 4.67-point threshold set before the experiment ran, so the result is practically as well as statistically significant.",
      resultsTable: {
        headers: ["Group", "Hit-rate@10", "n", "95% CI"],
        rows: [
          ["Control (popularity)", "29.35%", "293", "24.43% – 34.81%"],
          ["Treatment (hybrid)", "42.54%", "315", "37.20% – 48.06%"],
        ],
      },
      resultsNote:
        "Hit-rate@10 counts a viewer as a hit if at least one of the ten recommended films was something they went on to rate highly in data the model never saw.",
      limitations: [
        "This is an offline experiment, not a live one — it measures recommendations against what viewers historically went on to rate highly, not against how they'd react to being shown these specific films. That's counterfactual evaluation, a known limitation of offline recommender testing rather than a shortcut taken here.",
        "The sample is small and fixed — with roughly 300 viewers per group, the test has about 90% power for the effect actually observed but only about 25% power for the smaller effect originally set as the threshold, and no more data can be collected.",
        "Tuning and testing used the same held-out data — the blend weight was chosen by its performance on the data later used for the significance test, giving the hybrid a small home-field advantage. A stricter design would separate a validation set for tuning from an untouched test set.",
      ],
      improvements: [
        "Richer content signal — genre tags are coarse, and many unrelated films share identical tag sets, which is a large part of why content-based scoring performed so poorly; plot summaries or sentence-transformer embeddings would likely change that conclusion",
        "A separate validation set for hyperparameter tuning, removing the double-dipping caveat above",
        "Scheduled retraining — the model is trained once and loaded at startup, so new users, films, and ratings are invisible until it's rebuilt",
        "Cold-start handling — viewers with no history get nothing today; content-based scoring could cover them, which is why it's kept in the blend despite its standalone performance",
        "Approximate nearest-neighbour retrieval — a full similarity matrix is fine at this scale, but a FAISS index would be the standard answer at a realistic catalogue size",
      ],
      footerTags: ["Recommender Systems", "A/B Testing", "Collaborative Filtering", "MLOps"],
    },
  },
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
      { label: "GitHub", url: "https://github.com/himanshumjain15/intelli-talent-alignment." },
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
      "Stratified the 1.8M+ combined corpus (Jigsaw + Twitter) down to a balanced 79K-sample to correct for severe class imbalance (91.7% non-toxic)",
      "Found only 2.6% vocabulary overlap between the two corpora, revealing sharp platform-specific toxic language patterns",
      "TruncatedSVD (LSA) to 200 dimensions with KMeans (k=2) recovered toxic/non-toxic structure, but clustered poorly (silhouette ≈ 0.10) on linearly inseparable features",
      "Switched from a staged Jigsaw→Twitter fine-tune (stalled at ~67% accuracy) to end-to-end DistilBERT training on the combined, balanced corpus, which trained stably across both sources",
      "Outperformed classical baselines (best: Logistic Regression, 0.915 ROC-AUC) with the fine-tuned DistilBERT, achieving F1 = 0.870 and 91% recall on held-out data",
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
            "Switched to direct end-to-end DistilBERT training on the combined, balanced corpus with consistent preprocessing, which trained stably across both sources — ultimately outperforming the best classical baseline (Logistic Regression, 0.915 ROC-AUC) with F1 = 0.870 and 91% recall on held-out data.",
        },
        {
          challenge: "The Jigsaw corpus was 91.7% non-toxic, making raw accuracy a misleading metric.",
          solution:
            "Stratified the 1.8M+ combined corpus down to a balanced 79K-sample and evaluated with precision, recall, F1, and confusion matrices instead of accuracy.",
        },
        {
          challenge:
            "KMeans on the TF-IDF/LSA features clustered poorly (silhouette ≈ 0.10) — toxic and non-toxic text overlap heavily in linear space.",
          solution: "Used that finding to justify moving from classical clustering to fine-tuned DistilBERT for the classification task.",
        },
      ],
      resultsSummary:
        "The fine-tuned DistilBERT outperformed every classical baseline — including the strongest, Logistic Regression at 0.915 ROC-AUC — achieving F1 = 0.870 and 91% recall on held-out data, after stratifying the 1.8M+ combined corpus down to a balanced 79K-sample to correct for Jigsaw's 91.7% non-toxic skew.",
      improvements: [
        "Multi-class targeting to identify which group a hate-speech instance is aimed at",
        "A real-time inference API for live moderation",
        "Multilingual toxicity detection beyond English",
      ],
      footerTags: ["NLP", "BERT", "Hate Speech Detection", "Machine Learning"],
    },
  },
  {
    id: "loan-prediction-ml",
    title: "Loan Prediction — Decision Tree & Random Forest",
    subtitle:
      "A tree-based ML pipeline predicting loan approval from applicant data, using SHAP to explain what drives the decision.",
    description:
      "Predicts loan approval (Approved/Rejected) from applicant demographic and financial data using Decision Tree and Random Forest models, with SHAP for feature-level interpretability.",
    problem:
      "Given applicant demographic and financial information, predict whether a loan application will be Approved or Rejected — and more importantly, explain which factors drive that decision, since black-box predictions aren't actionable for lenders.",
    approach:
      "Analyzed 614 loan applications (12 features, moderately imbalanced at 68% approved) from the Analytics Vidhya Loan Prediction dataset. Applied log transforms and outlier removal, built sklearn Pipelines for imputation and encoding, tuned a Decision Tree with GridSearchCV and a Random Forest with RandomizedSearchCV, then used SHAP to explain feature importance and compare the final models.",
    results: [
      "Random Forest achieved 83.74% test accuracy and 0.7955 ROC AUC, outperforming the Decision Tree (79.67% accuracy, 0.7616 ROC AUC)",
      "Identified Credit History as the single most powerful predictor — applicants with credit history had ~80% approval rate vs. ~8% without",
      "Used SHAP feature importance to validate and explain model decisions beyond raw accuracy",
      "Built reusable sklearn Pipelines for imputation and encoding to prevent data leakage during cross-validation",
    ],
    lessons:
      "The biggest lesson was that a single categorical feature — credit history — dominated model decisions almost entirely, which SHAP made immediately visible in a way raw accuracy metrics couldn't. It reinforced that interpretability tools like SHAP are as important as the model itself when predictions need to be explained to stakeholders.",
    tags: ["Python", "scikit-learn", "Decision Tree", "Random Forest", "SHAP", "GridSearchCV"],
    year: "2026",
    links: [{ label: "GitHub", url: "https://github.com/himanshumjain15/loan-prediction-ml" }],
    featured: false,
    image: "/Portfolio/images/loan-prediction-cover.svg",
    workflow: [
      "Exploratory Data Analysis",
      "Log Transform + Outlier Removal",
      "sklearn Pipelines (Imputation + Encoding)",
      "Decision Tree with GridSearchCV",
      "Random Forest with RandomizedSearchCV",
      "SHAP Feature Importance",
      "Final Model Comparison",
    ],
  },
  {
    id: "lm-assisted-automated-eda-pipeline",
    title: "LM-Assisted Automated EDA Pipeline",
    subtitle:
      "An end-to-end Python workflow that ingests any CSV, computes robust statistics, and generates verified LLM-driven dataset insights.",
    description:
      "Built an automated EDA pipeline using Python, Pandas, and Seaborn with Claude API integration and a fact-verification layer to ensure narrative outputs use only computed values.",
    problem:
      "Exploratory data analysis is often manual, repetitive, and difficult to scale across datasets. Analysts spend significant time producing baseline statistics, checking data quality, creating visualizations, and writing summaries, which slows iteration and increases reporting inconsistency.",
    approach:
      "Developed a reusable Python pipeline that accepts arbitrary CSV inputs, computes descriptive statistics, performs outlier detection with the IQR method, and auto-generates 5+ visualizations using Seaborn. Added Claude API integration behind a verification layer that passes only computed statistical outputs to the model, constraining generated narratives to factual dataset values.",
    results: [
      "Automated end-to-end EDA from raw CSV ingestion to structured Markdown reporting",
      "Generated descriptive statistics, IQR-based outlier checks, and 5+ visualizations per run",
      "Produced 5-10 dataset-specific narrative insights for each dataset execution",
      "Maintained zero hallucinated numeric values by verifying all LLM inputs against computed statistics",
    ],
    lessons:
      "The key takeaway was that LLM quality in analytics depends heavily on context control, not just prompting. By restricting model input to verified computed metrics, the pipeline retained narrative flexibility while preserving statistical correctness and trustworthiness.",
    tags: ["Python", "Claude API", "Pandas", "Seaborn", "EDA", "Automation"],
    year: "2026",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/himanshumjain15/DM-Assignment-02-Automated-Dataset-Insight-Generator-LLM-Assisted-EDA-",
      },
    ],
    featured: false,
    image: "/Portfolio/images/lm-assisted-eda-cover.svg",
  },
  {
    id: "titanic-logistic-regression",
    title: "Titanic Survival Prediction — Logistic Regression",
    subtitle:
      "A complete ML pipeline predicting Titanic passenger survival with Logistic Regression, GridSearchCV tuning, and extensive EDA.",
    description:
      "Predicts Titanic passenger survival using a full sklearn Pipeline (Logistic Regression + GridSearchCV), with extensive EDA uncovering the key drivers of survival.",
    problem:
      "Predicting which Titanic passengers survived requires more than a single strong feature — it means untangling how gender, class, age, and family size interact, and building a leakage-free pipeline that generalizes beyond the training data.",
    approach:
      "Built an end-to-end sklearn Pipeline with separate preprocessing sub-pipelines: median imputation + StandardScaler for numeric features (age, fare, sibsp, parch), mode imputation + OneHotEncoder for nominal categoricals (sex, embarked), and OrdinalEncoder for class. Tuned Logistic Regression's regularization strength C over {0.01, 0.1, 1, 10, 100} with 5-fold stratified GridSearchCV optimizing ROC-AUC.",
    results: [
      "Achieved ~81% test accuracy and ~0.87 test ROC-AUC (~0.86 in 5-fold CV)",
      "Found gender was the strongest predictor: females survived at ~74% vs. ~19% for males",
      "Found class mattered significantly: 1st class survived at 63% vs. 24% for 3rd class, despite 3rd class being 55% of passengers",
      "Identified a strong interaction effect: 1st-class females had a 96% survival rate vs. 13% for 3rd-class males",
    ],
    lessons:
      "The biggest takeaway was that survival wasn't driven by any single feature in isolation — gender and class interacted strongly, with a 1st-class female's odds (96%) nearly the inverse of a 3rd-class male's (13%). This reinforced the value of visualizing interaction effects during EDA before modeling, not just univariate relationships.",
    tags: ["Python", "scikit-learn", "Logistic Regression", "GridSearchCV", "EDA"],
    year: "2026",
    links: [{ label: "GitHub", url: "https://github.com/himanshumjain15/Titanic-Logistic-Regression-Analysis" }],
    featured: false,
    image: "/Portfolio/images/titanic-cover.svg",
    workflow: [
      "Imports & Data Loading",
      "Dataset Overview",
      "Exploratory Data Analysis",
      "Feature Engineering & Preprocessing",
      "Model Building",
      "Model Evaluation",
      "Conclusion",
    ],
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
    image: "/Portfolio/images/wine-quality-cover.svg",
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
