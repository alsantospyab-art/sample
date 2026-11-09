import Playground from "@/components/Playground";
import { profile, skillGroups, languages, experience, projects } from "@/data/skills";

export default function Home() {
  return (
    <main>
      <header className="hero">
        <h1>{profile.name}</h1>
        <p className="title">{profile.title}</p>
        <p>{profile.summary}</p>
        <div className="row">
          <a className="btn primary" href={`mailto:${profile.email}`}>Email me</a>
          <a className="btn" href={profile.github}>GitHub</a>
        </div>
      </header>

      <section>
        <h2>Skills</h2>
        <div className="grid">
          {skillGroups.map((g) => (
            <div className="box" key={g.group}>
              <h3>{g.group}</h3>
              <div className="chips">{g.items.map((i) => <span className="chip" key={i}>{i}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Languages</h2>
        <div className="grid">
          {languages.map((l) => (
            <div className="box" key={l.name}>
              <h3>{l.name} <span className={`badge ${l.status}`}>{l.status}</span></h3>
              <p className="muted">{l.note}</p>
              <pre className="code">{l.code}</pre>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>API playground</h2>
        <p className="muted">Try create, read, update and delete against a live public API.</p>
        <Playground />
      </section>

      <section>
        <h2>Experience</h2>
        <div className="box">
          <h3>{experience.role}, {experience.company}</h3>
          <p className="muted">{experience.period}</p>
          <ul>{experience.points.map((p) => <li key={p}>{p}</li>)}</ul>
        </div>
      </section>

      <section>
        <h2>Projects</h2>
        <div className="grid">
          {projects.map((p) => (
            <div className="box" key={p.name}>
              <h3>{p.name}</h3>
              <p className="muted">{p.tech}</p>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <footer>Contact: <a href={`mailto:${profile.email}`}>{profile.email}</a></footer>
    </main>
  );
}
