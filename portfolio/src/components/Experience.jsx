import { useScrollReveal } from '../hooks/useScrollReveal'

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Northern Engineering Consortium Pvt Ltd',
    period: 'Nov 2025 – Present',
    points: [
      'Leading development of Servicely — a multi-platform service marketplace built with ASP.NET Core, React, React Native, and PostgreSQL.',
      'Architected the backend, built the Admin web app, and coordinated mobile app development from scratch to Play Store release.',
      'Managed production infrastructure: backend on AWS EC2, Admin on Vercel, mobile on Google Play Store.',
      'Implemented job lifecycle management, role-based access control, payment workflows, and push notification system.',
    ],
    tags: ['ASP.NET Core', 'React', 'React Native', 'PostgreSQL', 'AWS EC2', 'Vercel'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Mindox Techno Pvt Ltd',
    period: 'Mar 2025 – Aug 2025',
    points: [
      'Designed and built a WPF-based automation testing tool using C#, TCP/IP, gRPC, and JSON serialization for industrial systems.',
      'Implemented backend features for ASMPT and 3C Mighty Engine systems including simulator communication and database integration.',
      'Led system testing, log analysis, error troubleshooting, and produced Doxygen technical documentation.',
    ],
    tags: ['C#', 'WPF', 'TCP/IP', 'gRPC', 'Azure DevOps', 'Agile'],
  },
]

export default function Experience() {
  const addRef = useScrollReveal()
  return (
    <section id="experience" className="section">
      <div ref={addRef(0)} className="reveal section-head">
        <p className="section-label">Work history</p>
        <h2 className="section-title">Where I've<br /><em>built things.</em></h2>
      </div>
      <div className="exp-list">
        {experiences.map((exp, i) => (
          <div key={exp.company} ref={addRef(i + 1)} className="reveal" style={{transitionDelay:`${i*100}ms`}}>
            <div className="exp-card">
              <div className="exp-header">
                <div>
                  <div className="exp-role">{exp.role}</div>
                  <div className="exp-company">{exp.company}</div>
                </div>
                <span className="exp-period">{exp.period}</span>
              </div>
              <div className="exp-points">
                {exp.points.map((pt, idx) => (
                  <div key={idx} className="exp-point">
                    <span className="exp-point-dash">—</span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
              <div className="tags">
                {exp.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
