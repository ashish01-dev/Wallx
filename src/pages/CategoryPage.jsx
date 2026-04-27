import { useParams } from 'react-router-dom'

export default function CategoryPage() {
  const { slug } = useParams()
  return (
    <section className="stack">
      <h1>{slug}</h1>
      <div className="card empty"><p>No apps in this category yet.</p></div>
    </section>
  )
}
