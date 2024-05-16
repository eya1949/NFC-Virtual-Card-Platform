import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tamurt-pfe1.firebaseapp.com",
  projectId: "tamurt-pfe1",
  storageBucket: "tamurt-pfe1.appspot.com",
  messagingSenderId: "1070332971812",
  appId: "1:1070332971812:web:c4238104de0c86216401b1",
  measurementId: "G-6C5ELZH1LX",
};

 export const app = initializeApp(firebaseConfig);

