import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhKsjoZ5SsfZO9b3Hv1H3tmly3dsnc7Kc",
  authDomain: "crwn-clothing-db-3b055.firebaseapp.com",
  projectId: "crwn-clothing-db-3b055",
  storageBucket: "crwn-clothing-db-3b055.appspot.com",
  messagingSenderId: "618166279720",
  appId: "1:618166279720:web:96bf311c97ac5def22df1d",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userRef = doc(db, "users", userAuth.uid);
    console.log(userRef);
    const snapshot = await getDoc(userRef);
    console.log(snapshot)
    console.log(snapshot.exists());
};