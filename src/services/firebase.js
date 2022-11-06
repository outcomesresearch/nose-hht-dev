// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, off, update, onValue } from 'firebase/database';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/**
 * Sign user in with studyID and hardcoded password per user management specifications (only use studyID to login)
 */
export function logIn(email, actionOnSuccess) {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, VUE_APP_FB_PASSWORD)
    .then((loginRepsonse) => {
      return getUserData(loginRepsonse.user.uid, actionOnSuccess);
    })
    .catch((error) => {
      if (error.message.includes('auth/user-not-found'))
        return actionOnSuccess([]);

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
      console.error(e);
    };

    onValue(reference, successCallback, errorCallback, { onlyOnce: true });
  });
}

/**
 * Sign up user email and hardcoded password per user management specifications (only use studyID to login)
 */
export function signUp(email) {
  return new Promise((r, j) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, VUE_APP_FB_PASSWORD)
      .then(({ user }) => {
        // Signed in
        const db = getDatabase(app);
        const reference = ref(db, user.uid);

        update(reference, { emailPlain: email }).then(() => {
          off(reference);
        });
        r(user.uid);
      })
      .catch(j);
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

  return update(reference, updates);
}
