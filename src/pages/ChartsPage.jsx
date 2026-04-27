import { useState } from 'react'
import { Link } from 'react-router-dom'
import { apps } from '../data/apps'

function priceLabel(app) {
  if (app.priceType === 'free') return 'Free'
  if (app.priceType === 'freemium') return 'Free+'
  if (app.price > 0) return `$${app.price.toFixed(2)}`
  return 'Free'
}

const topFree    = apps.filter(a => a.priceType !== 'paid').sort((a, b) => b.downloads - a.downloads).slice(0, 25)
const topPaid    = apps.filter(a => a.priceType === 'paid').sort((a, b) => b.downloads - a.downloads)
const trending   = apps.filter(a => a.badges.includes('trending')).sort((a, b) => b.rating - a.rating)
const topRated   = [...apps].sort((a, b) => b.rating - a.rating).slice(0, 25)

const TABS = [
  { key: 'free',    label: 'Top Free',  list: topFree },
  { key: 'paid',    label: 'Top Paid',  list: topPaid },
  { key: 'trending',label: 'Trending',  list: trending },
  { key: 'rated',   label: 'Top Rated', list: topRated },
]

export default function ChartsPage() {
  const [tab, setTab] = useState('free')
  const current = TABS.find(t => t.key === tab)

  return (
    <div className="stack">
      <h1>Top Charts</h1>

      <div className="tab-bar" style={{ width: 'fit-content' }}>
        {TABS.map(t => (
          <button key={t.key} className={`tab${tab === t.key ? ' tab-active' : ''}`} onClick={() => setTab(t.key)}>
            {t.label}
          </button>
        ))}
      </div>

      {current.list.length === 0 ? (
        <div className="card empty"><p>No apps in this chart yet.</p></div>
      ) : (
        <div className="app-list">
          {current.list.map((app, i) => (
            <Link key={app.id} to={`/app/${app.id}`} className="app-list-item">
              <span style={{ width: 24, textAlign: 'right', color: 'var(--text-muted)', fontSize: '.9rem', flexShrink: 0 }}>
                {i + 1}
              </span>
              <img src={app.icon} alt={app.name} style={{ width: 52, height: 52, borderRadius: 12, flexShrink: 0 }} loading="lazy" />
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ margin: 0, fontWeight: 600, fontSize: '.9rem', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                  {app.name}
                </p>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '.78rem' }}>{app.category}</p>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <p style={{ margin: 0, fontSize: '.82rem', color: 'var(--brand)' }}>★ {app.rating}</p>
                <span className="badge-pill">{priceLabel(app)}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
