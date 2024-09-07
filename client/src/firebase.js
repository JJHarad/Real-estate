// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-fcce4.firebaseapp.com",
  projectId: "mern-estate-fcce4",
  storageBucket: "mern-estate-fcce4.appspot.com",
  messagingSenderId: "520822137954",
  appId: "1:520822137954:web:0041057423dcfe8be41d3b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
export const storage = getStorage(app);
