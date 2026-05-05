import { Link } from "react-router";

const modules = [
  { id: 1, title: "Remix + React Fundamentals", path: "/module1" },
  { id: 2, title: "Node.js Backend Development", path: "/module2" },
  { id: 3, title: "PostgreSQL + Redis Data Layer", path: "/module3" },
  { id: 4, title: "AWS Infrastructure", path: "/module4" },
  { id: 5, title: "Terraform + IaC", path: "/module5" },
  { id: 6, title: "Docker + Kubernetes", path: "/module6" },
  { id: 7, title: "Datadog Observability", path: "/module7" },
  { id: 8, title: "Real-Time Audio Systems", path: "/module8" },
];

export default function Home() {
  return (
    <div style={{
      fontFamily: "system-ui, sans-serif",
      padding: "2rem",
      maxWidth: "900px",
      margin: "0 auto"
    }}>
      <header style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "2.5rem" }}>🎵 [untitled] Full Stack Tutorial</h1>
        <p style={{ fontSize: "1.2rem", color: "#666" }}>Master the Full Stack Engineer role</p>
      </header>

      <h2>Learning Modules</h2>
      <div style={{ display: "grid", gap: "1rem" }}>
        {modules.map(m => (
          <Link key={m.id} to={m.path} style={{
            display: "block",
            padding: "1.5rem",
            border: "1px solid #ddd",
            borderRadius: "8px",
            textDecoration: "none",
            color: "inherit"
          }}>
            Module {m.id}: {m.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
