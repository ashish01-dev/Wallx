import { useLocation } from 'react-router-dom'
import { apps } from '../data/apps'

export default function SearchPage() {
  const params = new URLSearchParams(useLocation().search)
  const q = params.get('q') || ''
  const result = apps.filter((a) => (a.name || '').toLowerCase().includes(q.toLowerCase()))

  return (
    <section className="stack">
      <h1>Results for "{q}"</h1>
      {result.length === 0 ? (
        <div className="card empty"><p>No results yet. Add apps to start searching.</p></div>
      ) : (
        <p>{result.length} apps found.</p>
      )}
    </section>
  )
}
