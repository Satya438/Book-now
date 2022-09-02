import { initializeApp } from "firebase/app"
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDmXGQUy8xVLuwznl5rLRhtsGsRTXWehHU",
  authDomain: "email-auth-66d6c.firebaseapp.com",
  databaseURL: "https://email-auth-66d6c-default-rtdb.firebaseio.com",
  projectId: "email-auth-66d6c",
  storageBucket: "email-auth-66d6c.appspot.com",
  messagingSenderId: "178397795672",
  appId: "1:178397795672:web:060267d62ba5fff20ac12d",
  measurementId: "G-MWH3WGCWV8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {

    signInWithPopup(auth, provider)

      .then((result) => {

        const name = result.user.displayName;

        const email = result.user.email;

        const profilePic = result.user.photoURL;

 

        localStorage.setItem("name", name);

        localStorage.setItem("email", email);

        localStorage.setItem("profilePic", profilePic);

      })

      .catch((error) => {

        console.log(error);

      });

    };