// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "personal-demo-ff6d1.firebaseapp.com",
  projectId: "personal-demo-ff6d1",
  storageBucket: "personal-demo-ff6d1.firebasestorage.app",
  messagingSenderId: "9606387637",
  appId: "1:9606387637:web:d17c69dba9bba1b1b42bfc",
  measurementId: "G-CG1511HZ90",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
export const db = getFirestore(app);
