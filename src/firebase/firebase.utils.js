import firebase from "firebase";
import 'firebase/firebase';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB_oenWTD5s7ZoG54BWIQbpm4Lp7Z2jR0Y",
    authDomain: "crwn-db-61fa5.firebaseapp.com",
    databaseURL: "https://crwn-db-61fa5.firebaseio.com",
    projectId: "crwn-db-61fa5",
    storageBucket: "",
    messagingSenderId: "373409325456",
    appId: "1:373409325456:web:4cf9ce08c129f026"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;