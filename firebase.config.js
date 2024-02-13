// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4a__zN7TTBPAvBE0WfrP-7ESXBYnpSzY",
  authDomain: "costume-contest-scoreboard.firebaseapp.com",
  projectId: "costume-contest-scoreboard",
  storageBucket: "costume-contest-scoreboard.appspot.com",
  messagingSenderId: "232621568057",
  appId: "1:232621568057:web:24bd675bc17385f6215de8",
  measurementId: "G-DKJNTDXCM1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
