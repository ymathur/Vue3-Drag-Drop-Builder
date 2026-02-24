/**
 * Detects repeatable item groups within a block's DOM.
 *
 * A "repeatable item" is an element that belongs to a group of same-type
 * siblings: li items, table rows, or Bootstrap grid columns.
 *
 * Returns a flat array of DOM elements that can be duplicated / deleted.
 */
export function detectRepeatableItems(container) {
  const seen = new Set()
  const results = []

  function add(el) {
    if (seen.has(el)) return
    seen.add(el)
    results.push(el)
  }

  // 1. ul > li  /  ol > li
  container.querySelectorAll('ul > li, ol > li').forEach(li => add(li))

  // 2. tbody > tr
  container.querySelectorAll('tbody > tr').forEach(tr => add(tr))

  // 3. Bootstrap grid columns  — .row > [class*="col"]
  container.querySelectorAll('.row').forEach(row => {
    const cols = Array.from(row.children).filter(el =>
      Array.from(el.classList).some(c => c.startsWith('col'))
    )
    if (cols.length > 0) cols.forEach(col => add(col))
  })

  return results
}
