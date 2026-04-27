import { Link } from 'react-router-dom'
import { apps, categories, categoryMeta } from '../data/apps'
import AppCard from '../components/AppCard'

const featured = apps.filter(a => a.badges.includes('editors-choice')).slice(0, 5)
const topFree   = apps.filter(a => a.priceType !== 'paid').sort((a, b) => b.downloads - a.downloads).slice(0, 10)
const trending  = apps.filter(a => a.badges.includes('trending')).slice(0, 10)
const newest    = [...apps].sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)).slice(0, 10)

const categoryIcons = {
  briefcase: '💼', palette: '🎨', camera: '📷', music: '🎵',
  'book-open': '📖', 'dollar-sign': '💰', heart: '❤️', wrench: '🔧',
  'gamepad-2': '🎮', map: '🗺️', newspaper: '📰',
}

export default function Home() {
  return (
    <div className="stack">
      {/* Hero */}
      <div className="hero card">
        <span className="badge">Editor's Pick</span>
        <h1>Discover Android apps with premium clarity.</h1>
        <p>Browse {apps.length}+ curated apps across {categories.length} categories.</p>
        <div className="row">
          <Link className="btn" to="/browse">Browse All Apps</Link>
          <Link className="ghost" to="/charts">Top Charts</Link>
        </div>
      </div>

      {/* Editor's Choice */}
      <section>
        <div className="section-header">
          <h2>Editor's Choice</h2>
          <Link to="/editors-choice" className="see-all">See all →</Link>
        </div>
        <div className="app-grid">
          {featured.map(app => <AppCard key={app.id} app={app} />)}
        </div>
      </section>

      {/* Categories */}
      <section>
        <div className="section-header">
          <h2>Browse by Category</h2>
        </div>
        <div className="category-grid">
          {categories.map(cat => {
            const meta = categoryMeta[cat]
            const icon = categoryIcons[meta.icon] || '📦'
            return (
              <Link key={cat} to={`/category/${cat.toLowerCase()}`} className="category-card">
                <span className="cat-icon">{icon}</span>
                <span className="cat-label">{cat}</span>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Top Free */}
      <section>
        <div className="section-header">
          <h2>Top Free Apps</h2>
          <Link to="/charts" className="see-all">See charts →</Link>
        </div>
        <div className="app-grid">
          {topFree.map(app => <AppCard key={app.id} app={app} />)}
        </div>
      </section>

      {/* Trending */}
      {trending.length > 0 && (
        <section>
          <div className="section-header">
            <h2>Trending Now</h2>
          </div>
          <div className="app-grid">
            {trending.map(app => <AppCard key={app.id} app={app} />)}
          </div>
        </section>
      )}

      {/* New Releases */}
      <section>
        <div className="section-header">
          <h2>New Releases</h2>
          <Link to="/new-releases" className="see-all">See all →</Link>
        </div>
        <div className="app-grid">
          {newest.map(app => <AppCard key={app.id} app={app} />)}
        </div>
      </section>
    </div>
  )
}
