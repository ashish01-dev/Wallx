import { useLocation } from 'react-router-dom'
import { apps } from '../data/apps'
import AppCard from '../components/AppCard'

export default function SearchPage() {
  const params = new URLSearchParams(useLocation().search)
  const q = params.get('q') || ''
  const lower = q.toLowerCase()

  const results = q
    ? apps.filter(a =>
        a.name.toLowerCase().includes(lower) ||
        a.developer.toLowerCase().includes(lower) ||
        a.category.toLowerCase().includes(lower) ||
        (a.tags || []).some(t => t.toLowerCase().includes(lower))
      )
    : []

  return (
    <div className="stack">
      <h1>{q ? `Results for "${q}"` : 'Search Apps'}</h1>

      {!q && (
        <div className="card empty">
          <p>Use the search bar above to find apps by name, category, developer, or tag.</p>
        </div>
      )}

      {q && results.length === 0 && (
        <div className="card empty">
          <p>No apps found for "{q}". Try a different keyword.</p>
        </div>
      )}

      {results.length > 0 && (
        <>
          <p style={{ color: 'var(--text-muted)', fontSize: '.85rem' }}>
            {results.length} app{results.length !== 1 ? 's' : ''} found
          </p>
          <div className="app-grid">
            {results.map(app => <AppCard key={app.id} app={app} />)}
          </div>
        </>
      )}
    </div>
  )
}
