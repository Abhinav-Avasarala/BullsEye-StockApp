// Firebase configuration and initialization
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDPOQksNL51gXQKt9uZ-yR8g116GQUArPA",
  authDomain: "bullseye-462519.firebaseapp.com",
  projectId: "bullseye-462519",
  storageBucket: "bullseye-462519.firebasestorage.app",
  messagingSenderId: "568217572650",
  appId: "1:568217572650:web:e5d74c238e91d2d683fa53",
  measurementId: "G-Y724XQLP91"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

