import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBF9c_R1SWsyUUNusY09acrlvida8ZEyVI",
    authDomain: "coachroi.firebaseapp.com",
    projectId: "coachroi",
    storageBucket: "coachroi.firebasestorage.app",
    messagingSenderId: "73542125078",
    appId: "1:73542125078:web:0dd100a3e961dcbff99737",
    measurementId: "G-7S7QSF9N5M",
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);


