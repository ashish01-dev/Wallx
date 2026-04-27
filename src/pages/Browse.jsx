import { apps } from '../data/apps'

export default function Browse() {
  return (
    <section className="stack">
      <h1>Browse Apps</h1>
      {apps.length === 0 ? <Empty /> : <p>App grid renders here.</p>}
    </section>
  )
}

function Empty() {
  return (
    <div className="card empty">
      <h2>Catalog is empty</h2>
      <p>Your Android app list will appear here once added.</p>
    </div>
  )
}
