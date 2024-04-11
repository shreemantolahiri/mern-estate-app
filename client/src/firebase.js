// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-app-3c6fb.firebaseapp.com",
  projectId: "mern-estate-app-3c6fb",
  storageBucket: "mern-estate-app-3c6fb.appspot.com",
  messagingSenderId: "669827017693",
  appId: "1:669827017693:web:1bdc6e488b3be9a7d02434"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
