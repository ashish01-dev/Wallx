import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Browse from './pages/Browse'
import SearchPage from './pages/SearchPage'
import CategoryPage from './pages/CategoryPage'
import ChartsPage from './pages/ChartsPage'
import EditorsChoicePage from './pages/EditorsChoicePage'
import NewReleasesPage from './pages/NewReleasesPage'
import AppDetailPage from './pages/AppDetailPage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="page-wrap">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/charts" element={<ChartsPage />} />
          <Route path="/editors-choice" element={<EditorsChoicePage />} />
          <Route path="/new-releases" element={<NewReleasesPage />} />
          <Route path="/app/:id" element={<AppDetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
