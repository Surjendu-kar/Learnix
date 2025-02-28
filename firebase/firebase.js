import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATj1eigB4MGoSMc1GWaWu9761BBgqdVss",
  authDomain: "school-management-dce3c.firebaseapp.com",
  projectId: "school-management-dce3c",
  storageBucket: "school-management-dce3c.firebasestorage.app",
  messagingSenderId: "492692639962",
  appId: "1:492692639962:web:7df10bb71de762634255e3",
  measurementId: "G-PVCLRJD63C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
