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

export const createUserProfileDocument = async (userAuth, additionalData ) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    console.log(snapShot);

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;