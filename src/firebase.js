import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/functions';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBi-OpllbfgMEOptwgMbNcDwmrq4RUoETc",
    authDomain: "instagram-clone-curso-83450.firebaseapp.com",
    projectId: "instagram-clone-curso-83450",
    storageBucket: "instagram-clone-curso-83450.appspot.com",
    messagingSenderId: "193718142773",
    appId: "1:193718142773:web:c920e5f9ad5347772a6e7c",
    measurementId: "G-6KHP6PJHHY"
  });

  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const functions = firebase.functions();

  export {db, auth, storage, functions};