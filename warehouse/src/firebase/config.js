import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage';





// init firebase
firebase.initializeApp(firebaseConfig)
const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp
const storage = firebase.storage();






export { projectAuth,projectFirestore, timestamp,storage }
