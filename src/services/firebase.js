// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, off, update, onValue } from 'firebase/database';

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
const listeners = [];

export function getUserData(email, actionOnSuccess, actionOnError) {
  return new Promise((r, j) => {
    const encodedEmail = Buffer.from(email).toString('base64');
    const db = getDatabase(app);
    const reference = ref(db, `${encodedEmail}/`);
    listeners.push(reference);

    const successCallback = (snapshot) => {
      const data = (snapshot.val() && snapshot.val().pastScores) || [];
      actionOnSuccess(data);
      return r(data);
    };

    onValue(reference, successCallback, j);
  });
}

export function addUserData(email, payload) {
  return new Promise((r, j) => {
    const encodedEmail = Buffer.from(email).toString('base64');
    const db = getDatabase(app);
    const reference = ref(db);
    listeners.push(reference);

    // Get a key for a new Post.
    const path = `${encodedEmail}/pastScores`;
    const newPostKey = Date.now();

    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {
      [`${path}/${newPostKey}`]: payload,
      [`${encodedEmail}/emailPlain`]: email,
    };

    update(reference, updates).then(() => {
      listeners.forEach(off);
    });
  });
}
