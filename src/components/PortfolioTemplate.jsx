// src/components/PortfolioTemplate.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* ---------- CONFIG ---------- */
const CONFIG = {
  RESUME_PATH: "/VenkataSaiKumar_Erla_Updated_Resume.pdf",
  brandName: "VenkatasaiKumar Erla",
  roleLine: "Data Science Graduate Student | University of New Haven (Expected 2026)",
  hero: {
    videoSrc: "/pb.mp4", // file in /public
  },
  contacts: {
    githubUrl: "https://github.com/venkatasaikumarerla",
    email: "venkatasaikumarerla@email.com",
    linkedinUrl: "https://www.linkedin.com/in/venkata-sai-kumar-erla-327155263/",
    handshakeUrl: "https://newhaven.joinhandshake.com/profiles/8b8dbnvenkatasaikumar999",
    phone: "203-627-5831",
  },
  summary:
    "Dynamic and results-oriented Data Science graduate student at the University of New Haven (expected 2026), honored with the Dean’s Scholarship for academic excellence. Experienced in building and deploying advanced machine learning, deep learning, and natural language processing solutions with Python, R, SQL, TensorFlow, and AWS. Proven ability to deliver measurable impact through projects such as text summarization (12% ROUGE improvement) and sentiment analysis (85% accuracy). Adept at data engineering, visualization, and cloud-based solutions, with a strong drive to transform data into actionable strategies that accelerate innovation and business success.",
  projects: [
    {
      id: 1,
      title: "Text Summarization Using NLP",
      description:
        "Engineered an extractive summarization pipeline with NLTK & spaCy; achieved +12% ROUGE vs. baseline.",
      image:
        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'><rect width='100%' height='100%' fill='%23111111'/><text x='50%' y='50%' font-size='48' fill='%23b91c1c' text-anchor='middle' dominant-baseline='middle'>Project Cover</text></svg>",
      link: "#",
      status: "Live",
    },
    {
      id: 2,
      title: "Sentiment Analysis of Social Media Data",
      description:
        "Built LSTM-based classifier for Twitter sentiment; 85% accuracy with dashboards for trend insights.",
      image: "/assets/project2.jpg",
      link: "#",
      status: "Live",
    },
    {
      id: 3,
      title: "MLOps Pipeline (Coming Soon)",
      description:
        "End-to-end training & deployment with CI/CD, experiment tracking, and monitoring.",
      image: "",
      link: "#",
      status: "Coming Soon",
    },
    {
      id: 4,
      title: "Recommendation System (Coming Soon)",
      description:
        "Personalized item ranking with embeddings and candidate re-ranking.",
      image: "",
      link: "#",
      status: "Coming Soon",
    },
    {
      id: 5,
      title: "Time-series Forecasting (Coming Soon)",
      description:
        "Probabilistic forecasting with feature engineering and backtesting.",
      image: "",
      link: "#",
      status: "Coming Soon",
    },
  ],
  about: {
    summary:
      "As a Data Science professional-in-training, I bring a proven track record of delivering innovative solutions in NLP, predictive modeling, and cloud-based analytics. My approach combines technical rigor with a focus on real-world business impact.",
    bullets: [
      "Improved NLP summarization systems with measurable ROUGE gains.",
      "Developed sentiment analysis pipelines with deep learning, surpassing baseline accuracy by 15%.",
      "Created interactive dashboards and visualizations to communicate insights effectively to stakeholders.",
      "Recognized with Dean’s Scholarship for outstanding academic performance.",
    ],
  },
  skills: [
    "Python","R","SQL","TensorFlow","Scikit-learn","NLTK","spaCy",
    "Tableau","Matplotlib","Pandas","NumPy","AWS","Hadoop (Academic)",
    "GitHub","Jupyter Notebook",
  ],
  stats: [
    { label: "Projects Delivered", value: "12+" },
    { label: "Experience", value: "Research & Internships" },
    { label: "Recognition", value: "Dean’s Scholarship" },
  ],
  education: [
    {
      school: "University of New Haven – Tagliatela College of Engineering",
      degree: "Master of Science in Data Science",
      location: "West Haven, CT, USA",
      period: "Expected May 2026",
      honors: ["Dean’s Scholarship (Merit)"],
      coursework: [
        "Machine Learning","Deep Learning","Natural Language Processing",
        "Big Data","Data Visualization","Leadership in Data & AI Products","Data Ethics",
      ],
      details: [
        "Graduate research focused on NLP summarization and sentiment analysis",
        "Mentored peers on ML workflows and model evaluation",
      ],
      projects: [
        "Text Summarization using extractive methods (ROUGE +12%)",
        "Twitter Sentiment Analysis with LSTM (85% accuracy)",
      ],
      logoSrc: null,
    },
    {
      school: "Chalapathi Institute of Engineering & Technology, India",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      location: "Guntur, India",
      period: "2020 – 2024",
      details: ["Built strong foundations in computer science, algorithms, and programming."],
      projects: [
        "Mini-projects: CRUD apps with SQL + Python",
        "Capstone groundwork in data preprocessing and EDA",
      ],
      logoSrc: null,
    },
  ],
};

/* ---------- Counter ---------- */
const Counter = ({ target }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = parseInt(target.replace(/[^0-9]/g, ""));
    if (isNaN(end) || end <= 0) return;
    const stepTime = Math.max(16, Math.floor(2000 / end));
    const t = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(t);
    }, stepTime);
    return () => clearInterval(t);
  }, [target]);
  return (
    <span>
      {count}
      {target.replace(/^[0-9]+/, "")}
    </span>
  );
};

/* ---------- Typewriter ---------- */
function Typewriter({ text, speed = 110, startDelay = 300, className = "" }) {
  const [shown, setShown] = useState("");
  useEffect(() => {
    let i = 0;
    let timer;
    const kickoff = setTimeout(() => {
      timer = setInterval(() => {
        i += 1;
        setShown(text.slice(0, i));
        if (i >= text.length) clearInterval(timer);
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(kickoff);
      if (timer) clearInterval(timer);
    };
  }, [text, speed, startDelay]);
  return (
    <span className={className}>
      {shown}
      <span
        className="inline-block w-2 h-6 align-bottom ml-1 animate-pulse"
        style={{ backgroundColor: "currentColor", opacity: 0.8 }}
      />
    </span>
  );
}

/* ---------- Page ---------- */
export default function PortfolioTemplate() {
  /* Theme */
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved);
    document.documentElement.classList.toggle("dark", saved === "dark");
    document.documentElement.style.colorScheme = saved;
  }, []);
  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
    document.documentElement.style.colorScheme = next;
  };

  // Softer, bluer light theme (reduced white)
  const palette =
    theme === "dark"
      ? {
          page: "bg-black text-gray-100",
          panel: "bg-zinc-900",
          card: "bg-black",
          border: "border-zinc-800",
          muted: "text-gray-300",
          ring: "ring-zinc-800",
          accent: "text-red-600",
          chipBg: "bg-red-600",
          chipAlt: "bg-zinc-800",
        }
      : {
          page: "bg-gradient-to-b from-sky-200 via-sky-100 to-sky-50 text-slate-900",
          panel: "bg-white/85 backdrop-blur-sm",
          card: "bg-white",
          border: "border-sky-100",
          muted: "text-slate-800",
          ring: "ring-sky-200",
          accent: "text-sky-700",
          chipBg: "bg-sky-600",
          chipAlt: "bg-sky-50",
        };

  /* Resume presence */
  const [resumeInfo, setResumeInfo] = useState({ exists: false, lastModified: null });
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(CONFIG.RESUME_PATH, { method: "HEAD", cache: "no-store" });
        if (res.ok) {
          const lm = res.headers.get("Last-Modified");
          setResumeInfo({ exists: true, lastModified: lm ? new Date(lm) : null });
        }
      } catch {}
    })();
  }, []);

  const downloadResume = async () => {
    try {
      const r = await fetch(CONFIG.RESUME_PATH, { method: "HEAD", cache: "no-store" });
      if (!r.ok) throw new Error("Not found");
      const a = document.createElement("a");
      a.href = CONFIG.RESUME_PATH + "?v=" + Date.now();
      a.download = "VenkataSaiKumar_Erla_Updated_Resume.pdf";
      document.body.appendChild(a); a.click(); a.remove();
    } catch {
      alert("Resume not found at " + CONFIG.RESUME_PATH + ". Place the PDF in /public.");
    }
  };

  const viewResumeOnline = async () => {
    try {
      const r = await fetch(CONFIG.RESUME_PATH, { method: "HEAD", cache: "no-store" });
      if (!r.ok) throw new Error("Not found");
      const url = `${CONFIG.RESUME_PATH}#page=1&zoom=page-width&v=${Date.now()}`;
      const a = document.createElement("a");
      a.href = url; a.target = "_blank"; a.rel = "noopener,noreferrer";
      document.body.appendChild(a); a.click(); a.remove();
    } catch {
      alert("Resume not found at " + CONFIG.RESUME_PATH + ". Place the PDF in /public.");
    }
  };

  /* Education collapsible */
  const [openEd, setOpenEd] = useState({});
  const toggleEd = (idx) => setOpenEd((s) => ({ ...s, [idx]: !s[idx] }));

  return (
    <div className={`min-h-screen ${palette.page} font-sans`}>
      {/* NAV */}
      <nav className="relative z-50 max-w-6xl mx-auto px-6 sm:px-8 py-6 flex items-center justify-between">
        <div className={`text-xl font-bold ${palette.accent}`}>{CONFIG.brandName}</div>
        <div className="flex items-center gap-4">
          <a href="#summary" className="text-sm hover:underline">Summary</a>
          <a href="#projects" className="text-sm hover:underline">Projects</a>
          <a href="#about" className="text-sm hover:underline">About</a>
          <a href="#education" className="text-sm hover:underline">Education</a>

          {/* NEW: GitHub link in nav */}
          <a
            href={CONFIG.contacts.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm hover:underline"
          >
            GitHub ↗
          </a>

          {/* LinkedIn link in nav (real anchor so pop-up blockers don't interfere) */}
          <a
            href={CONFIG.contacts.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm hover:underline"
          >
            LinkedIn ↗
          </a>

          <a href="#contact" className="text-sm hover:underline">Contact</a>

          <a
            href={CONFIG.contacts.handshakeUrl}
            target="_blank"
            rel="noreferrer"
            className={`text-sm font-semibold ${palette.accent} hover:underline`}
          >
            Handshake ↗
          </a>

          {/* Theme toggle */}
          <button
            onClick={() => {
              const next = theme === "dark" ? "light" : "dark";
              setTheme(next);
              localStorage.setItem("theme", next);
              document.documentElement.classList.toggle("dark", next === "dark");
              document.documentElement.style.colorScheme = next;
            }}
            aria-label="Toggle theme"
            className={`rounded-full border px-3 py-1 text-sm ${theme === "dark" ? "border-zinc-700/50 hover:bg-zinc-700/20" : "border-sky-200 hover:bg-sky-100/60"}`}
            title="Toggle theme"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>

          <button onClick={downloadResume} className={`text-sm font-semibold ${palette.accent} hover:underline`}>Resume ⤓</button>
        </div>
      </nav>

      {/* HERO — left text NO BOX, right video card */}
      <header className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-stretch">
          {/* Left (3/5): intro text WITHOUT any panel/box */}
          <div className="md:col-span-3 flex items-center">
            <div className="py-4">
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                <span className="sr-only">Hi, I’m {CONFIG.brandName}</span>
                <Typewriter
                  text={`Hi, I’m ${CONFIG.brandName}`}
                  speed={110}           // slower
                  startDelay={300}
                  className="text-red-600" // red text
                />
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                className="mt-3 text-xl sm:text-2xl font-semibold opacity-95"
              >
                {CONFIG.roleLine}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.0, duration: 0.5 }}
                className="mt-4 text-base sm:text-lg opacity-90"
              >
                Passionate about building ML/NLP systems that deliver measurable business value — from model training to deployment and stakeholder storytelling.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.3, duration: 0.5 }}
                className="mt-6 flex gap-3 flex-wrap"
              >
                <button onClick={downloadResume} className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded">📄 Download Resume</button>
                <button onClick={viewResumeOnline} className="inline-flex items-center px-4 py-2 bg-zinc-900 text-white hover:bg-zinc-800 rounded font-semibold">View Online</button>
              </motion.div>
            </div>
          </div>

          {/* Right (2/5): video card */}
          <div className="md:col-span-2">
            <div className={`${palette.panel} rounded-2xl shadow-md overflow-hidden h-full`}>
              <div className="relative h-64 sm:h-72 md:h-full">
                <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
                  <source src={CONFIG.hero.videoSrc} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* WHY CHOOSE ME */}
      <section id="impact" className={`${palette.panel} mt-10 py-12 px-6 sm:px-8 shadow-md`}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className={`text-3xl font-bold mb-6 ${palette.accent}`}>Why Choose Me?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className={`${palette.card} p-6 rounded-xl shadow-lg`}>
              <div className="text-4xl font-extrabold text-red-500"><Counter target="12%+" /></div>
              <p className={`mt-2 font-medium ${palette.muted}`}>Improvement in NLP summarization accuracy (ROUGE)</p>
            </div>
            <div className={`${palette.card} p-6 rounded-xl shadow-lg`}>
              <div className="text-4xl font-extrabold text-red-500"><Counter target="85%" /></div>
              <p className={`mt-2 font-medium ${palette.muted}`}>Deep learning sentiment analysis accuracy</p>
            </div>
            <div className={`${palette.card} p-6 rounded-xl shadow-lg`}>
              <div className="text-4xl font-extrabold text-red-500">Dean’s</div>
              <p className={`mt-2 font-medium ${palette.muted}`}>Scholarship awarded for academic excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <main className="max-w-6xl mx-auto px-6 sm:px-8 py-16">
        {/* SUMMARY */}
        <section id="summary" className={`mb-16 ${palette.panel} p-6 rounded-2xl shadow-md`}>
          <h2 className={`text-2xl font-semibold ${palette.accent}`}>Professional Summary</h2>
          <p className={`mt-4 text-lg font-semibold leading-relaxed ${palette.muted}`}>{CONFIG.summary}</p>
        </section>

        {/* PROJECTS (2 live + 3 coming soon) */}
        <section id="projects" className="mb-16">
          <h2 className={`text-2xl font-semibold mb-6 ${palette.accent}`}>Key Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONFIG.projects.map((p) => (
              <motion.a
                key={p.id}
                href={p.status === "Coming Soon" ? undefined : p.link}
                whileHover={{ y: p.status === "Coming Soon" ? 0 : -6 }}
                className={`block ${palette.panel} rounded-2xl shadow-md overflow-hidden ${
                  p.status === "Coming Soon" ? "opacity-90" : "hover:ring-2 hover:ring-red-600"
                }`}
                onClick={(e) => { if (p.status === "Coming Soon") e.preventDefault(); }}
              >
                <div className={`h-48 overflow-hidden flex items-center justify-center ${theme === "dark" ? "bg-gray-800" : "bg-sky-50"}`}>
                  {p.image ? (
                    <img src={p.image} alt={p.title} className={`w-full h-full object-cover ${p.status === "Coming Soon" ? "grayscale" : ""}`} />
                  ) : (
                    <span className="text-red-500/80">{p.status === "Coming Soon" ? "Coming soon" : "Project Cover"}</span>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg">{p.title}</h3>
                    {p.status === "Coming Soon" && (
                      <span className="text-xs px-2 py-0.5 rounded bg-red-600 text-white">Coming soon</span>
                    )}
                  </div>
                  {p.description && <p className={`mt-2 text-sm font-medium ${palette.muted}`}>{p.description}</p>}
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* LINKEDIN — WHOLE CARD IS A LINK (reliable open) */}
        <a
          id="linkedin"
          href={CONFIG.contacts.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className={`mb-16 block ${palette.panel} p-6 rounded-2xl shadow-md hover:ring-2 hover:ring-red-600`}
          aria-label="Open LinkedIn profile"
        >
          <div className="flex items-center justify-between">
            <h2 className={`text-2xl font-semibold ${palette.accent}`}>Latest on LinkedIn</h2>
            <span className="text-sm underline text-red-500 hover:text-red-400">
              Open LinkedIn ↗
            </span>
          </div>
          <p className="mt-4 text-sm opacity-80">
            Pin top posts on LinkedIn so visitors quickly see your latest wins. (Direct feed embedding needs LinkedIn API; this card links to your profile.)
          </p>
        </a>

        {/* ABOUT + SKILLS + STATS */}
        <section id="about" className="mb-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className={`${palette.panel} p-6 rounded-2xl shadow-md lg:col-span-2`}>
            <h2 className={`text-2xl font-semibold ${palette.accent}`}>About Me</h2>
            <p className={`mt-4 text-lg font-semibold ${palette.muted}`}>{CONFIG.about.summary}</p>
            <div className="mt-6">
              <h3 className="font-medium text-lg">Career Highlights</h3>
              <ul className={`mt-2 list-disc list-inside space-y-1 font-medium ${palette.muted}`}>
                {CONFIG.about.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
              </ul>
            </div>
          </div>
          <aside className={`${palette.panel} p-6 rounded-2xl shadow-md`}>
            <div className="mb-4 w-full flex justify-center">
              <div className={`h-24 w-24 rounded-full ring-2 ${theme === "dark" ? "ring-red-600 bg-red-600/10 text-red-500" : "ring-sky-600 bg-sky-600/10 text-sky-700"} flex items-center justify-center text-3xl font-bold`}>
                U
              </div>
            </div>
            <h3 className="font-medium text-lg">Core Skills</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {CONFIG.skills.map((s) => (
                <span key={s} className={`px-3 py-1 rounded-full text-sm font-semibold shadow ${theme === "dark" ? "bg-red-600 text-white" : "bg-sky-600 text-white"}`}>
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <h3 className="font-medium text-lg">Quick Stats</h3>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {CONFIG.stats.map((st, i) => (
                  <div key={i} className={`p-3 rounded shadow ${theme === "dark" ? "bg-red-600 text-white" : "bg-sky-600 text-white"}`}>
                    <div className="text-sm">{st.label}</div>
                    <div className="text-xl font-bold">{st.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>

        {/* EDUCATION */}
        <section id="education" className={`mb-16 ${palette.panel} p-6 rounded-2xl shadow-md`}>
          <h2 className={`text-2xl font-semibold ${palette.accent}`}>Education</h2>
          <div className="mt-4 space-y-6">
            {CONFIG.education.map((ed, idx) => (
              <div key={idx} className={`p-5 ${palette.card} rounded-xl border ${palette.border} relative`}>
                <span className="absolute -left-2 top-5 h-3 w-3 rounded-full bg-red-600" />
                <div className="flex items-start gap-4">
                  <div className={`h-10 w-10 rounded ${theme === "dark" ? "bg-red-600/20 ring-1 ring-zinc-700 text-red-500" : "bg-sky-600/10 ring-1 ring-sky-200 text-sky-700"} flex items-center justify-center font-bold`}>
                    {ed.school?.[0]}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-semibold">{ed.school}</h3>
                      {ed.honors?.map((h, i) => (
                        <span key={i} className="px-2 py-0.5 text-xs rounded bg-red-600 text-white">{h}</span>
                      ))}
                    </div>
                    <p className={`text-sm font-medium ${palette.muted}`}>
                      {ed.degree}{ed.location ? ` · ${ed.location}` : ""} — {ed.period}
                    </p>

                    {ed.projects?.length > 0 && (
                      <ul className={`list-disc list-inside mt-3 space-y-1 ${palette.muted}`}>
                        {ed.projects.map((p, i) => <li key={i}><span className="font-medium">{p}</span></li>)}
                      </ul>
                    )}

                    {(ed.coursework?.length || ed.details?.length) && (
                      <div className="mt-3">
                        <button onClick={() => toggleEd(idx)} className="text-xs text-red-500 hover:text-red-400 underline">
                          {openEd[idx] ? "Hide details" : "Show coursework & details"}
                        </button>
                        {openEd[idx] && (
                          <div className="mt-3">
                            {ed.coursework?.length > 0 && (
                              <div className="mb-2 flex flex-wrap gap-2">
                                {ed.coursework.map((c, i) => (
                                  <span key={i} className={`px-2 py-1 text-xs rounded-full ring-1 ${theme === "dark" ? "bg-zinc-800 text-gray-300 ring-zinc-700" : "bg-sky-50 text-slate-800 ring-sky-200"}`}>
                                    {c}
                                  </span>
                                ))}
                              </div>
                            )}
                            {ed.details?.length > 0 && (
                              <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 space-y-1">
                                {ed.details.map((d, i) => <li key={i}>{d}</li>)}
                              </ul>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className={`${palette.panel} p-6 rounded-2xl shadow-md`}>
          <h2 className={`text-2xl font-semibold ${palette.accent}`}>Get in Touch</h2>
          <p className={`mt-2 font-medium ${palette.muted}`}>Interested in collaborating or hiring? Let’s talk.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const f = new FormData(e.target);
              const name = encodeURIComponent(f.get("name") || "");
              const from = encodeURIComponent(f.get("email") || "");
              const message = encodeURIComponent(f.get("message") || "");
              window.location.href =
                `mailto:${CONFIG.contacts.email}?subject=Portfolio%20contact%20from%20${name}` +
                `&body=From:%20${from}%0D%0A%0D%0A${message}`;
              e.target.reset();
            }}
            className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <input name="name" className={`px-4 py-3 ${palette.card} border ${palette.border} rounded-md`} placeholder="Your name" required />
            <input name="email" type="email" className={`px-4 py-3 ${palette.card} border ${palette.border} rounded-md`} placeholder="Your email" required />
            <textarea name="message" className={`sm:col-span-2 px-4 py-3 ${palette.card} border ${palette.border} rounded-md`} rows={4} placeholder="Message" required />
            <button type="submit" className="sm:col-span-2 inline-flex items-center justify-center px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-md font-semibold shadow">
              Send Message
            </button>
          </form>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} {CONFIG.brandName} — Built with ❤️ in Netflix style
        </div>
      </footer>

      {/* Floating Resume Actions */}
      <div className="fixed bottom-6 right-6 space-y-2 text-right">
        <div className="flex gap-2 justify-end">
          <button
            onClick={downloadResume}
            className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded shadow-lg"
            title="Download my latest resume"
          >
            📄 Download Resume
          </button>
          <button
            onClick={viewResumeOnline}
            className="inline-flex items-center px-3 py-2 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded shadow"
            title="Open resume in a new tab"
          >
            View Online
          </button>
        </div>
        <div className="text-xs text-gray-400">
          {resumeInfo.exists ? (
            <span>Last updated: {resumeInfo.lastModified ? resumeInfo.lastModified.toLocaleDateString() : "—"}</span>
          ) : (
            <span>Resume not found at {CONFIG.RESUME_PATH}</span>
          )}
        </div>
      </div>
    </div>
  );
}
