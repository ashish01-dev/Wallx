import { useParams, Link } from 'react-router-dom'
import { apps } from '../data/apps'

function priceLabel(app) {
  if (app.priceType === 'free') return 'Free'
  if (app.priceType === 'freemium') return 'Free+'
  if (app.price > 0) return `$${app.price.toFixed(2)}`
  return 'Free'
}

const badgeLabels = {
  'editors-choice': 'Editor\'s Choice',
  'top-free':       'Top Free',
  'top-paid':       'Top Paid',
  'trending':       'Trending',
  'new-release':    'New Release',
  'award-winner':   'Award Winner',
}

export default function AppDetailPage() {
  const { id } = useParams()
  const app = apps.find(a => a.id === id)

  if (!app) {
    return (
      <div className="stack">
        <h1>App not found</h1>
        <div className="card empty">
          <p>No app with id <code>{id}</code> exists.</p>
          <Link to="/browse" className="btn" style={{ display: 'inline-block', marginTop: 12 }}>Browse Apps</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="stack">
      {/* Banner */}
      <div style={{ borderRadius: 'var(--r-xl)', overflow: 'hidden', aspectRatio: '2 / 1', background: 'var(--surface-high)' }}>
        <img src={app.banner} alt={`${app.name} banner`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
      </div>

      {/* Header */}
      <div className="card" style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
        <img src={app.icon} alt={`${app.name} icon`}
          style={{ width: 80, height: 80, borderRadius: 18, flexShrink: 0, background: 'var(--surface-high)' }}
          loading="lazy" />
        <div style={{ flex: 1 }}>
          <h1 style={{ margin: '0 0 2px', fontSize: 'clamp(1.1rem, 3vw, 1.6rem)' }}>{app.name}</h1>
          <p style={{ margin: '0 0 8px', color: 'var(--text-secondary)', fontSize: '.9rem' }}>{app.developer}</p>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center' }}>
            <span className="badge-pill yellow">★ {app.rating.toFixed(1)} ({app.ratingCount.toLocaleString()} ratings)</span>
            <span className="badge-pill blue">{app.category}</span>
            <span className="badge-pill">{priceLabel(app)}</span>
            {(app.badges || []).map(b => (
              <span key={b} className="badge-pill green">{badgeLabels[b] || b}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Download section */}
      <div className="card">
        <h3 style={{ margin: '0 0 12px' }}>Download</h3>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {(app.downloadLinks || []).map(dl => (
            <button
              key={dl.platform}
              className="btn-ghost"
              disabled
              title="Coming Soon"
              style={{ cursor: 'not-allowed', opacity: 0.6 }}
            >
              📦 {dl.platform} — Coming Soon
            </button>
          ))}
          {(!app.downloadLinks || app.downloadLinks.length === 0) && (
            <button className="btn-ghost" disabled style={{ cursor: 'not-allowed', opacity: 0.6 }}>
              📦 Coming Soon
            </button>
          )}
        </div>
        <p style={{ margin: '10px 0 0', color: 'var(--text-muted)', fontSize: '.78rem' }}>
          Download links will be available soon. Check back later.
        </p>
      </div>

      {/* Short description */}
      <div className="card">
        <p style={{ margin: 0, fontSize: '1rem', lineHeight: 1.6 }}>{app.shortDescription}</p>
      </div>

      {/* Screenshots */}
      {app.screenshots && app.screenshots.length > 0 && (
        <section>
          <h2 style={{ marginBottom: 12 }}>Screenshots</h2>
          <div style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 8 }}>
            {app.screenshots.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Screenshot ${i + 1}`}
                loading="lazy"
                style={{
                  height: 320,
                  width: 'auto',
                  borderRadius: 'var(--r-lg)',
                  flexShrink: 0,
                  background: 'var(--surface-high)',
                }}
              />
            ))}
          </div>
        </section>
      )}

      {/* Long description */}
      <div className="card">
        <h2 style={{ marginTop: 0 }}>About this app</h2>
        <p style={{ margin: 0, lineHeight: 1.7, color: 'var(--text-secondary)' }}>{app.longDescription}</p>
      </div>

      {/* Features */}
      {app.features && app.features.length > 0 && (
        <div className="card">
          <h2 style={{ marginTop: 0 }}>Key Features</h2>
          <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 6 }}>
            {app.features.map((f, i) => (
              <li key={i} style={{ color: 'var(--text-secondary)', lineHeight: 1.5 }}>{f}</li>
            ))}
          </ul>
        </div>
      )}

      {/* App info */}
      <div className="card">
        <h2 style={{ marginTop: 0 }}>App Information</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 16 }}>
          {[
            ['Version', app.version],
            ['Size', app.size],
            ['Category', app.category],
            ['Developer', app.developer],
            ['Price', priceLabel(app)],
            ['Updated', app.updatedAt],
            ['Released', app.releaseDate],
            ['Downloads', app.downloads ? app.downloads.toLocaleString() + '+' : 'N/A'],
          ].map(([label, value]) => (
            <div key={label}>
              <p style={{ margin: 0, fontSize: '.75rem', color: 'var(--text-muted)' }}>{label}</p>
              <p style={{ margin: '2px 0 0', fontWeight: 500, fontSize: '.9rem' }}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tags */}
      {app.tags && app.tags.length > 0 && (
        <div className="tag-row">
          {app.tags.map(tag => (
            <Link key={tag} to={`/search?q=${encodeURIComponent(tag)}`} className="chip">{tag}</Link>
          ))}
        </div>
      )}

      <Link to="/browse" style={{ color: 'var(--brand)', fontSize: '.9rem' }}>← Back to Browse</Link>
    </div>
  )
}
