import { useDownloadCV } from '../hooks/useDownloadCV'

export default function Footer() {
  const handleCVDownload = useDownloadCV()
  return (
    <footer className="footer">
      <span className="footer-copy">© 2026 Thusharaga Sanujan. Built with React.</span>
      <div className="footer-links">
        <a href="https://github.com/Thusha01" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.hackerrank.com/profile/Thusharaga" target="_blank" rel="noopener noreferrer">HackerRank</a>
        <a href="https://www.linkedin.com/in/thusharaga-sanujan-4656a3247/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:thusharagas2001@gmail.com">Email</a>
        <button onClick={handleCVDownload}>CV</button>
      </div>
    </footer>
  )
}
