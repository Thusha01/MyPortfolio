import { useScrollReveal } from '../hooks/useScrollReveal'

const skillCategories = [
  { label: 'Languages', skills: ['C#', 'JavaScript', 'Java', 'Python', 'C'], accent: true },
  { label: 'Web & Mobile', skills: ['ASP.NET Core', 'React', 'React Native', 'Spring Boot', 'HTML/CSS'] },
  { label: 'Databases', skills: ['PostgreSQL', 'MSSQL', 'MySQL', 'MongoDB'] },
  { label: 'Cloud & DevOps', skills: ['AWS EC2', 'Docker', 'Vercel', 'Azure DevOps', 'Git'] },
  { label: 'AI & Research', skills: ['PyTorch', 'Federated Learning', 'SHAP / LIME', 'Blockchain'] },
]

export default function About() {
  const addRef = useScrollReveal()
  return (
    <section id="about" className="section">
      <div ref={addRef(0)} className="reveal section-head">
        <p className="section-label">Who I am</p>
        <h2 className="section-title">Engineer who ships<br /><em>real things.</em></h2>
      </div>

      <div className="about-grid">
        <div ref={addRef(1)} className="reveal d1">
          <div className="about-text">
            <p>I'm a <strong>4th-year Information Technology undergraduate</strong> at University of Moratuwa with a 3.40 GPA, currently working as a Full Stack Developer at Northern Engineering Consortium — building <strong>Servicely</strong>, a multi-platform service marketplace used in production today.</p>
            <p>My background spans backend architecture, industrial automation tooling, and research-grade AI systems. I write clean, maintainable code, manage production deployments, and know how to work autonomously across the entire stack — from database schemas to Google Play Store releases.</p>
            <p>Right now I'm completing my final-year research on <strong>MedTrust</strong> — a privacy-preserving healthcare prediction framework combining Federated Learning, Blockchain auditability, and Explainable AI, supervised by Dr. Firdhous M.F.M.</p>
          </div>
          <div className="about-socials">
            <a href="https://www.linkedin.com/in/thusharaga-sanujan-4656a3247/" target="_blank" rel="noopener noreferrer" className="social-btn">
              <LinkedInIcon /> LinkedIn
            </a>
            <a href="https://github.com/Thusha01" target="_blank" rel="noopener noreferrer" className="social-btn">
              <GitHubIcon /> GitHub
            </a>
            <a href="https://www.hackerrank.com/profile/thusharagas2001" target="_blank" rel="noopener noreferrer" className="social-btn">
              <HackerRankIcon /> HackerRank
            </a>
          </div>
        </div>

        <div ref={addRef(2)} className="reveal d2 skills-wrap">
          {skillCategories.map(cat => (
            <div key={cat.label}>
              <p className="skills-cat-label">{cat.label}</p>
              <div className="chips">
                {cat.skills.map(s => (
                  <span key={s} className={`chip${cat.accent ? ' accent' : ''}`}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LinkedInIcon() {
  return <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
}
function GitHubIcon() {
  return <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
}

function HackerRankIcon() {
  return (
    <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.016 16.784c-.08.08-.189.12-.296.12a.42.42 0 01-.296-.12l-1.404-1.404a4.093 4.093 0 01-2.923 1.22 4.112 4.112 0 01-4.108-4.108c0-1.088.425-2.11 1.197-2.876L7.74 8.17a.418.418 0 010-.592l.592-.592a.418.418 0 01.592 0l1.448 1.448A4.07 4.07 0 0112.097 7.9a4.112 4.112 0 014.108 4.108c0 1.03-.383 2-.992 2.752l1.404 1.404a.418.418 0 010 .592l-.601.028zm-2.943-1.98a2.87 2.87 0 00.848-2.036 2.876 2.876 0 00-2.872-2.872c-.74 0-1.415.28-1.924.736l1.137 1.137v1.872h-1.1l-1.044-1.044a2.856 2.856 0 00-.6 1.772 2.876 2.876 0 002.872 2.872c.8 0 1.524-.328 2.044-.856l-1.096-1.096h1.137l.598.515z"/>
    </svg>
  )
}
