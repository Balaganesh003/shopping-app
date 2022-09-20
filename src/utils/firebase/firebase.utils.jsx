import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDwfSr29THF2gkgXKxfT4gOWcybDcKZp4o",
    authDomain: "react-shopping-app-db.firebaseapp.com",
    projectId: "react-shopping-app-db",
    storageBucket: "react-shopping-app-db.appspot.com",
    messagingSenderId: "124364196849",
    appId: "1:124364196849:web:8c00f4b52c690981ffd250"
};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);