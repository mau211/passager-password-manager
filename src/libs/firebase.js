// Third party dependencies
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signOut,
  signInWithPopup,
  GoogleAuthProvider 
} from "firebase/auth";
import {
  addDoc, 
  collection, 
  doc,
  deleteDoc,  
  getFirestore 
} from "firebase/firestore";
// Config 
import { firebaseConfig } from "../config/firebase.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication
const provider = new GoogleAuthProvider()

export const collectIdsAndDocs = (doc) => {
  return { id: doc.id, ...doc.data() };
};

// Firestore wrapper
export const fireStore = {
  addDoc,
  collection,
  doc,
  deleteDoc
};

// Firebase Auth wrapper
export const fireAuth = {
  getAuth,
  signOut
}

export const auth = getAuth();
export const db = getFirestore();
export const  signInWithGoogle = () => signInWithPopup(auth, provider);
export default app;