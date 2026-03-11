/**
 * User Service — Firestore CRUD for user profile documents.
 *
 * Each authenticated user has a doc at `users/{uid}` containing
 * their profile info, subscription status, and metadata.
 */
import {
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  serverTimestamp,
} from 'firebase/firestore'
import { deleteUser } from 'firebase/auth'
import { db, auth } from '@/firebase/config.js'
import { getUserProjects, deleteProject } from '@/services/projectService.js'

const USERS_COL = 'users'

/**
 * Get or create a user document. Called on every sign-in to ensure
 * the user doc exists and is up to date.
 *
 * @param {string} uid
 * @param {{ displayName: string, email: string, photoURL: string }} profile
 * @returns {object} user document data
 */
export async function getOrCreateUserDoc(uid, profile) {
  const ref  = doc(db, USERS_COL, uid)
  const snap = await getDoc(ref)

  if (snap.exists()) {
    // Update lastLoginAt and profile fields that may have changed
    await setDoc(ref, {
      displayName: profile.displayName,
      email:       profile.email,
      photoURL:    profile.photoURL,
      lastLoginAt: serverTimestamp(),
    }, { merge: true })

    return { id: snap.id, ...snap.data() }
  }

  // First-time user — create the doc
  const userData = {
    displayName:  profile.displayName,
    email:        profile.email,
    photoURL:     profile.photoURL,
    createdAt:    serverTimestamp(),
    lastLoginAt:  serverTimestamp(),
    subscription: {
      tier:              'free',
      stripeCustomerId:  null,
      status:            null,
      currentPeriodEnd:  null,
    },
  }

  await setDoc(ref, userData)
  return { id: uid, ...userData }
}

/**
 * Get a user document by UID.
 * @param {string} uid
 * @returns {object|null}
 */
export async function getUserDoc(uid) {
  const snap = await getDoc(doc(db, USERS_COL, uid))
  if (!snap.exists()) return null
  return { id: snap.id, ...snap.data() }
}

/**
 * Delete a user's account entirely:
 * 1. Delete all their projects from Firestore
 * 2. Delete their user document
 * 3. Delete the Firebase Auth account
 *
 * @param {string} uid
 */
export async function deleteUserAccount(uid) {
  // 1. Delete all projects
  const projects = await getUserProjects(uid)
  await Promise.all(projects.map(p => deleteProject(p.id)))

  // 2. Delete user doc
  await deleteDoc(doc(db, USERS_COL, uid))

  // 3. Delete Firebase Auth user (must be done last, requires recent sign-in)
  const currentUser = auth.currentUser
  if (currentUser && currentUser.uid === uid) {
    await deleteUser(currentUser)
  }
}
