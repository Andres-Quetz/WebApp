import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB5LG9_Q0rYPFb_IRlVD2WOk6M6UpdC2vI",
  authDomain: "proyecto-4418b.firebaseapp.com",
  projectId: "proyecto-4418b",
  storageBucket: "proyecto-4418b.appspot.com",
  messagingSenderId: "1097636253060",
  appId: "1:1097636253060:web:bd892ade5b59df74cde1d1",
  measurementId: "G-VV1WSPR7XG",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
