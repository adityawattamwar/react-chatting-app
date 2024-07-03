import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY ,
  authDomain: "reactchat-7b2c4.firebaseapp.com",
  projectId: "reactchat-7b2c4",
  storageBucket: "reactchat-7b2c4.appspot.com",
  messagingSenderId: "452374561678",
  appId: "1:452374561678:web:0e1e39e0f82dbd945d5adf"
  
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
