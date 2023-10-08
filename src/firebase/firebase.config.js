// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKOmrY2ExTMhKUC2ilfawrxR668YwOtik",
  authDomain: "react-event-management-9dca3.firebaseapp.com",
  projectId: "react-event-management-9dca3",
  storageBucket: "react-event-management-9dca3.appspot.com",
  messagingSenderId: "522297701668",
  appId: "1:522297701668:web:a042ef1f66d2af51f42fb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
