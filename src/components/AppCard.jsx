import { Link } from 'react-router-dom'

function priceLabel(app) {
  if (app.priceType === 'free') return 'Free'
  if (app.priceType === 'freemium') return 'Free+'
  if (app.price > 0) return `$${app.price.toFixed(2)}`
  return 'Free'
}

function starRating(rating) {
  return `★ ${rating.toFixed(1)}`
}

export default function AppCard({ app }) {
  return (
    <Link to={`/app/${app.id}`} className="app-card">
      <img
        src={app.icon}
        alt={app.name}
        className="app-card-icon"
        loading="lazy"
      />
      <p className="app-card-name">{app.name}</p>
      <p className="app-card-dev">{app.developer}</p>
      <div className="app-card-meta">
        <span>{starRating(app.rating)}</span>
        <span>{priceLabel(app)}</span>
      </div>
    </Link>
  )
}
