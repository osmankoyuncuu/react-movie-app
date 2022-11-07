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

export const loginUser = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("login giriş");
    })
    .catch((error) => {
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
    .then(() => {
      //console.log("çıkış yapıldı");
      //console.log(auth.currentUser);
    })
    .catch((error) => {
      // An error happened.
    });
};
export const loginControl = (setCurrentUser) => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setCurrentUser(currentUser); // hiçbirşeye ihtiyacı yok sadece çalıştır ve aktif kullanıcı bilgilerini al
    } else {
      // User is signed out
      setCurrentUser(false);
    }
  });
};

export const passwordReset = (email) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
    })
    .catch((error) => {
      const errorMessage = error.message;
      // ..
    });
};
