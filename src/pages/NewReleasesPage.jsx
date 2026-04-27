import { apps } from '../data/apps'
import AppCard from '../components/AppCard'

const sorted = [...apps].sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))

export default function NewReleasesPage() {
  return (
    <div className="stack">
      <h1>New Releases</h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '.85rem' }}>
        The latest Android apps, sorted by release date.
      </p>
      <div className="app-grid">
        {sorted.map(app => <AppCard key={app.id} app={app} />)}
      </div>
    </div>
  )
}
