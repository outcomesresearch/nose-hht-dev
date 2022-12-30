// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getDatabase,
  ref as _ref,
  off,
  update,
  onValue,
} from 'firebase/database';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import store from './store';

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

const VUE_APP_FB_PASSWORD = 'password';
let listeners = [];

function ref(...args) {
  const reference = _ref(...args);
  listeners.push(reference);
  return reference;
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/**
 * Sign user in with studyID and hardcoded password per user management specifications (only use studyID to login)
 */
export async function logIn(email, actionOnSuccess) {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, VUE_APP_FB_PASSWORD)
    .then((loginRepsonse) => {
      return getUserData(loginRepsonse.user.uid, actionOnSuccess);
    })
    .catch((error) => {
      if (error.message.includes('auth/user-not-found'))
        return actionOnSuccess([]);

      store.dispatch('SET_ERROR', error);
      throw error;
    });
}

export function getUserData(uid, actionOnSuccess) {
  return new Promise((r, j) => {
    const db = getDatabase(app);
    const reference = ref(db, uid);

    const successCallback = (snapshot) => {
      const data = (snapshot.val() && snapshot.val().pastScores) || [];
      actionOnSuccess(data);
      return r(data);
    };

    const errorCallback = (e) => {
      store.dispatch('SET_ERROR', e);
      j(e);
    };

    onValue(reference, successCallback, errorCallback);
  });
}

/**
 * Sign up user email and hardcoded password per user management specifications (only use studyID to login)
 */
export async function signUp(email) {
  return new Promise((r, j) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, VUE_APP_FB_PASSWORD)
      .then(({ user }) => {
        // Signed in
        const db = getDatabase(app);
        const reference = ref(db, user.uid);

        update(reference, { emailPlain: email });
        r(user.uid);
      })
      .catch((error) => {
        console.log(error);
        if (error.message.includes('auth/email-already-in-use')) r(undefined);
        else throw error;
      })
      .catch((error) => {
        store.dispatch('SET_ERROR', error);
        j(error);
      });
  });
}

export function addUserData(payload) {
  const { uid } = getAuth().currentUser;
  const db = getDatabase(app);
  const reference = ref(db);

  // Get a key for a new Post.
  const path = `${uid}/pastScores`;
  const newPostKey = Date.now();

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {
    [`${path}/${newPostKey}`]: payload,
  };

  return update(reference, updates).catch((error) => {
    store.dispatch('SET_ERROR', error);
    throw error;
  });
}

export function removeAllListeners() {
  listeners.forEach(off);
}
