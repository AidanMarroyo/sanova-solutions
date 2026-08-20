import { initializeApp, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, Auth } from 'firebase/auth';
import {
  getFirestore,
  collection,
  where,
  getDocs,
  query,
  limit,
  Firestore,
  DocumentSnapshot,
} from 'firebase/firestore';
import { getStorage, FirebaseStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCbC7OoN5i3Uezv-4Hsd8ZkCsBhgBnj-R0',

  authDomain: 'sanova-web-solutions.firebaseapp.com',

  projectId: 'sanova-web-solutions',

  storageBucket: 'sanova-web-solutions.firebasestorage.app',

  messagingSenderId: '101196759380',

  appId: '1:101196759380:web:724c7bb726806ab2b548c1',

  measurementId: 'G-0F32JP9ZVD',
};

function createFirebaseApp(config: typeof firebaseConfig): FirebaseApp {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
}

const firebaseApp = createFirebaseApp(firebaseConfig);

// Auth exports
export const auth: Auth = getAuth(firebaseApp);
export const googleAuthProvider: GoogleAuthProvider = new GoogleAuthProvider();

// Firestore exports
export const firestore: Firestore = getFirestore(firebaseApp);

// Storage exports
export const storage: FirebaseStorage = getStorage(firebaseApp);
export const STATE_CHANGED = 'state_changed';

/**
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username: string) {
  const q = query(
    collection(firestore, 'users'),
    where('username', '==', username),
    limit(1)
  );
  const userDoc = (await getDocs(q)).docs[0];
  return userDoc;
}

/**
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc: DocumentSnapshot) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data?.createdAt.toMillis() || 0,
    updatedAt: data?.updatedAt.toMillis() || 0,
  };
}
