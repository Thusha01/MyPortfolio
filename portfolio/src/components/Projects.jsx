import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    id: 'medtrust', badge: 'Final Year Research', badgeStyle: 'teal', featured: true,
    title: 'MedTrust — Privacy-Preserving Healthcare AI',
    description: 'A unified framework enabling multiple hospitals to collaboratively train AI prediction models without sharing raw patient data. Combines Federated Learning (FedAvg), a blockchain-inspired chained-hash audit log for tamper-evident traceability, and SHAP/LIME explainable AI for clinician-understandable predictions.',
    tags: ['Python', 'PyTorch', 'Flower (flwr)', 'Federated Learning', 'Blockchain', 'SHAP', 'LIME', 'Opacus DP'],
    github: null,
    metrics: [
      { val: '83.5%', label: 'FL model accuracy' },
      { val: '0.885', label: 'AUC-ROC score' },
      { val: '4', label: 'Hospital nodes' },
      { val: '✓', label: 'Tamper detection' },
    ],
  },
  {
    id: 'servicely', badge: 'Production App', badgeStyle: 'purple', featured: false,
    title: 'Servicely — Service Marketplace',
    description: 'A live multi-platform service marketplace connecting service providers and customers. Full-stack: ASP.NET Core API, React admin dashboard, React Native mobile app. Deployed on AWS EC2, Vercel, and Google Play Store.',
    tags: ['ASP.NET Core', 'React', 'React Native', 'PostgreSQL', 'AWS EC2'],
    github: null,
  },
  {
    id: 'tester', badge: 'Desktop Tool', badgeStyle: 'amber', featured: false,
    title: 'Dynamic Functionality Tester',
    description: 'A modular automation testing tool for configuring and executing command sequences across multiple hardware simulators with real-time monitoring, parallel connections, live logging, and structured error handling.',
    tags: ['C#', '.NET SDK 8', 'WPF', 'TCP/IP', 'Multithreading'],
    github: null,
  },
  {
    id: 'pms', badge: 'Web App', badgeStyle: 'purple', featured: false,
    title: 'Project Management System',
    description: 'Web-based PM system for handling projects, managing roles, tracking deadlines, and monitoring financial status. Implemented authentication, user management, and email notifications.',
    tags: ['React', 'ASP.NET Core', 'MSSQL', 'Bootstrap'],
    github: 'https://github.com/Thusha01/PROXIMA_Backend',
  },
  {
    id: 'shop', badge: 'Backend', badgeStyle: 'purple', featured: false,
    title: 'Online Shopping Platform',
    description: 'RESTful APIs using microservices architecture with inter-service communication for modularity and scalability. Implemented JWT authentication and Dockerized all services.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'JWT', 'Docker'],
    github: 'https://github.com/Thusha01/Order_Management_API',
  },
  {
    id: 'agriyield', badge: 'ML Research', badgeStyle: 'teal', featured: false,
    title: 'AgriYield — Paddy Production Forecaster',
    description: 'District-wise paddy production forecasting system for Sri Lanka using XGBoost on 900+ records (2006–2024) across 25 districts. Engineered time-series features (Prev_Production, Production_per_Hectare) and applied SHAP for explainability. Deployed as an interactive Streamlit app with real-time predictions and SHAP visualizations. R² Score: 0.979 · RMSE: 14,346.',
    tags: ['Python', 'XGBoost', 'SHAP', 'Streamlit', 'Pandas', 'Matplotlib'],
    github: 'https://github.com/Thusha01/AgriYield-Predictor',
    demo: 'https://thusha01-agriyield-predictor-app-jks5uv.streamlit.app/',
  },
  {
    id: 'portfolio', badge: 'Personal Project', badgeStyle: 'amber', featured: false,
    title: 'Developer Portfolio',
    description: 'This portfolio website — built with React and plain CSS, featuring smooth scroll animations, a dark/light theme toggle with localStorage persistence, responsive layouts, and a contact form. Designed and developed from scratch without any UI libraries.',
    tags: ['React', 'CSS', 'Vite', 'Responsive Design'],
    github: 'https://github.com/Thusha01',
  },
]

export default function Projects() {
  const addRef = useScrollReveal()
  const featured = projects.find(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="section">
      <div ref={addRef(0)} className="reveal section-head">
        <p className="section-label">What I've made</p>
        <h2 className="section-title">Selected<br /><em>projects.</em></h2>
      </div>

      <div className="projects-list">
        {featured && (
          <div ref={addRef(1)} className="reveal">
            <div className="project-featured">
              <div>
                <span className={`badge badge-${featured.badgeStyle}`}>{featured.badge}</span>
                <h3 className="project-title">{featured.title}</h3>
                <p className="project-desc">{featured.description}</p>
                <div className="tags" style={{marginTop:20}}>
                  {featured.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                {featured.github && (
                  <a href={featured.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <GitHubIcon /> View on GitHub
                  </a>
                )}
              </div>
              <div>
                <p className="metrics-label">Key results</p>
                <div className="metrics-grid">
                  {featured.metrics.map(m => (
                    <div key={m.label} className="metric-box">
                      <div className="metric-val">{m.val}</div>
                      <div className="metric-label">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="projects-grid">
          {rest.map((p, i) => (
            <div key={p.id} ref={addRef(i + 2)} className="reveal" style={{transitionDelay:`${i * 80}ms`}}>
              <div className="project-card">
                <span className={`badge badge-${p.badgeStyle}`}>{p.badge}</span>
                <h3 className="project-title project-title-sm">{p.title}</h3>
                <p className="project-desc">{p.description}</p>
                <div className="tags" style={{marginTop:16}}>
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <div style={{display:'flex',flexWrap:'wrap',gap:'8px',marginTop:'auto'}}>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <GitHubIcon /> GitHub
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="project-link project-link-demo">
                      <ExternalIcon /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExternalIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}
