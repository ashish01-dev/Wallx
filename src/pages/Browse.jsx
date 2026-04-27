import { useState } from 'react'
import { apps, categories } from '../data/apps'
import AppCard from '../components/AppCard'

export default function Browse() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [sort, setSort] = useState('popular')

  const filtered = (activeCategory === 'All' ? apps : apps.filter(a => a.category === activeCategory))
    .slice()
    .sort((a, b) => {
      if (sort === 'popular')  return b.downloads - a.downloads
      if (sort === 'rating')   return b.rating - a.rating
      if (sort === 'newest')   return new Date(b.releaseDate) - new Date(a.releaseDate)
      if (sort === 'name')     return a.name.localeCompare(b.name)
      return 0
    })

  return (
    <div className="stack">
      <h1>Browse Apps</h1>

      {/* Category filter */}
      <div className="tag-row">
        {['All', ...categories].map(cat => (
          <button
            key={cat}
            className={`chip${activeCategory === cat ? ' chip-active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Sort */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Sort by</span>
        {[['popular', 'Most Popular'], ['rating', 'Top Rated'], ['newest', 'Newest'], ['name', 'A–Z']].map(([val, label]) => (
          <button
            key={val}
            className={`chip${sort === val ? ' chip-active' : ''}`}
            onClick={() => setSort(val)}
          >
            {label}
          </button>
        ))}
      </div>

      <p style={{ color: 'var(--text-muted)', fontSize: '.85rem' }}>
        {filtered.length} app{filtered.length !== 1 ? 's' : ''} found
      </p>

      <div className="app-grid">
        {filtered.map(app => <AppCard key={app.id} app={app} />)}
      </div>
    </div>
  )
}
