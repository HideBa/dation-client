import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';

export const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_DOMAIN,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
};

const firebaseApp = initializeApp(config);

export const auth = getAuth(firebaseApp);

export const googleProvider = new GoogleAuthProvider();

export default firebase;
