import { useRef, useState, useEffect } from 'react'
import { useDownloadCV } from '../hooks/useDownloadCV'

export default function Contact() {
  const handleCVDownload = useDownloadCV()
  const headerRef = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const [form, setForm] = useState({ fname:'', lname:'', email:'', subject:'', message:'' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible') }), { threshold: 0.1 })
    ;[headerRef, leftRef, rightRef].forEach(r => { if(r.current) obs.observe(r.current) })
    return () => obs.disconnect()
  }, [])

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))
  const handleSubmit = e => {
    e.preventDefault()
    if (!form.email || !form.message) return
    setSubmitted(true)
    setForm({ fname:'', lname:'', email:'', subject:'', message:'' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="contact-section">
      <div ref={headerRef} className="reveal section-head">
        <p className="section-label">Let's connect</p>
        <h2 className="section-title">Get in<br /><em>touch.</em></h2>
      </div>

      <div className="contact-grid">
        <div ref={leftRef} className="reveal d1">
          <p className="contact-desc">Whether you have an opportunity, a collaboration idea, or just want to say hello — I'm always happy to hear from you. I'm currently open to full-time roles and interesting projects.</p>
          <div className="contact-items">
            <a href="mailto:thusharagas2001@gmail.com" className="contact-item">
              <div className="contact-icon"><MailIcon /></div>
              <div><div className="contact-item-label">Email</div><div className="contact-item-value">thusharagas2001@gmail.com</div></div>
            </a>
            <a href="https://www.linkedin.com/in/thusharaga-sanujan-4656a3247/" target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="contact-icon"><LinkedInIcon /></div>
              <div><div className="contact-item-label">LinkedIn</div><div className="contact-item-value">linkedin.com/in/thusharaga</div></div>
            </a>
            <button onClick={handleCVDownload} className="contact-item">
              <div className="contact-icon teal"><DownloadIcon /></div>
              <div><div className="contact-item-label">Resume</div><div className="contact-item-value">Download my CV (PDF)</div></div>
            </button>
          </div>
        </div>

        <div ref={rightRef} className="reveal d2">
          <form className="form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group"><label>First name</label><input name="fname" type="text" placeholder="Jane" value={form.fname} onChange={handleChange} /></div>
              <div className="form-group"><label>Last name</label><input name="lname" type="text" placeholder="Smith" value={form.lname} onChange={handleChange} /></div>
            </div>
            <div className="form-group"><label>Email address</label><input name="email" type="email" placeholder="jane@company.com" value={form.email} onChange={handleChange} required /></div>
            <div className="form-group"><label>Subject</label><input name="subject" type="text" placeholder="Job opportunity / Collaboration / Hello" value={form.subject} onChange={handleChange} /></div>
            <div className="form-group"><label>Message</label><textarea name="message" placeholder="Tell me more about what you have in mind..." value={form.message} onChange={handleChange} required rows={5} /></div>
            {submitted && <div className="form-success">Thanks for reaching out! I'll get back to you soon.</div>}
            <button type="submit" className="btn-primary" style={{width:'fit-content'}}>Send message <SendIcon /></button>
          </form>
        </div>
      </div>
    </section>
  )
}

function MailIcon(){return<svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>}
function PhoneIcon(){return<svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>}
function LinkedInIcon(){return<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>}
function DownloadIcon(){return<svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>}
function SendIcon(){return<svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>}
