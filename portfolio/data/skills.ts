// Edit this file to update the Skills section. Source: resume.
export const profile = {
  name: "Alberto S. Payabyab",
  title: "Software Developer | Full-Stack | AWS & IT Infrastructure",
  summary:
    "I build and support remittance and payment systems with Elixir/Phoenix, Next.js and TypeScript, run them on AWS, and test and secure them before they reach production.",
  email: "al.santospayab@gmail.com",
  github: "https://github.com/alsantospyab-art",
};

export const skillGroups: { group: string; items: string[] }[] = [
  { group: "Development", items: ["Elixir", "Phoenix", "Next.js", "TypeScript", "JavaScript", "React", "HTML", "CSS", "PHP (basic)", "REST APIs"] },
  { group: "Cloud & Infrastructure", items: ["EC2", "VPC", "IAM", "S3", "EBS", "RDS/Aurora", "Lambda", "SNS", "CloudFormation", "Amplify", "WAF", "CloudWatch", "Route 53", "Auto Scaling"] },
  { group: "DevOps", items: ["Git", "GitHub", "GitLab", "CI/CD workflows"] },
  { group: "Security", items: ["WAF/firewall configuration", "SSL/TLS certificates", "OWASP practices", "Snyk", "Vulnerability assessment", "Phishing simulations"] },
  { group: "QA & Testing", items: ["Manual QA", "Appium", "Selenium", "Regression testing", "Jira", "Trello", "Defect tracking"] },
  { group: "Databases", items: ["PostgreSQL", "Amazon RDS/Aurora"] },
  { group: "Integrations", items: ["Third-party APIs", "GCash", "Ventaja", "OAuth", "Twilio/SMS"] },
  { group: "IT Operations", items: ["LAN/WAN/VPN", "Servers and workstations", "Backups", "Runbooks and playbooks"] },
];

// Honest status per language: "Work" = used in real work (resume), "Sample" = proven by code in this repo.
export const languages = [
  { name: "Next.js + TypeScript", status: "Work", note: "Remittance frontend and payment forms.", code: "export async function getPosts(): Promise<Post[]> {\n  const res = await fetch(`${API}/posts`);\n  return res.json();\n}" },
  { name: "Elixir / Phoenix", status: "Work", note: "Payment backend and API endpoints.", code: "def index(conn, _params) do\n  json(conn, Posts.list_posts())\nend" },
  { name: "Python", status: "Sample", note: "FastAPI CRUD API with tests (apis/python).", code: "@app.get(\"/posts\")\ndef list_posts():\n    return list(DB.values())" },
  { name: "PHP", status: "Basic", note: "Basic experience. Sample API planned.", code: "<?php\nheader('Content-Type: application/json');\necho json_encode($posts);" },
  { name: "Java", status: "Planned", note: "Sample API planned for phase 2.", code: "@GetMapping(\"/posts\")\npublic List<Post> list() {\n  return repo.findAll();\n}" },
];

export const experience = {
  company: "BC Remit and Money Exchange Service Inc.",
  role: "IT Programmer",
  period: "2021 – June 2026",
  points: [
    "Built payment workflows for SSS, PhilHealth and Pag-IBIG, and integrated GCash and Ventaja.",
    "Helped migrate features from a legacy Next.js/TypeScript app to Elixir/Phoenix.",
    "Supported AWS infrastructure: EC2, VPC, IAM, RDS/Aurora, Lambda, WAF, CloudWatch, Route 53.",
    "Ran regression and production testing with Jira, Appium and Selenium, and applied OWASP practices with Snyk.",
  ],
};

export const projects = [
  { name: "Payment Processing Platform", tech: "Elixir, Phoenix, Next.js, TypeScript, AWS", text: "Dynamic forms and workflows for government payments, with external payment partners integrated and production issues resolved." },
  { name: "Remittance Platform", tech: "Next.js, TypeScript, Backend APIs, AWS", text: "Responsive customer transaction features, with bug fixes and performance improvements." },
];
