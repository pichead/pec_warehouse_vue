import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyDlXw4qjClF3CMCG6id5Lp7mWtIPQfe8Dg",
//     authDomain: "warehouse-development-a88be.firebaseapp.com",
//     projectId: "warehouse-development-a88be",
//     storageBucket: "warehouse-development-a88be.appspot.com",
//     messagingSenderId: "57590258722",
//     appId: "1:57590258722:web:b7888e65d2bfc6c5acfe7b"
// };


// // // test database
const firebaseConfig = {
    apiKey: "AIzaSyAxnAvL3PXtoRMgROjaY7BynxcIWSWIfMA",
    authDomain: "warehouse-327518.firebaseapp.com",
    projectId: "warehouse-327518",
    storageBucket: "warehouse-327518.appspot.com",
    messagingSenderId: "146843046203",
    appId: "1:146843046203:web:29052deeb7f595a7d3a71e"
};




// init firebase
firebase.initializeApp(firebaseConfig)
const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp
const storage = firebase.storage();






export { projectAuth,projectFirestore, timestamp,storage }