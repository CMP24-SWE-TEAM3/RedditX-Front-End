import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnem0uDuXau-5gIjGI68T04i6WZ7Cw1Tk",
  authDomain: "reddit-clone-ad66c.firebaseapp.com",
  projectId: "reddit-clone-ad66c",
  storageBucket: "reddit-clone-ad66c.appspot.com",
  messagingSenderId: "729717485267",
  appId: "1:729717485267:web:029ef4242a4b8e7666ee26",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const facebookProvider = new FacebookAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signInWithFacebookPopup = () =>
  signInWithPopup(auth, facebookProvider);
