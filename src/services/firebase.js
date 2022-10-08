// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'nose-hht.firebaseapp.com',
  databaseURL: 'https://nose-hht-default-rtdb.firebaseio.com',
  projectId: 'nose-hht',
  storageBucket: 'nose-hht.appspot.com',
  messagingSenderId: '467271543029',
  appId: '1:467271543029:web:bdf0205d0c91da001ebdbc',
  measurementId: 'G-8S26EB0GEY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const starCountRef = ref(db);
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});
