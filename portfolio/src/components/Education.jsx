import { useScrollReveal } from '../hooks/useScrollReveal'

const education = [
  {
    degree: 'BSc (Hons) in Information Technology',
    school: 'University of Moratuwa',
    period: '2022 – 2026',
    location: 'Colombo, Sri Lanka',
    courses: ['Data Structures', 'Software Engineering', 'Databases', 'Web Development', 'Networking', 'UI/UX Engineering'],
    gpa: '3.40', year: '2026',
  },
  {
    degree: "Secondary Education — A/Ls",
    school: "J/Methodist Girls' High School",
    period: '2018 – 2020',
    courses: ['Physical Science Stream', '2AB'],
    gpa: null, year: '2020',
  },
]

export default function Education() {
  const addRef = useScrollReveal()
  return (
    <section id="education" className="section">
      <div ref={addRef(0)} className="reveal section-head">
        <p className="section-label">Academic background</p>
        <h2 className="section-title">Education.</h2>
      </div>
      <div className="edu-grid">
        {education.map((edu, i) => (
          <div key={edu.school} ref={addRef(i + 1)} className="reveal" style={{transitionDelay:`${i*100}ms`}}>
            <div className="edu-card">
              <span className="edu-year">{edu.year}</span>
              <div className="edu-degree">{edu.degree}</div>
              <div className="edu-school">{edu.school}</div>
              <div className="edu-meta">{edu.period}{edu.location && ` · ${edu.location}`}</div>
              <div className="edu-courses">{edu.courses.join(' · ')}</div>
              {edu.gpa && <span className="gpa-badge">CGPA {edu.gpa}</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
