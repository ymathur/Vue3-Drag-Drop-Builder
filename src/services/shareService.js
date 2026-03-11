/**
 * Share Service — manages public sharing of projects.
 *
 * Each project has a `sharing` field:
 *   { enabled: boolean, shareToken: string|null }
 *
 * When sharing is enabled, the project is readable at `/share/:shareToken`.
 */
import {
  doc,
  updateDoc,
  query,
  collection,
  where,
  getDocs,
} from 'firebase/firestore'
import { db } from '@/firebase/config.js'

const PROJECTS_COL = 'projects'

/**
 * Generate a URL-safe random token (12 chars).
 */
function _generateToken() {
  const chars  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let token = ''
  const arr = new Uint8Array(12)
  crypto.getRandomValues(arr)
  for (const byte of arr) {
    token += chars[byte % chars.length]
  }
  return token
}

/**
 * Enable sharing for a project. Generates a share token if none exists.
 * @param {string} projectId
 * @returns {string} shareToken
 */
export async function enableSharing(projectId) {
  const token = _generateToken()
  await updateDoc(doc(db, PROJECTS_COL, projectId), {
    'sharing.enabled':    true,
    'sharing.shareToken': token,
  })
  return token
}

/**
 * Disable sharing (hides the project from public, but keeps the token).
 * @param {string} projectId
 */
export async function disableSharing(projectId) {
  await updateDoc(doc(db, PROJECTS_COL, projectId), {
    'sharing.enabled': false,
  })
}

/**
 * Regenerate the share token (invalidates old links).
 * @param {string} projectId
 * @returns {string} new shareToken
 */
export async function regenerateShareToken(projectId) {
  const token = _generateToken()
  await updateDoc(doc(db, PROJECTS_COL, projectId), {
    'sharing.shareToken': token,
  })
  return token
}

/**
 * Look up a project by its share token. Only returns the project
 * if sharing is enabled.
 * @param {string} token
 * @returns {object|null}
 */
export async function getProjectByShareToken(token) {
  const q = query(
    collection(db, PROJECTS_COL),
    where('sharing.shareToken', '==', token),
    where('sharing.enabled', '==', true),
  )
  const snap = await getDocs(q)
  if (snap.empty) return null
  const d = snap.docs[0]
  return { id: d.id, ...d.data() }
}
