import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="stack" style={{ textAlign: 'center', padding: '60px 0' }}>
      <h1 style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', margin: 0, color: 'var(--text-muted)' }}>404</h1>
      <h2 style={{ margin: '8px 0' }}>Page not found</h2>
      <p style={{ color: 'var(--text-muted)' }}>The page you're looking for doesn't exist or has been moved.</p>
      <div className="row" style={{ justifyContent: 'center' }}>
        <Link to="/" className="btn">Go Home</Link>
        <Link to="/browse" className="ghost">Browse Apps</Link>
      </div>
    </div>
  )
}
