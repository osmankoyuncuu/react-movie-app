import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  //apiKey: process.env.REACT_APP_GOOGLE_APIKEY,
  //authDomain: process.env.REACT_APP_GOOGLE_AUTHDOMAIN,
  //projectId: process.env.REACT_APP_GOOGLE_PROJECTID,
  //storageBucket: process.env.REACT_APP_GOOGLE_STORAGEBUCKET,
  //messagingSenderId: process.env.REACT_APP_GOOGLE_SENDERID,
  //appId: process.env.REACT_APP_GOOGLE_APIID,
  apiKey: "AIzaSyDvu3QagRUwuPBBTVjF3NjHmUPKFqEinro",
  authDomain: "movie-app-e0047.firebaseapp.com",
  projectId: "movie-app-e0047",
  storageBucket: "movie-app-e0047.appspot.com",
  messagingSenderId: "1014187925074",
  appId: "1:1014187925074:web:1571dd6e9cfdc0cdc8898b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const createUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const loginUser = (email, password, setError) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      setError(false);
    })
    .catch((error) => {
      setError(true);
      console.log(error);
    });
};

export const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      //console.log(user.auth.currentUser);
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error);
    });
};

export const loginOut = () => {
  signOut(auth)
    .then(() => {})
    .catch((error) => {
      // An error happened.
    });
};
export const loginControl = (setCurrentUser) => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setCurrentUser(currentUser);
    } else {
      // User is signed out
      setCurrentUser(false);
    }
  });
};

export const passwordReset = (email, setAlert) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      setAlert(true);
    })
    .catch((error) => {
      const errorMessage = error.message;
      // ..
    });
};
