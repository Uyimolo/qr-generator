// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOf55-VwMyE0FLKzIffFuqsrGAjcNFBKA",
  authDomain: "get-qr-1e9b1.firebaseapp.com",
  projectId: "get-qr-1e9b1",
  storageBucket: "get-qr-1e9b1.appspot.com",
  messagingSenderId: "880170831201",
  appId: "1:880170831201:web:c3fb37a5aba2ee22820920",
  measurementId: "G-B70MFP9BWY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
