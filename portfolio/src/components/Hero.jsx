import { useDownloadCV } from '../hooks/useDownloadCV'
import { useScrollReveal } from '../hooks/useScrollReveal'

const stats = [
  { num: '3+', label: 'Years building' },
  { num: '8+', label: 'Projects shipped' },
  { num: '3.40', label: 'University GPA' },
  { num: '5+', label: 'Tech stacks' },
]

export default function Hero() {
  const addRef = useScrollReveal()
  const handleCVDownload = useDownloadCV()

  return (
    <section id="hero" className="hero">
      <div className="hero-bg" />
      <div className="hero-inner">
        <div className="hero-layout">

          {/* ── Left: text ── */}
          <div>
            <div ref={addRef(0)} className="reveal">
              <div className="hero-tag">
                <span className="hero-tag-dot pulse" />
                Available for opportunities
              </div>
            </div>

            <div ref={addRef(1)} className="reveal d1">
              <h1>
                Thusharaga
                <span className="accent">Sanujan.</span>
              </h1>
            </div>

            <div ref={addRef(2)} className="reveal d2">
              <p className="hero-sub">
                Full Stack Software Engineer building scalable systems,
                intuitive interfaces, and privacy-first AI — from Colombo, Sri Lanka.
              </p>
            </div>

            <div ref={addRef(3)} className="reveal d3 hero-actions">
              <a href="#projects" className="btn-primary">
                <ArrowIcon /> View Projects
              </a>
              <a href="#contact" className="btn-secondary">
                <MailIcon /> Get in Touch
              </a>
              <button onClick={handleCVDownload} className="btn-secondary">
                <DownloadIcon /> Download CV
              </button>
            </div>

            <div ref={addRef(4)} className="reveal d4 hero-stats">
              {stats.map(s => (
                <div key={s.label}>
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: photo ── */}
          <div ref={addRef(5)} className="reveal d2 hero-photo-wrap">
            <div className="hero-photo-glow" />
            <div className="hero-photo-ring">
              <div className="hero-photo-inner">
                <img
                  src="/profile.jpg"
                  alt="Thusharaga Sanujan"
                  onError={e => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = `
                      <div class="hero-photo-placeholder">
                        <svg width="64" height="64" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                          <circle cx="12" cy="7" r="4"/>
                        </svg>
                        <span>Add profile.jpg to /public</span>
                      </div>`
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function ArrowIcon() {
  return <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-4"/><polyline points="16 3 21 3 21 8"/><line x1="21" y1="3" x2="9" y2="15"/></svg>
}
function MailIcon() {
  return <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
}
function DownloadIcon() {
  return <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
}
