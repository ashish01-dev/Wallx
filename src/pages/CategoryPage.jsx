import { useParams } from 'react-router-dom'
import { apps, categoryMeta } from '../data/apps'
import AppCard from '../components/AppCard'

export default function CategoryPage() {
  const { slug } = useParams()
  // Match category case-insensitively
  const categoryName = Object.keys(categoryMeta).find(
    c => c.toLowerCase() === slug.toLowerCase()
  )
  const meta = categoryName ? categoryMeta[categoryName] : null
  const filtered = apps
    .filter(a => a.category.toLowerCase() === slug.toLowerCase())
    .sort((a, b) => b.downloads - a.downloads)

  if (!meta) {
    return (
      <div className="stack">
        <h1>Category not found</h1>
        <div className="card empty"><p>No category named "{slug}".</p></div>
      </div>
    )
  }

  return (
    <div className="stack">
      <div className="card" style={{ borderLeft: `4px solid ${meta.color}` }}>
        <h1 style={{ margin: 0 }}>{meta.label}</h1>
        <p style={{ color: 'var(--text-secondary)', margin: '4px 0 0' }}>{meta.description}</p>
        <p style={{ color: 'var(--text-muted)', fontSize: '.85rem', margin: '4px 0 0' }}>
          {filtered.length} app{filtered.length !== 1 ? 's' : ''}
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="card empty"><p>No apps in this category yet.</p></div>
      ) : (
        <div className="app-grid">
          {filtered.map(app => <AppCard key={app.id} app={app} />)}
        </div>
      )}
    </div>
  )
}
