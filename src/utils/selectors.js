/**
 * Pure, composable selector functions for the apps data layer.
 * All functions are side-effect-free and handle edge cases (empty arrays, null).
 */

/**
 * Returns free and freemium apps sorted by downloads descending.
 * @param {Array} apps
 * @param {number} limit
 */
export function topFree(apps = [], limit = 10) {
  return [...apps]
    .filter((app) => app && (app.priceType === 'free' || app.priceType === 'freemium'))
    .sort((a, b) => (b.downloads ?? 0) - (a.downloads ?? 0))
    .slice(0, limit)
}

/**
 * Returns paid apps sorted by downloads descending.
 * @param {Array} apps
 * @param {number} limit
 */
export function topPaid(apps = [], limit = 10) {
  return [...apps]
    .filter((app) => app && app.priceType === 'paid')
    .sort((a, b) => (b.downloads ?? 0) - (a.downloads ?? 0))
    .slice(0, limit)
}

/**
 * Returns apps sorted by (downloads × price) descending — a proxy for gross revenue.
 * Free apps have a grossing score of 0 and will rank last.
 * @param {Array} apps
 * @param {number} limit
 */
export function topGrossing(apps = [], limit = 10) {
  return [...apps]
    .filter((app) => app != null)
    .sort((a, b) => {
      const scoreB = (b.downloads ?? 0) * (b.price ?? 0)
      const scoreA = (a.downloads ?? 0) * (a.price ?? 0)
      return scoreB - scoreA
    })
    .slice(0, limit)
}

/**
 * Returns apps sorted by releaseDate descending (newest first).
 * @param {Array} apps
 * @param {number} limit
 */
export function newReleases(apps = [], limit = 10) {
  return [...apps]
    .filter((app) => app && app.releaseDate)
    .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))
    .slice(0, limit)
}

/**
 * Returns all apps that carry the 'editors-choice' badge.
 * @param {Array} apps
 */
export function editorsChoice(apps = []) {
  return apps.filter(
    (app) => app && Array.isArray(app.badges) && app.badges.includes('editors-choice'),
  )
}

/**
 * Filters apps by category (case-insensitive).
 * @param {Array} apps
 * @param {string} category
 */
export function categoryFilter(apps = [], category = '') {
  if (!category) return apps
  const lower = category.toLowerCase()
  return apps.filter((app) => app && app.category && app.category.toLowerCase() === lower)
}

/**
 * Filters apps whose name, developer, tags, or shortDescription contains the query string.
 * Case-insensitive full-text search across key fields.
 * @param {Array} apps
 * @param {string} query
 */
export function searchFilter(apps = [], query = '') {
  if (!query || !query.trim()) return apps
  const lower = query.toLowerCase().trim()
  return apps.filter((app) => {
    if (!app) return false
    if (app.name?.toLowerCase().includes(lower)) return true
    if (app.developer?.toLowerCase().includes(lower)) return true
    if (app.shortDescription?.toLowerCase().includes(lower)) return true
    if (Array.isArray(app.tags) && app.tags.some((t) => t?.toLowerCase().includes(lower)))
      return true
    return false
  })
}

/**
 * Returns apps in the same category as the given app, excluding the app itself,
 * sorted by downloads descending.
 * @param {Array} apps
 * @param {Object} app  - the reference app object (must have id and category)
 * @param {number} limit
 */
export function getRelated(apps = [], app = null, limit = 6) {
  if (!app) return []
  return [...apps]
    .filter(
      (a) =>
        a &&
        a.id !== app.id &&
        a.category &&
        app.category &&
        a.category.toLowerCase() === app.category.toLowerCase(),
    )
    .sort((a, b) => (b.downloads ?? 0) - (a.downloads ?? 0))
    .slice(0, limit)
}

/**
 * Returns apps by the same developer, optionally excluding a specific app by id.
 * @param {Array} apps
 * @param {string} developer
 * @param {string|null} excludeId
 */
export function getByDeveloper(apps = [], developer = '', excludeId = null) {
  if (!developer) return []
  const lower = developer.toLowerCase()
  return apps.filter(
    (app) =>
      app &&
      app.developer?.toLowerCase() === lower &&
      (excludeId == null || app.id !== excludeId),
  )
}

export default {
  topFree,
  topPaid,
  topGrossing,
  newReleases,
  editorsChoice,
  categoryFilter,
  searchFilter,
  getRelated,
  getByDeveloper,
}
