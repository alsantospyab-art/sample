"use client";
import { useState } from "react";

const API = "https://jsonplaceholder.typicode.com/posts";
type Post = { id: number; title: string; body: string; userId: number };
type Log = { method: string; url: string; status: number; ms: number; body: unknown; note?: string };
const empty = { id: 0, title: "", body: "" };

export default function Playground() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [log, setLog] = useState<Log | null>(null);
  const [form, setForm] = useState(empty);
  const [busy, setBusy] = useState(false);

  async function call(method: string, path = "", payload?: object) {
    const url = API + path;
    const t = performance.now();
    setBusy(true);
    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: payload ? JSON.stringify(payload) : undefined,
      });
      const body = await res.json().catch(() => ({}));
      setLog({ method, url, status: res.status, ms: Math.round(performance.now() - t), body });
      return body;
    } catch {
      setLog({ method, url, status: 0, ms: 0, body: { error: "Network error. Check your connection and try again." } });
    } finally {
      setBusy(false);
    }
  }

  async function load() {
    const data = await call("GET", "?_limit=8");
    if (Array.isArray(data)) setPosts(data);
  }

  async function save() {
    if (!form.title.trim()) return;
    const payload = { title: form.title.trim(), body: form.body.trim(), userId: 1 };
    if (form.id && form.id <= 100) {
      await call("PUT", `/${form.id}`, { id: form.id, ...payload });
      setPosts(posts.map((p) => (p.id === form.id ? { ...p, ...payload } : p)));
    } else if (form.id) {
      setLog({ method: "PUT", url: API, status: 0, ms: 0, body: payload, note: "Local only: this post was never saved on the server." });
      setPosts(posts.map((p) => (p.id === form.id ? { ...p, ...payload } : p)));
    } else {
      await call("POST", "", payload);
      setPosts([{ id: 1000 + posts.length, ...payload }, ...posts]);
    }
    setForm(empty);
  }

  async function remove(id: number) {
    if (id <= 100) await call("DELETE", `/${id}`);
    setPosts(posts.filter((p) => p.id !== id));
  }

  return (
    <div className="pg">
      <div className="pg-col">
        <div className="row">
          <button className="btn primary" onClick={load} disabled={busy}>Load posts</button>
          <span className="muted">GET {API}</span>
        </div>
        <div className="form">
          <input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
          <textarea placeholder="Body" value={form.body} onChange={(e) => setForm({ ...form, body: e.target.value })} />
          <div className="row">
            <button className="btn primary" onClick={save} disabled={busy}>{form.id ? "Update post" : "Create post"}</button>
            {form.id ? <button className="btn" onClick={() => setForm(empty)}>Cancel</button> : null}
          </div>
        </div>
        {posts.length === 0 && <p className="muted">No posts yet. Select Load posts to fetch them from the API.</p>}
        <ul className="list">
          {posts.map((p) => (
            <li key={p.id}>
              <strong>{p.title}</strong>
              <div className="row">
                <button className="btn" onClick={() => setForm({ id: p.id, title: p.title, body: p.body })}>Edit</button>
                <button className="btn danger" onClick={() => remove(p.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="pg-col">
        <h3>Request inspector</h3>
        {log ? (
          <pre className="code">{`${log.method} ${log.url}\nStatus: ${log.status || "failed"}   Time: ${log.ms} ms${log.note ? `\n${log.note}` : ""}\n\n${JSON.stringify(log.body, null, 2)}`}</pre>
        ) : (
          <p className="muted">Every request and response will show here.</p>
        )}
        <p className="muted">JSONPlaceholder accepts writes but does not save them, so created and edited posts show in the list only.</p>
      </div>
    </div>
  );
}
