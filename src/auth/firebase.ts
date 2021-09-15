import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';

export const config = {
  apiKey: process.env.FIREBASE_KEY,
  projectId: process.env.FIREBASE_PROJECT_ID,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  authDomain: process.env.FIREBASE_DOMAIN,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

const firebaseApp = initializeApp(config);

export const auth = getAuth(firebaseApp);

export const googleProvider = new GoogleAuthProvider();

export default firebase;
