let instanceCounter = 0

/**
 * Creates a unique canvas instance from a block definition.
 * Rewrites all Bootstrap IDs and data-bs-* references to prevent
 * conflicts when the same block is dropped multiple times.
 */
export function cloneBlock(blockDefinition) {
  const instanceId = `block_${Date.now()}_${++instanceCounter}`
  const suffix = instanceId.replace(/_/g, '-')

  let html = blockDefinition.html || ''

  // Rewrite id attributes so accordion/dropdown targets stay unique per instance
  html = html.replace(/\bid="([^"]+)"/g, `id="$1-${suffix}"`)
  html = html.replace(/data-bs-target="#([^"]+)"/g, `data-bs-target="#$1-${suffix}"`)
  html = html.replace(/data-bs-parent="#([^"]+)"/g, `data-bs-parent="#$1-${suffix}"`)
  html = html.replace(/aria-controls="([^"]+)"/g, `aria-controls="$1-${suffix}"`)
  html = html.replace(/href="#([^"a-z][^"]*)"/, `href="#$1-${suffix}"`)

  return {
    instanceId,
    blockId: blockDefinition.id || blockDefinition.blockId,
    categoryId: blockDefinition.categoryId,
    label: blockDefinition.label,
    html,
    editedHtml: null  // null means "use original html"
  }
}
