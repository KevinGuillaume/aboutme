import { FaGithub, FaLinkedin, FaXTwitter, FaFileLines } from "react-icons/fa6";
import Card from './components/Card'

const skills = ["JavaScript", "TypeScript", "React", "Node.js", "MySQL", "Postgres", "NoSQL (MongoDB)", "Asana", "Tailwind", "Bootstrap", "MaterialUI", "FastAPI", "Gunicorn"]

const projects = [
  {
    title: "Gardenia",
    link: "https://gardenia-g7p9.onrender.com/",
    linkLabel: "→ view site",
    description: "A personal project for managing rental properties. Tracking tenants, leases, accounting, and payments in one place.",
    tags: ["React", "TypeScript", "Node", "Postgres", "AI", "Prisma", "Stripe"],
  },
  {
    title: "Shadow Sports Trader",
    link: "https://github.com/KevinGuillaume/ShadowTrader",
    linkLabel: "→ view code",
    description: "A polymarket aggregator that lets you look at current and upcoming sports games. Shows their odds and additional information. Lets you see players on a team's roster and see how they perform against their opponent.",
    tags: ["API", "React", "TypeScript", "Python", "Postgres"],
  },
  {
    title: "Realtime Stocks",
    link: "https://github.com/KevinGuillaume/RealtimeStocks",
    linkLabel: "→ view code",
    description: "A web app where a trader can watch live stock charts with technical analysis tools, and set custom alerts (\"notify me when X happens\") that fire in real time.",
    tags: ["React", "TypeScript", "Python", "WebSockets", "Postgres"],
  },
  {
    title: "Agents Find Jobs",
    link: "https://agentsfindjobs.vercel.app",
    linkLabel: "→ visit site",
    description: "A web application meant for agentic payments to handle job searching. Payments are handled through MPP.",
    tags: ["Next.js", "Blockchain", "Tempo", "MPP"],
  },
]

function App() {

  return (
    <div className="max-w-[840px] mx-auto px-6 pt-14 pb-24">

      {/* window chrome */}
      <div className="flex items-center gap-2 pb-5 text-[13px] text-[var(--terminal-text-dimmer)]">
        <div className="w-[11px] h-[11px] rounded-full bg-[oklch(0.65_0.18_25)]"></div>
        <div className="w-[11px] h-[11px] rounded-full bg-[oklch(0.78_0.15_85)]"></div>
        <div className="w-[11px] h-[11px] rounded-full bg-[oklch(0.72_0.16_145)]"></div>
        <span className="ml-2">~/kevin-guillaume — zsh</span>
      </div>

      {/* hero */}
      <div className="border border-[var(--terminal-border)] rounded-md bg-[var(--terminal-surface)] p-10 flex gap-8 items-center flex-wrap">
        <img
          src="/avatar.png"
          alt="Kevin Guillaume"
          className="w-[88px] h-[88px] rounded-full border-2 border-[var(--accent)] object-cover shrink-0"
        />
        <div className="flex-1 min-w-[280px]">
          <div className="text-[var(--accent)] text-sm mb-1.5">
            <span>$ whoami</span>
            <span className="animate-[blink_1s_step-end_infinite]">▌</span>
          </div>
          <h1 className="m-0 mb-3 text-[34px] font-bold text-[var(--terminal-text-bright)]">
            Kevin Guillaume
          </h1>
          <p className="m-0 mb-4 text-[15px] text-[var(--terminal-text-muted)] max-w-[520px]">
            I'm a software engineer passionate about exploring technology and its real-world applications.
            I focus on building high-performance applications that users enjoy, blending practical innovation
            with seamless user experiences.
          </p>
          <div className="flex gap-4 text-sm">
            <a
              href="https://github.com/KevinGuillaume"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5"
            >
              <FaGithub size={16} /> [ GitHub ]
            </a>
            <a
              href="https://linkedin.com/in/kevin-guillaume-722544239/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5"
            >
              <FaLinkedin size={16} /> [ LinkedIn ]
            </a>
            <a
              href="https://x.com/KevinG11_?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5"
            >
              <FaXTwitter size={16} /> [ X ]
            </a>
            <a
              href="/KevinResume_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5"
            >
              <FaFileLines size={16} /> [ Resume ]
            </a>
          </div>
        </div>
      </div>

      {/* skills */}
      <div className="mt-7">
        <div className="text-[var(--accent)] text-sm mb-2.5">$ cat skills.json</div>
        <div className="border border-[var(--terminal-border)] rounded-md bg-[var(--terminal-surface)] p-6 flex flex-wrap gap-2.5">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3.5 py-1.5 border border-[var(--terminal-border-light)] rounded text-[13px] text-[var(--terminal-text-chip)]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* experience */}
      <div className="mt-7">
        <div className="text-[var(--accent)] text-sm mb-2.5">$ ls experience/</div>

        <div className="flex flex-col gap-4">
          <Card
            title="Investment Management Firm"
            timeSpent="May 2023 — Present"
            caption="Created both internal and external facing products that make work easier."
            bullets={[
              "Built investor portfolio management application with complementary administrative platforms.",
              "Developed a secure authentication system using Python and JWTs.",
              "Improved data retrieval performance by building optimized REST APIs.",
              "Developed an internal MCP server to connect with external AI Agents"
            ]}
            note="* Name redacted for compliance reasons."
          />
          <Card
            title="RedMane Technology LLC."
            timeSpent="July 2022 — May 2023"
            caption="Built applications with the State of Missouri to provide citizens access to financial aid programs."
            bullets={[
              "Implemented user application process.",
              "Created sign-in and sign-up features.",
              "Maintained and improved existing Java applications.",
            ]}
          />
          <Card
            title="HBR Consulting"
            timeSpent="August 2021 — July 2022"
            caption="Full-stack intern where I increased overall employee collaboration and connection."
            bullets={[
              "Created a front-facing database to help employees connect with experts in specific areas.",
              "Presented technical ideas to management to get the product approved.",
              "Led data collection and importing of employee skills and assets.",
            ]}
          />
        </div>
      </div>

      {/* projects */}
      <div className="mt-7">
        <div className="text-[var(--accent)] text-sm mb-2.5">$ cd projects/</div>
        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-[var(--terminal-border)] rounded-md bg-[var(--terminal-surface)] p-7"
            >
              <div className="flex justify-between flex-wrap gap-2 items-baseline">
                <h3 className="m-0 text-lg text-[var(--terminal-text-bright)]">{project.title}</h3>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[13px]">
                    {project.linkLabel ?? "→ view repo"}
                  </a>
                )}
              </div>
              <p className="mt-3 mb-0 text-sm text-[var(--terminal-text-muted)]">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 border border-[var(--terminal-border-light)] rounded text-[12px] text-[var(--terminal-text-chip)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-[var(--terminal-text-faint)]">
        <span className="text-[var(--accent)]">$</span> echo "built by Kevin Guillaume"
      </div>

    </div>
  )
}

export default App
