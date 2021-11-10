// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyC0O62ExMYTCUOR5Z9oJUpmlYItrEVq5Tc',
    authDomain: 'store2-1e891.firebaseapp.com',
    projectId: 'store2-1e891',
    storageBucket: 'store2-1e891.appspot.com',
    messagingSenderId: '1025012127209',
    appId: '1:1025012127209:web:6307549a24e5e72ef9e778',
    measurementId: 'G-7R3HDPWDC7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
