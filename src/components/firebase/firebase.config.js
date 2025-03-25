// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHvUoQnN3C4JFohpbGC0-02zc9aB5D3CY",
  authDomain: "user-email-password-auth-3a1e3.firebaseapp.com",
  projectId: "user-email-password-auth-3a1e3",
  storageBucket: "user-email-password-auth-3a1e3.firebasestorage.app",
  messagingSenderId: "900731713272",
  appId: "1:900731713272:web:120cb6ce3d6fc9bb8ded0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;