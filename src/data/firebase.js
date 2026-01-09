// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // ← обязательно

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXMbeLhumjnZCVkPBOImzPV1PP5pwx1v0",
  authDomain: "axios-b8a0b.firebaseapp.com",
  projectId: "axios-b8a0b",
  storageBucket: "axios-b8a0b.firebasestorage.app",
  messagingSenderId: "615709890418",
  appId: "1:615709890418:web:7faa0d5d89a75f6d38efeb",
  measurementId: "G-6YYGRB958Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Именованный экспорт Firestore
export const db = getFirestore(app);
