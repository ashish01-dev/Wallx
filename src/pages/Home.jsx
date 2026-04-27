import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="stack">
      <div className="hero card">
        <span className="badge">Editor's Note</span>
        <h1>Discover Android apps with premium clarity.</h1>
        <p>
          Xapps is ready. Add your app catalog and cloud download links to go live.
        </p>
        <div className="row">
          <Link className="btn" to="/browse">Browse Apps</Link>
          <Link className="ghost" to="/charts">Top Charts</Link>
        </div>
      </div>

      <div className="card empty">
        <h2>No apps published yet</h2>
        <p>Add app entries in <code>src/data/apps.js</code> to populate all sections.</p>
      </div>
    </section>
  )
}
