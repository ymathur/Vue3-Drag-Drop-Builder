/**
 * Project Service — Firestore CRUD operations for projects.
 *
 * Collections:
 *   projects/{projectId}  — project docs owned by users
 *   config/app            — app-wide settings (free tier limit, pricing)
 */
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from '@/firebase/config.js'

const PROJECTS_COL = 'projects'
const CONFIG_DOC   = 'config/app'

// ─── Create ──────────────────────────────────────────────────

/**
 * Create a new project in Firestore.
 * @param {string} uid       — owner's Firebase UID
 * @param {string} name      — project display name
 * @param {object} data      — project data (v2.0 format: { version, pages[], activePageId, activeCategory, theme })
 * @returns {string} projectId
 */
export async function createProject(uid, name, data) {
  const docRef = await addDoc(collection(db, PROJECTS_COL), {
    ownerId:   uid,
    name,
    data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    sharing: {
      enabled:    false,
      shareToken: null,
    },
  })
  return docRef.id
}

// ─── Read ────────────────────────────────────────────────────

/**
 * Get a single project by ID.
 * @param {string} projectId
 * @returns {object|null} — project data with id, or null if not found
 */
export async function getProject(projectId) {
  const snap = await getDoc(doc(db, PROJECTS_COL, projectId))
  if (!snap.exists()) return null
  return { id: snap.id, ...snap.data() }
}

/**
 * Get all projects owned by a user, ordered by last update.
 * @param {string} uid
 * @returns {object[]} — array of project summaries
 */
export async function getUserProjects(uid) {
  // Single-field query (no composite index needed).
  // We sort client-side to avoid requiring a Firestore composite index.
  const q = query(
    collection(db, PROJECTS_COL),
    where('ownerId', '==', uid),
  )
  const snap = await getDocs(q)
  const projects = snap.docs.map(d => ({ id: d.id, ...d.data() }))

  // Sort by updatedAt descending (most recent first)
  projects.sort((a, b) => {
    const aTime = a.updatedAt?.toMillis?.() ?? a.updatedAt?.seconds * 1000 ?? 0
    const bTime = b.updatedAt?.toMillis?.() ?? b.updatedAt?.seconds * 1000 ?? 0
    return bTime - aTime
  })

  return projects
}

// ─── Update ──────────────────────────────────────────────────

/**
 * Update the project's canvas/theme data (auto-save).
 * @param {string} projectId
 * @param {object} data — full project data blob
 */
export async function updateProjectData(projectId, data) {
  await updateDoc(doc(db, PROJECTS_COL, projectId), {
    data,
    updatedAt: serverTimestamp(),
  })
}

/**
 * Rename a project.
 * @param {string} projectId
 * @param {string} name
 */
export async function updateProjectName(projectId, name) {
  await updateDoc(doc(db, PROJECTS_COL, projectId), {
    name,
    updatedAt: serverTimestamp(),
  })
}

// ─── Delete ──────────────────────────────────────────────────

/**
 * Permanently delete a project.
 * @param {string} projectId
 */
export async function deleteProject(projectId) {
  await deleteDoc(doc(db, PROJECTS_COL, projectId))
}

// ─── App Config ──────────────────────────────────────────────

/**
 * Fetch the global app config (free tier limits, pricing, etc.).
 * Falls back to sensible defaults if the doc doesn't exist.
 * @returns {object}
 */
export async function getAppConfig() {
  try {
    const snap = await getDoc(doc(db, CONFIG_DOC))
    if (snap.exists()) return snap.data()
  } catch (_) { /* config doc may not exist yet */ }

  // Defaults
  return {
    freeTierMaxProjects: 3,
    proPriceMonthly:     500,    // cents
    stripePriceId:       null,
  }
}
