import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB142_bcFRnVZnA0s4WwdHVWlVwDIypSm0",
  authDomain: "netflix-clone-97669.firebaseapp.com",
  projectId: "netflix-clone-97669",
  storageBucket: "netflix-clone-97669.appspot.com",
  messagingSenderId: "150457399206",
  appId: "1:150457399206:web:f0651dbde33f7f9c830167"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }