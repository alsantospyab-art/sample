"use client";
import { useState } from "react";
import { languages } from "@/data/skills";

const label: Record<string, string> = { Work: "Used at work", Sample: "Sample in this repo", Basic: "Basic", Planned: "Planned" };

export default function LanguageTabs() {
  const [i, setI] = useState(0);
  const l = languages[i];
  return (
    <div className="tabs">
      <div className="tablist" role="tablist" aria-label="Languages">
        {languages.map((x, n) => (
          <button key={x.name} role="tab" aria-selected={n === i} className="tab" onClick={() => setI(n)}>
            {x.name}
          </button>
        ))}
      </div>
      <div className="tabpanel" role="tabpanel">
        <div className="tabmeta">
          <span className={`badge ${l.status}`}>{label[l.status]}</span>
          <span>{l.note}</span>
        </div>
        <pre className="code">{l.code}</pre>
      </div>
    </div>
  );
}
