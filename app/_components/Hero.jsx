"use client"
import { useState, useMemo } from "react";
import { Book, MapPin, Mail, Phone, Link } from "lucide-react";

// --- Contribution Graph ---
function ContributionGraph() {
  const totalDays = 53 * 7;

  const levels = useMemo(() => {
    return Array.from({ length: totalDays }, (_, i) => {
      if (i > 100 && i < 120) return 0;
      const rand = Math.random();
      if (rand > 0.95) return 4;
      if (rand > 0.85) return 3;
      if (rand > 0.70) return 2;
      if (rand > 0.50) return 1;
      return 0;
    });
  }, []);

  const levelColors = {
    0: "#161b22",
    1: "#0e4429",
    2: "#006d32",
    3: "#26a641",
    4: "#39d353",
  };

  return (
    <div className="border border-[#30363d] rounded-md p-4 mb-8">
      <h3 className="text-sm font-normal text-[#c9d1d9] mb-3">
        765 contributions in the last year
      </h3>
      <div
        className="overflow-x-auto"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(53, 10px)",
          gridTemplateRows: "repeat(7, 10px)",
          gap: "3px",
        }}
      >
        {levels.map((level, i) => (
          <div
            key={i}
            style={{
              width: 10,
              height: 10,
              borderRadius: 2,
              backgroundColor: levelColors[level],
            }}
          />
        ))}
      </div>
    </div>
  );
}

// --- Repo Card ---
function RepoCard({ imageSrc, title, description, tags, language, langColor }) {
  return (
    <div className="border border-[#30363d] rounded-md bg-[#0d1117] overflow-hidden flex flex-col">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-[180px] object-cover border-b border-[#30363d]"
      />
      <div className="p-4 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-base font-semibold text-[#58a6ff] flex items-center gap-2">
            <span className="text-[#8b949e]">
              <Book size={16} />
            </span>
            {title}
          </h3>
          <span className="text-xs text-[#8b949e] border border-[#30363d] px-2 py-0.5 rounded-full shrink-0 ml-2">
            Public
          </span>
        </div>
        <p className="text-xs text-[#8b949e] mb-4 flex-1">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-[#58a6ff] bg-[rgba(56,139,253,0.1)] px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-xs text-[#8b949e]">
          <span
            className="w-3 h-3 rounded-full inline-block shrink-0"
            style={{ backgroundColor: langColor }}
          />
          {language}
        </div>
      </div>
    </div>
  );
}

// --- Main Portfolio Component ---
export default function Hero() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "SQL", "Python", "Tableau", "Excel"];

  const repos = [
    {
      imageSrc: "Assests/Dashboard.png",
      title: "Blinkit Sales & Customer Insights Dashboard",
      description:
        "An end-to-end retail analytics project analyzing Blinkit dataset to uncover insights on sales trends, product performance, and customer satisfaction. Includes data cleaning, transformation, and visualization through an interactive dashboard showcasing KPIs like revenue, item visibility, ratings, and category-wise sales distribution.",
      tags: ["excel"],
      language: "Python",
      langColor: "#3572A5",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
      title: "Project Title Two",
      description:
        "A brief description of your second project. Mention what it solves or the main technologies used.",
      tags: ["sql", "excel", "analytics"],
      language: "SQL",
      langColor: "#e38c00",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] text-sm leading-relaxed" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" }}>
      <div className="max-w-[1280px] mx-auto px-6 py-6 flex flex-col md:flex-row gap-8">

        {/* ── Sidebar ── */}
        <aside className="w-full md:w-[25%] md:min-w-[280px]">
          <img
            src="Assests/IMG-20250312-WA0631.jpg"
            alt="Profile"
            className="w-full max-w-[280px] aspect-square rounded-full border-2 border-[#30363d] object-cover mb-4 md:mx-0 mx-auto block"
          />

          <h1 className="text-2xl font-semibold text-white leading-tight">Abhishek Kumar Patel</h1>
          <h2 className="text-xl font-light text-[#8b949e] mb-4">
            Data Analyst | Business Analyst
          </h2>

          <p className="text-sm text-[#c9d1d9] mb-4">
            Data visualization enthusiast focused on transforming complex data into clear, actionable insights. Experienced in analyzing datasets, identifying meaningful patterns, and presenting findings through intuitive dashboards and visual storytelling. Passionate about enabling data-driven decision-making through clarity and design.
          </p>

          <button className="w-full py-1.5 px-4 text-sm font-medium text-[#c9d1d9] bg-[#21262d] border border-[rgba(240,246,252,0.1)] rounded-md hover:bg-[#30363d] transition-colors mb-4 cursor-pointer">
            Book a Call
          </button>

          {/* Contact Details */}
          <ul className="mb-6 pb-6 border-b border-[#30363d] space-y-2">
            <li className="flex items-center gap-2 text-[#c9d1d9]">
              <span className="text-[#8b949e]">
                <MapPin size={16} />
              </span>
              <span>New Delhi, India</span>
            </li>
            <li className="flex items-center gap-2 text-[#c9d1d9]">
              <span className="text-[#8b949e]">
                <Mail size={16} />
              </span>
              <span>abhishekpatel12131@gmail.com</span>
            </li>
            <li className="flex items-center gap-2 text-[#c9d1d9]">
              <span className="text-[#8b949e]">
                <Phone size={16} />
              </span>
              <span>+91 91719 92670</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#8b949e]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </span>
              <a
                href="https://www.linkedin.com/in/abhiiiiii21"
                target="_blank"
                rel="noreferrer"
                className="text-[#58a6ff] hover:underline"
              >
                LinkedIn
              </a>
            </li>
          </ul>

          {/* Skills */}
          <div>
            <h3 className="text-base font-semibold text-[#c9d1d9] mb-3">Skills & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "SQL", "Pandas", "NumPy", "Excel", "Tableau"].map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-2.5 py-1 rounded-full bg-[rgba(56,139,253,0.1)] text-[#58a6ff] border border-[rgba(56,139,253,0.2)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </aside>

        {/* ── Main Content ── */}
        <main className="flex-1 min-w-0">
          {/* Tabs */}
          <nav className="flex border-b border-[#30363d] mb-6">
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 font-semibold text-[#c9d1d9] border-b-2 border-[#f78166] -mb-px no-underline"
            >
              <Book size={16} />
              Repositories
              <span className="bg-[rgba(110,118,129,0.4)] text-[#c9d1d9] rounded-full px-2 py-0.5 text-xs font-medium">
                2
              </span>
            </a>
          </nav>

          {/* Filters */}
          <div className="flex gap-4 mb-6 flex-wrap">
            <input
              type="text"
              placeholder="Find a repository..."
              className="flex-1 min-w-[160px] px-3 py-1.5 bg-[#0d1117] border border-[#30363d] text-[#c9d1d9] rounded-md text-sm focus:outline-none focus:border-[#58a6ff]"
            />
            <div className="flex gap-2 flex-wrap">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-4 py-1.5 border border-[#30363d] text-[#c9d1d9] rounded-md text-sm cursor-pointer transition-colors
                    ${activeFilter === f ? "bg-[#21262d]" : "bg-[#0d1117] hover:bg-[#30363d]"}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Repo Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
            {repos.map((repo) => (
              <RepoCard key={repo.title} {...repo} />
            ))}
          </div>

          {/* Contribution Graph */}
          <ContributionGraph />
        </main>
      </div>
    </div>
  );
}