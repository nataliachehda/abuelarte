import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "nataliachehda-47514.firebaseapp.com",
  projectId: "nataliachehda-47514",
  storageBucket: "nataliachehda-47514.appspot.com",
  messagingSenderId: "513904090927",
  appId: "1:513904090927:web:7d5842c364b7dbd3c84bda"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);