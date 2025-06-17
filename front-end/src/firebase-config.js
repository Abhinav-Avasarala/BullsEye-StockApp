// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC6RTUNZYBMgeZalTYZQ6hECQkt681rVjE",
  authDomain: "bullseye-app-5c820.firebaseapp.com",
  projectId: "bullseye-app-5c820",
  storageBucket: "bullseye-app-5c820.firebasestorage.app",
  messagingSenderId: "1050459949251",
  appId: "1:1050459949251:web:b5cb87ada8279e5d91ba76",
  measurementId: "G-25713K3XTF"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
