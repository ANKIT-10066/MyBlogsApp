// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-4be03.firebaseapp.com",
  projectId: "mern-blog-4be03",
  storageBucket: "mern-blog-4be03.appspot.com",
  messagingSenderId: "736707099447",
  appId: "1:736707099447:web:e08ff687515e95ea7c78b2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);