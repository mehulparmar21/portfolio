import Image from "next/image";
import Header from "./components/Header";
import { ArrowUpRightIcon } from "./components/SocialIcons";

const highlights = [
  { icon: "</>", title: "10+ Years", description: "Building software, from Tally solutions to Python platforms" },
  { icon: "↻", title: "2 Platform Migrations", description: "CodeIgniter to Node.js, then to Django REST Framework" },
  { icon: "◎", title: "4 Brands, 3 Countries", description: "One commerce platform, one API layer I owned" },
  { icon: "✚", title: "US Healthcare RCM", description: "Claims, denials, payments and eClinicalWorks data" },
  { icon: "♟", title: "Team Leadership", description: "Leading 3 developers today; set API contracts for a 13-member team" },
  { icon: "⇄", title: "Complex Integrations", description: "eClinicalWorks over VPN, 4 payment gateways, Playwright automation" },
];

const roles = [
  {
    start: "2024-03",
    end: null,
    title: "Technical Lead",
    company: "Technocruitx Universal Services Pvt. Ltd.",
    points: [
      "Lead a team of 3 developers on RCM Analytix, a revenue cycle management platform for a US community health network.",
      "Led the platform’s migration to Python with Django REST Framework, and from MySQL to PostgreSQL.",
      "Connected the client’s eClinicalWorks system (MS SQL on Azure) through a site-to-site VPN and automated sync pipelines.",
      "Automated eClinicalWorks report downloads and processing with Python and Playwright.",
      "Take part in architecture decisions, performance optimization and client discussions.",
    ],
  },
  {
    start: "2019-01",
    end: "2024-03",
    title: "Senior Software Developer",
    company: "Verve Systems Pvt. Ltd",
    points: [
      "Owned the API layer of Lokaly, a white-label commerce platform running as 4 brands across India, the USA and Italy, behind 6 apps.",
      "Led its 12-month rewrite from CodeIgniter to Node.js (Express, Sequelize).",
      "Led a 3-member API team and set the API contracts for 13 engineers across mobile, admin and storefront.",
      "Built payments across 4 gateways, plus wallet, refunds and a credit ledger for local shops.",
    ],
  },
  {
    start: "2017-04",
    end: "2018-12",
    title: "PHP Developer",
    company: "Zero Gravity Web Services LLP",
    points: [
      "Built Apna Data, a subscription-based cloud storage platform with online file playback, automatic backup and trash history.",
      "Worked across the full stack with CodeIgniter, PHP and MySQL.",
    ],
  },
  {
    start: "2016-04",
    end: "2017-03",
    title: "Junior PHP Developer",
    company: "App bits Pvt. Ltd.",
    points: [
      "Built the web platform and backend behind Word-Learner, a vocabulary learning product with Android and iOS apps.",
      "Designed the REST APIs the mobile apps used for lessons, tests and progress tracking.",
    ],
  },
  {
    start: "2015-08",
    end: "2016-02",
    title: "Junior PHP Developer",
    company: "Sri Samarth Utility Services Pvt. Ltd.",
    points: [
      "My first web development role, after moving from Tally into PHP.",
      "Built features for a startup product, including mobile recharge, using CodeIgniter and Zend.",
    ],
  },  
  {
    start: "2013-01",
    end: "2015-01",
    title: "Tally Developer",
    company: "H.K. Computer and Sun InfoTech",
    points: [
      "Built custom Tally solutions in TDL for business clients, including invoices and complex reports.",
      "Led a team of 2 developers at H.K. Computer.",
    ],
  }, 
];

const projects = [
  {
    title: "RCM Analytix: Revenue Cycle Management Platform",
    description: "A full claim-cycle platform for a US healthcare network, covering coding, billing, denial management, payment posting and analytics. I lead the backend team and led its migration to Python with Django REST Framework and PostgreSQL.",
    tags: ["Python", "Django REST Framework", "PostgreSQL", "MS SQL", "Azure", "Playwright", "REST APIs"],
    visual: "project-visual-rcm",
    visualLabel: "RCM Analytix dashboard preview",
    image: "/rcm-analytix-dashboard.png",
  },
  {
    title: "Lokaly — White-Label Commerce Platform",
    description: "White-label ordering platform for restaurants, grocers and pharmacies, with one codebase running 4 brands across India, the USA and Italy. I owned the API layer behind six apps and led its rewrite from CodeIgniter to Node.js.",
    tags: ["Node.js", "Express", "Sequelize", "CodeIgniter", "MySQL", "REST APIs", "Payments"],
    visual: "project-visual-ecw",
    visualLabel: "Lokaly storefront on desktop and mobile app screens",
    image: "/lokaly.png",
    link: "https://www.lokaly.in/",
  },
  {
    title: "Word-Learner — Vocabulary Learning Platform",
    description: "Spaced-repetition vocabulary apps for iOS and Android, backed by a learner management system where teachers create classes, assign words and track test scores.",
    tags: ["CodeIgniter", "PHP", "MySQL", "REST APIs"],
    visual: "project-visual-nifty",
    visualLabel: "Students learning vocabulary together on a tablet and phone",
    image: "/word-learner.png",
    imageFit: "cover",
  },
];

const technicalSkills = [
  "Python", "Django REST Framework", "Node.js", "Express.js", "Sequelize",
  "Laravel", "CodeIgniter", "REST APIs",
  "PostgreSQL", "MySQL", "MS SQL",
  "AWS", "Azure", "Docker", "Git", "Playwright",
];

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// "2024-03" -> "Mar 2024"
function formatMonth(value: string) {
  const [year, month] = value.split("-");
  return `${monthNames[Number(month) - 1]} ${year}`;
}

// Inclusive month count, e.g. Jan 2019 – Mar 2024 -> "5 yrs 3 mos"
function formatDuration(start: string, end: string) {
  const [startYear, startMonth] = start.split("-").map(Number);
  const [endYear, endMonth] = end.split("-").map(Number);
  const months = (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
  const years = Math.floor(months / 12);
  const remainder = months % 12;
  return [
    years && `${years} yr${years > 1 ? "s" : ""}`,
    remainder && `${remainder} mo${remainder > 1 ? "s" : ""}`,
  ].filter(Boolean).join(" ");
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="portfolio-main">
        <section id="home" className="hero-section target-hero">
          <div className="hero-photo-overlay" />
          <div className="section-container target-hero-inner">
            <div className="hero-content target-hero-content">
              <p className="hero-eyebrow">BUILD · SOLVE · IMPROVE</p>
              <h1 className="hero-title target-hero-title">
                Hi, I’m <span>Mehul Parmar</span>
              </h1>
              <p className="hero-subtitle">Technical Lead | Backend Engineering</p>
              <p className="hero-description">
                I lead backend teams building platforms that businesses run on: today a revenue cycle
                management system for US healthcare, and before that a white-label commerce platform
                serving 4 brands across 3 countries. I've led two platform migrations, most recently
                to Python and Django REST Framework.
              </p>
              <p className="hero-tech-stack">
                Python <b>•</b> Django REST Framework <b>•</b> Node.js <b>•</b> PostgreSQL <b>•</b> Docker <b>•</b> AWS
              </p>
              <div className="hero-actions">
                <a href="#projects" className="button-primary">
                  View Projects <ArrowUpRightIcon size={17} />
                </a>
                <a href="/Mehul%20Parmar.pdf" download className="button-secondary resume-hero-button">
                  <span aria-hidden="true">↓</span> Download Resume
                </a>
              </div>
            </div>
            <span className="hero-handwritten" aria-hidden="true">“Keep<br />Building”</span>
          </div>
        </section>

        <section id="about" className="content-section target-section">
          <div className="section-container">
            <p className="section-eyebrow">ABOUT</p>
            <div className="target-about-grid">
              <div className="target-about-copy">
                <h2 className="section-title">A Little Bit About Me</h2>
                <p>
                  I started in 2013 building custom Tally solutions for local businesses, moved into PHP web
                  development, and have spent the decade since building the backend systems that businesses run on.
                </p>
                <p>
                  At Verve Systems I owned the API layer of Lokaly, a white-label commerce platform used by four
                  brands in India, the USA and Italy, and led its rewrite from CodeIgniter to Node.js. Today, as
                  Technical Lead at Technocruitx, I lead a team of three developers on a revenue cycle management
                  platform for a US healthcare network, and led its move to Python and PostgreSQL.
                </p>
                <p>
                  I've loved coding since my first program, and that's why I chose this field. The way we build
                  software has changed a lot in the last few years. I now use AI tools every day to design, write
                  and review code faster, and I'm learning to build AI features into the products themselves.
                  What hasn't changed is what I enjoy most: understanding how a business really works and turning
                  it into software that people use every day.
                </p>        
                <p>
                  I'm now looking for a Technical Lead role where I can lead a team building products
                  that combine solid backend engineering with AI.
                </p>
                <a href="#contact" className="button-secondary">Let’s Connect <ArrowUpRightIcon size={16} /></a>
              </div>
              <div className="highlight-grid">
                {highlights.map((item) => (
                  <article className="highlight-card" key={item.title}>
                    <span className="highlight-icon" aria-hidden="true">{item.icon}</span>
                    <div><h3>{item.title}</h3><p>{item.description}</p></div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="content-section target-section">
          <div className="section-container">
            <p className="section-eyebrow">EXPERIENCE</p>
            <h2 className="section-title">My Professional Journey</h2>
            <ol className="journey">
              {roles.map((role) => (
                <li className={`journey-item${role.end ? "" : " is-current"}`} key={`${role.start}-${role.title}`}>
                  <span className="journey-dot" aria-hidden="true" />
                  <article className="journey-card">
                    <header className="journey-header">
                      <div>
                        <h3>{role.title}</h3>
                        <p className="journey-company">{role.company}</p>
                      </div>
                      <div className="journey-meta">
                        <span className="journey-period">
                          <time dateTime={role.start}>{formatMonth(role.start)}</time>
                          {" – "}
                          {role.end ? <time dateTime={role.end}>{formatMonth(role.end)}</time> : "Present"}
                        </span>
                        {role.end ? (
                          <span className="journey-duration">{formatDuration(role.start, role.end)}</span>
                        ) : (
                          <span className="journey-badge">Current</span>
                        )}
                      </div>
                    </header>
                    <ul className="journey-points">{role.points.map((point) => <li key={point}>{point}</li>)}</ul>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="projects" className="content-section target-section">
          <div className="section-container">
            <div className="target-section-heading">
              <div><p className="section-eyebrow">PROJECTS</p><h2 className="section-title">Some Things I’ve Built</h2></div>
              <a href="#contact" className="button-secondary target-view-all">View All Projects <ArrowUpRightIcon size={16} /></a>
            </div>
            <div className="target-projects-grid">
              {projects.map((project) => (
                <article className="target-project-card" key={project.title}>
                  {project.image ? (
                    <div className={`target-project-visual has-image${project.imageFit === "cover" ? " is-cover" : ""}`}>
                      <Image
                        src={project.image}
                        alt={project.visualLabel}
                        fill
                        sizes="(max-width: 600px) 100vw, (max-width: 850px) 50vw, 360px"
                      />
                    </div>
                  ) : (
                  <div className={`target-project-visual ${project.visual}`} role="img" aria-label={project.visualLabel}>
                    <div className="mock-browser">
                      <div className="mock-browser-bar"><i /><i /><i /><span>{project.title}</span></div>
                      <div className="mock-dashboard">
                        <aside><i /><i /><i /><i /></aside>
                        <div className="mock-dashboard-main">
                          <b /><div className="mock-metrics"><i /><i /><i /></div>
                          <div className="mock-chart"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
                        </div>
                      </div>
                    </div>
                    {project.visual === "project-visual-nifty" && <div className="mock-line-chart"><i /><i /><i /><i /><i /><i /><i /></div>}
                  </div>
                  )}
                  <div className="target-project-info">
                    <h3>
                      {project.link ? (
                        <a href={project.link} target="_blank" rel="noreferrer">
                          {project.title}    <span aria-hidden="true">↗</span>
                        </a>
                      ) : (
                        project.title
                      )}
                    </h3>                    
                    <p>{project.description}</p>
                    <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="resume" className="content-section target-section">
          <div className="section-container target-resume-grid">
            <div>
              <p className="section-eyebrow">RESUME</p>
              <h2 className="section-title">Skills &amp; Resume</h2>              
              <p className="section-description">
                The tools I work with every day, from Python and Django REST Framework to the databases
                and cloud platforms behind them. Download my resume for the full details.
              </p>
              <a href="/Mehul%20Parmar.pdf" download className="button-secondary resume-download"><span aria-hidden="true">↓</span> Download Resume</a>
            </div>
            <div className="technical-skills-panel">
              <h3>Technical Skills</h3>
              <div className="technical-skill-pills">{technicalSkills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </div>
          </div>
        </section>

        <section id="contact" className="content-section target-section">
          <div className="section-container target-contact-grid">
            <div>
              <p className="section-eyebrow">CONTACT</p>
              <h2 className="section-title">Let’s Work Together</h2>
              <p className="section-description">
                I'm open to Technical Lead roles in backend engineering, healthcare technology and AI-enabled
                products. If you're hiring or just want to talk shop, I'd be happy to hear from you.
              </p>
            </div>
            <div className="target-contact-methods">
              <a className="target-contact-card" href="mailto:mehulcparmar@ymail.com"><span className="target-contact-icon">✉</span><span><b>Email</b><small>mehulcparmar@ymail.com</small></span></a>
              <a className="target-contact-card" href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><span className="target-contact-icon">in</span><span><b>LinkedIn</b><small>linkedin.com/in/mehulparmar</small></span></a>
              <a className="target-contact-card" href="https://github.com/" target="_blank" rel="noreferrer"><span className="target-contact-icon">⌘</span><span><b>GitHub</b><small>github.com/mehulparmar</small></span></a>
            </div>
          </div>
        </section>
      </main>
      <footer className="portfolio-footer target-footer">
        <div className="section-container target-footer-inner">
          <a href="#home" className="footer-brand"><b>Mehul Parmar</b><span>Technical Lead</span></a>
          <nav aria-label="Footer navigation">{["Home", "About", "Experience", "Projects", "Resume", "Contact"].map((label) => <a key={label} href={`#${label.toLowerCase()}`}>{label}</a>)}</nav>
          <div className="footer-copyright">© {new Date().getFullYear()} Mehul Parmar.<br />All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}
