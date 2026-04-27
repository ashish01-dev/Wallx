import { useParams } from 'react-router-dom'

export default function AppDetailPage() {
  const { id } = useParams()
  return (
    <section className="stack">
      <h1>App Detail</h1>
      <div className="card empty">
        <p>App <code>{id}</code> is not available yet. Add it in data file.</p>
      </div>
    </section>
  )
}
