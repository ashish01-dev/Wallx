import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [query, setQuery] = useState('')
  const nav = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()
    nav(`/search?q=${encodeURIComponent(query)}`)
  }

  return (
    <header className="top-nav">
      <div className="nav-inner">
        <NavLink to="/" className="logo">
          <span className="logo-mark" />
          <span>Xapps</span>
        </NavLink>

        <nav className="primary-links">
          <NavLink to="/">Today</NavLink>
          <NavLink to="/browse">Apps</NavLink>
          <NavLink to="/category/games">Games</NavLink>
          <NavLink to="/editors-choice">Arcade</NavLink>
          <NavLink to="/search">Search</NavLink>
        </nav>

        <form className="search" onSubmit={onSubmit} role="search">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Games, Apps, Stories, Developers…"
            aria-label="Search apps"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </header>
  )
}
