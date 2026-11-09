import Playground from "@/components/Playground";
import LanguageTabs from "@/components/LanguageTabs";
import CopyEmail from "@/components/CopyEmail";
import { profile, stats, pillars, skillGroups, experience, projects } from "@/data/skills";

const nav = [["Skills", "skills"], ["Languages", "languages"], ["Playground", "playground"], ["Experience", "experience"], ["Projects", "projects"]];
const spec = [
  ["Focus", "Full-stack, cloud, QA and security"],
  ["Core stack", "Elixir, Phoenix, Next.js, TypeScript"],
  ["Cloud", "AWS: EC2, RDS/Aurora, Lambda, WAF"],
  ["Integrations", "GCash, Ventaja, OAuth, Twilio"],
];

export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="wrap navin">
          <a className="brand" href="#top">AP</a>
          <div className="links">{nav.map(([t, id]) => <a key={id} href={`#${id}`}>{t}</a>)}</div>
          <a className="btn primary" href="#contact">Contact</a>
        </div>
      </nav>

      <main className="wrap" id="top">
        <header className="hero">
          <div>
            <h1>{profile.name}</h1>
            <p className="lead">I build payment systems, run them on AWS, and test and secure them before customers ever see them.</p>
            <p className="muted">{profile.title}</p>
            <div className="row">
              <a className="btn primary" href={`mailto:${profile.email}`}>Email me</a>
              <a className="btn" href={profile.github}>GitHub</a>
              <a className="btn" href="#playground">Try the API playground</a>
            </div>
          </div>
          <dl className="spec">
            {spec.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
        </header>

        <div className="stats">
          {stats.map((s) => (
            <div key={s.value}><b>{s.value}</b><span>{s.label}</span></div>
          ))}
        </div>

        <section id="skills">
          <h2>What I do</h2>
          <div className="grid3">
            {pillars.map((p) => (
              <div className="card" key={p.title}>
                <h3>{p.title}</h3>
                <p className="muted">{p.text}</p>
                <div className="chips">{p.tags.map((t) => <span className="chip" key={t}>{t}</span>)}</div>
              </div>
            ))}
          </div>
          <details className="more">
            <summary>See the full skills list</summary>
            <div className="grid2">
              {skillGroups.map((g) => (
                <div key={g.group}>
                  <h3>{g.group}</h3>
                  <div className="chips">{g.items.map((i) => <span className="chip" key={i}>{i}</span>)}</div>
                </div>
              ))}
            </div>
          </details>
        </section>

        <section id="languages">
          <h2>Languages</h2>
          <p className="muted">Each language is labeled by how I have used it, so you know what is backed by real work and what is a sample.</p>
          <LanguageTabs />
        </section>

        <section id="playground">
          <h2>API playground</h2>
          <p className="muted">Create, read, update and delete posts against a live public API and inspect every request.</p>
          <Playground />
        </section>

        <section id="experience">
          <h2>Experience</h2>
          <div className="timeline">
            <div className="dotline" />
            <div className="card">
              <h3>{experience.role}</h3>
              <p className="muted">{experience.company}, {experience.period}</p>
              <ul>{experience.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          </div>
        </section>

        <section id="projects">
          <h2>Selected projects</h2>
          <div className="grid2">
            {projects.map((p) => (
              <div className="card" key={p.name}>
                <h3>{p.name}</h3>
                <p>{p.text}</p>
                <div className="chips">{p.tech.split(", ").map((t) => <span className="chip" key={t}>{t}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="cta">
          <h2>Let’s talk</h2>
          <p className="lead">Have a project, a system to test, or an infrastructure problem? Send me a message.</p>
          <div className="row">
            <a className="btn primary" href={`mailto:${profile.email}`}>{profile.email}</a>
            <CopyEmail email={profile.email} />
            <a className="btn" href={profile.github}>GitHub</a>
          </div>
        </section>

        <footer>© 2026 Alberto S. Payabyab</footer>
      </main>
    </>
  );
}
