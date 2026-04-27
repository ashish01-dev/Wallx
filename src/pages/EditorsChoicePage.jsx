import { apps } from '../data/apps'
import AppCard from '../components/AppCard'

const picks = apps.filter(a => a.badges.includes('editors-choice'))

export default function EditorsChoicePage() {
  return (
    <div className="stack">
      <div className="hero card">
        <span className="badge">Curated</span>
        <h1>Editor's Choice</h1>
        <p>Hand-picked Android apps that stand out for their design, utility, and quality.</p>
      </div>

      <p style={{ color: 'var(--text-muted)', fontSize: '.85rem' }}>{picks.length} picks this season</p>

      <div className="app-grid">
        {picks.map(app => <AppCard key={app.id} app={app} />)}
      </div>
    </div>
  )
}
