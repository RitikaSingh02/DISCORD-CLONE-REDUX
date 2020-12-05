// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyD8apKPZSeHIeNtza6CCw5qDP_7YXxBy_k",
    authDomain: "discord-clone-aee8f.firebaseapp.com",
    projectId: "discord-clone-aee8f",
    storageBucket: "discord-clone-aee8f.appspot.com",
    messagingSenderId: "358541445761",
    appId: "1:358541445761:web:a22aa1ed0fb10cabf55b80",
    measurementId: "G-SKLVMS2MT2"
};

const firebase_app=firebase.initializeApp(firebaseConfig)
const db =firebase_app.firestore()
const auth=firebase_app.auth()
const provider= new firebase.auth.GoogleAuthProvider()

export { auth ,provider }
export default db;
