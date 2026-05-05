import { Link } from '@remix-run/react';

const modules = [
  { id: 1, title: 'Remix + React Fundamentals', path: '/module1' },
  { id: 2, title: 'Node.js Backend Development', path: '/module2' },
  { id: 3, title: 'PostgreSQL + Redis Data Layer', path: '/module3' },
  { id: 4, title: 'AWS Infrastructure', path: '/module4' },
  { id: 5, title: 'Terraform + IaC', path: '/module5' },
  { id: 6, title: 'Docker + Kubernetes', path: '/module6' },
  { id: 7, title: 'Datadog Observability', path: '/module7' },
  { id: 8, title: 'Real-Time Audio Systems', path: '/module8' },
];

export default function Index() {
  return (
    <div style={{
      fontFamily: 'system-ui, sans-serif',
      padding: '2rem',
      maxWidth: '900px',
      margin: '0 auto'
    }}>
      <header style={{
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          marginBottom: '0.5rem'
        }}>
          🎵 [untitled] Full Stack Tutorial
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#666'
        }}>
          Master the Full Stack Engineer role at [untitled]
        </p>
        <p style={{
          color: '#888',
          marginTop: '0.5rem'
        }}>
          Remix/React · Node.js · Postgres · Redis · AWS · Terraform · Vercel · Datadog
        </p>
      </header>

      <section style={{
        marginBottom: '3rem'
      }}>
        <h2>About the Role</h2>
        <p>
          <strong>Company:</strong> [untitled] — Building the operating system for music creators
        </p>
        <p>
          <strong>Stack:</strong> Remix/React, Node.js, PostgreSQL, Redis, AWS, Terraform, Docker, Kubernetes, Datadog
        </p>
        <p>
          <strong>Requirements:</strong> 7+ years backend, microservices, cloud, infrastructure
        </p>
      </section>

      <section>
        <h2>Learning Modules</h2>
        <div style={{
          display: 'grid',
          gap: '1rem'
        }}>
          {modules.map(m => (
            <Link
              key={m.id}
              to={m.path}
              style={{
                display: 'block',
                padding: '1.5rem',
                border: '1px solid #ddd',
                borderRadius: '12px',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#000';
                e.currentTarget.style.backgroundColor = '#f9f9f9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#ddd';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <h3 style={{
                margin: '0 0 0.5rem'
              }}>
                Module {m.id}: {m.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      <section style={{
        marginTop: '3rem',
        padding: '1.5rem',
        backgroundColor: '#f5f5f5',
        borderRadius: '12px'
      }}>
        <h2>🏆 Portfolio Project</h2>
        <p><strong>Build a music collaboration app clone of [untitled]</strong></p>
        <ul>
          <li>Upload and organize tracks into projects</li>
          <li>Real-time collaborative playback</li>
          <li>Share links and track listeners</li>
          <li>Deploy on Vercel with AWS backend</li>
          <li>Monitor with Datadog</li>
        </ul>
      </section>
    </div>
  );
}
