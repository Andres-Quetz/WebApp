import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyC0O62ExMYTCUOR5Z9oJUpmlYItrEVq5Tc',
    authDomain: 'store2-1e891.firebaseapp.com',
    projectId: 'store2-1e891',
    storageBucket: 'store2-1e891.appspot.com',
    messagingSenderId: '1025012127209',
    appId: '1:1025012127209:web:6307549a24e5e72ef9e778',
    measurementId: 'G-7R3HDPWDC7',
};

firebase.initializeApp(firebaseConfig);
export const FirebaseStorage = firebase.storage();
export default firebase.firestore();
