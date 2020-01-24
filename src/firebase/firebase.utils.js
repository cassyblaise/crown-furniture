import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAFicb1FinBkKbYwlTgwidfGXQ1hq58X3w",
    authDomain: "ecom-db-ac448.firebaseapp.com",
    databaseURL: "https://ecom-db-ac448.firebaseio.com",
    projectId: "ecom-db-ac448",
    storageBucket: "ecom-db-ac448.appspot.com",
    messagingSenderId: "1012714292223",
    appId: "1:1012714292223:web:09830adfcc755db4fa5dca",
    measurementId: "G-7P8X69BTG1"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export  const firestore = firebase.firestore();

const provider  = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;