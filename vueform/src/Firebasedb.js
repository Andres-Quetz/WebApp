// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsTJu7xWpiecsRhwgD9ytbTJuYYJ70dGM",
  authDomain: "onlinestore-34caf.firebaseapp.com",
  projectId: "onlinestore-34caf",
  storageBucket: "onlinestore-34caf.appspot.com",
  messagingSenderId: "768471269893",
  appId: "1:768471269893:web:d9f4c58a9b55b6e517d26c",
  measurementId: "G-R42EXSL8Q0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);