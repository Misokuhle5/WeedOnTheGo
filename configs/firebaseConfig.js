// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-b0nOmEd9CJ76ARDMnAWg8czSxm33OqI",
  authDomain: "weed-on-the-go.firebaseapp.com",
  projectId: "weed-on-the-go",
  storageBucket: "weed-on-the-go.firebasestorage.app",
  messagingSenderId: "778259011508",
  appId: "1:778259011508:web:deda8c99dac7fcb14a44e1",
  measurementId: "G-7928WFSVE1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)