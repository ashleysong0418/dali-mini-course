import firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyCDfenOYKUDU6HVN5AucetT16W0EKZ1yTE",
  authDomain: "example-8e7d6.firebaseapp.com",
  projectId: "example-8e7d6",
  storageBucket: "example-8e7d6.appspot.com",
  messagingSenderId: "635941725426",
  appId: "1:635941725426:web:7e489c79b86a0de1629c6b",
  measurementId: "G-67SR8EPTV1"
});


const db = firebase.firestore();


export default {
  firebase, db
}
