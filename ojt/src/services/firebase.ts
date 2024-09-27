import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCcu4KyxIN2EtR18CPu5JNiAtVsEdTtNd0",
  authDomain: "neu-ojt.firebaseapp.com",
  projectId: "neu-ojt",
  storageBucket: "neu-ojt.appspot.com",
  messagingSenderId: "201189267786",
  appId: "1:201189267786:web:2f46bfb542abb78dbac9b3",
  measurementId: "G-XXPZB33LW7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
