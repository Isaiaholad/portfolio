import Image from "next/image";
import FocusBoard from "@/components/FocusBoard";
import profilePhoto from "@/Screenshot 2026-03-23 at 23.49.41.png";

const proofPoints = [
  {
    label: "What I build",
    value: "Useful systems",
    detail: "I like building tools that make work easier, clearer, and less stressful.",
  },
  {
    label: "How I work",
    value: "Quality first",
    detail: "I test carefully, pay attention to user experience, and write bug reports people can act on.",
  },
  {
    label: "What matters to me",
    value: "Reliable results",
    detail: "I want the final product to feel stable, simple to use, and dependable in real life.",
  },
] as const;

const featuredProjects = [
  {
    label: "Flagship case study",
    title: "Hospital Inventory + HMO Operations System",
    summary:
      "A healthcare operations build centered on inventory visibility, administrative flow, and better coordination around HMO-related tasks.",
    problem:
      "Healthcare teams lose time when stock updates, request tracking, and administrative decisions are spread across disconnected processes.",
    solution:
      "Mapped the workflow into a clearer operational system that gives staff visibility into what exists, what changed, and what needs attention next.",
    impact:
      "This is the strongest proof of your ability to build systems that solve messy, real-world business problems.",
    stack: ["Workflow design", "Operational visibility", "Data structure", "Reporting mindset"],
    href: "",
    cta: "Private build",
  },
  {
    label: "Public repo",
    title: "Football World Cup Teams Performance Analysis",
    summary:
      "A data project comparing national team performance across World Cup history from 1930 to 2022.",
    problem:
      "Historical football performance is difficult to compare without a consistent set of metrics and a readable narrative.",
    solution:
      "Used pandas for data manipulation, numpy for statistical work, and matplotlib for storytelling through charts and comparisons.",
    impact:
      "Shows your ability to move from raw data to insight, ranking logic, and a strong analytical point of view.",
    stack: ["Python", "pandas", "numpy", "matplotlib"],
    href: "https://github.com/Isaiaholad/Football-World-Cup-Teams-Performance-Analysis",
    cta: "Open repository",
  },
  {
    label: "Public repo",
    title: "Leave Management System",
    summary:
      "A leave request workflow built to help organizations manage staff records, leave history, and request handling in one place.",
    problem:
      "Manual leave administration creates bottlenecks, weak visibility, and extra effort for both employees and administrators.",
    solution:
      "Built a Python desktop workflow with Tkinter and SQLite to handle registration, leave requests, history, and staff administration.",
    impact:
      "Demonstrates strong CRUD discipline, operational thinking, and a clear interest in reducing human friction through software.",
    stack: ["Python", "Tkinter", "SQLite", "Admin workflows"],
    href: "https://github.com/Isaiaholad/leave_management",
    cta: "Open repository",
  },
  {
    label: "Quality track",
    title: "QA, Bug Documentation, and Product Testing",
    summary:
      "A testing-focused direction centered on usability checks, defect reporting, and quality analysis across modern web products, including blockchain-related flows when relevant.",
    problem:
      "Software quality drops when edge cases are missed, defects are poorly documented, or testing is delayed until the end of delivery.",
    solution:
      "Approach testing as part of delivery: define scenarios, validate behavior, document reproducible issues clearly, and check reliability across unit, integration, performance, and security layers.",
    impact:
      "Makes software quality and QA the primary identity while keeping blockchain-related testing as a practical supporting skill.",
    stack: ["Bug documentation", "Usability testing", "Integration checks", "Security mindset"],
    href: "",
    cta: "Testing focus",
  },
] as const;

const qualitySignals = [
  {
    title: "Usability and exploratory testing",
    text: "I pay attention to how people actually move through a product, where they get blocked, and where the interface creates unnecessary errors.",
  },
  {
    title: "Bug documentation teams can act on",
    text: "Good QA is not just finding problems. It is documenting steps, expected versus actual behavior, impact, and evidence that helps engineers fix issues faster.",
  },
  {
    title: "Coverage across critical quality layers",
    text: "I am especially interested in unit, integration, performance, security, and blockchain-related testing where reliability and trust both matter.",
  },
] as const;

const skillGroups = [
  {
    title: "Systems & Backend",
    items: ["Python", "Workflow design", "Database thinking", "Admin tools", "Business logic"],
  },
  {
    title: "Data & Analysis",
    items: ["pandas", "numpy", "Data cleanup", "Metric framing", "Visualization storytelling"],
  },
  {
    title: "QA & Testing",
    items: [
      "Test case design",
      "Bug reporting",
      "Usability testing",
      "Unit and integration thinking",
      "Performance and security checks",
      "Blockchain-related testing",
    ],
  },
  {
    title: "Automation",
    items: ["Process mapping", "Operational tooling", "Repeatable workflows", "AI-assisted workflows"],
  },
] as const;

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Isaiaholad",
  },
  {
    label: "Linktree",
    href: "https://linktr.ee/isaiaholad",
  },
  {
    label: "X / Twitter",
    href: "https://x.com/HazziBoss",
  },
] as const;

export default function Home() {
  return (
    <main className="page-shell" id="top">
      <header className="site-header">
        <a className="brand" href="#top">
          Isaiah Oladimeji
        </a>

        <nav className="nav">
          <a href="#projects">Projects</a>
          <a href="#quality">Quality</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="header-link"
          href="https://github.com/Isaiaholad"
          target="_blank"
          rel="noreferrer"
        >
          View GitHub
        </a>
      </header>

      <section className="hero panel">
        <div className="hero-copy">
          <p className="eyebrow">Systems / AI / QA / Automation</p>
          <h1>
            I design and test software systems that use AI to automate
            operations, analyze data, and deliver work people can trust.
          </h1>
          <p className="hero-text">
            I am a tech enthusiast passionate about data, automation, and
            software quality. I use AI and software systems to turn raw
            information into insight and fragmented workflows into reliable
            products. I do not just write code or scripts. I build logic,
            document bugs clearly, and test software so teams can make better
            decisions with confidence.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View Projects
            </a>
            <a className="button button-secondary" href="#contact">
              Let&apos;s Build
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="dashboard-card">
            <div className="hero-identity">
              <div className="profile-photo-frame">
                <Image
                  src={profilePhoto}
                  alt="Portrait of Isaiah Oladimeji"
                  priority
                  className="profile-photo"
                />
              </div>

              <div className="intro-panel">
                <span className="dashboard-label">Hello, I&apos;m Isaiah</span>
                <strong>I enjoy building software that feels clear, useful, and easy to trust.</strong>
                <p>
                  My work sits between problem-solving, careful testing, and
                  making digital products easier for people to use.
                </p>
              </div>
            </div>

            <div className="support-grid">
              <article className="support-card">
                <span>What I enjoy</span>
                <strong>Turning messy work into simple systems</strong>
              </article>
              <article className="support-card">
                <span>What I pay attention to</span>
                <strong>Testing, clarity, and issues people can fix quickly</strong>
              </article>
              <article className="support-card">
                <span>What I want people to feel</span>
                <strong>That the product is dependable and easy to use</strong>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="proof-grid">
        {proofPoints.map((point) => (
          <article key={point.label} className="proof-card panel">
            <span>{point.label}</span>
            <strong>{point.value}</strong>
            <p>{point.detail}</p>
          </article>
        ))}
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <p className="section-kicker">Featured Projects</p>
          <h2>Selected work that shows how I build and how I think about quality.</h2>
          <p>
            The strongest story in this portfolio is consistency: business
            systems, analytical reasoning, and a clear interest in reliable
            software delivery.
          </p>
        </div>

        <div className="project-grid">
          {featuredProjects.map((project) => (
            <article key={project.title} className="project-card panel">
              <div className="project-topline">
                <span>{project.label}</span>
                <span>{project.cta}</span>
              </div>

              <h3>{project.title}</h3>
              <p className="project-summary">{project.summary}</p>

              <div className="project-story">
                <p>
                  <strong>Problem</strong>
                  {project.problem}
                </p>
                <p>
                  <strong>Solution</strong>
                  {project.solution}
                </p>
                <p>
                  <strong>Impact</strong>
                  {project.impact}
                </p>
              </div>

              <div className="tag-list">
                {project.stack.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>

              <div className="project-footer">
                <span>Outcome-first storytelling</span>
                {project.href ? (
                  <a href={project.href} target="_blank" rel="noreferrer">
                    {project.cta}
                  </a>
                ) : (
                  <span>{project.cta}</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section">
        <FocusBoard />
      </section>

      <section className="section" id="quality">
        <div className="section-heading">
          <p className="section-kicker">Testing and Quality</p>
          <h2>I care about software that works well for real people.</h2>
        </div>

        <div className="signal-grid">
          {qualitySignals.map((signal) => (
            <article key={signal.title} className="signal-card panel">
              <h3>{signal.title}</h3>
              <p>{signal.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-heading">
          <p className="section-kicker">Skills</p>
          <h2>Grouped around capability, not keyword stuffing.</h2>
        </div>

        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article key={group.title} className="skill-card panel">
              <h3>{group.title}</h3>
              <div className="tag-list">
                {group.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact-section panel" id="contact">
        <div className="section-heading compact">
          <p className="section-kicker">Contact</p>
          <h2>Let&apos;s build systems that actually get used.</h2>
          <p>
            If you need someone who can think through data, process, and
            product logic, and software quality in the same room, I would love
            to work on it.
          </p>
        </div>

        <div className="contact-actions">
          {contactLinks.map((link) => (
            <a key={link.label} className="button button-secondary" href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <a href="https://github.com/Isaiaholad" target="_blank" rel="noreferrer">
          github.com/Isaiaholad
        </a>
      </footer>
    </main>
  );
}
