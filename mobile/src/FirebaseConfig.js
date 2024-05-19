// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWRZbetqGiAH5T_dEPJLP2fkve6ydlsug",
  authDomain: "swaadsansaar-auth.firebaseapp.com",
  projectId: "swaadsansaar-auth",
  storageBucket: "swaadsansaar-auth.appspot.com",
  messagingSenderId: "443180223863",
  appId: "1:443180223863:web:e9b31029d3b9c64361e572",
  measurementId: "G-86CMXVREY7"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const FIREBASE_AUTH = getAuth(FIREBASE_APP);