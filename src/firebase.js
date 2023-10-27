import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAx28KRIymSpTN3WbF4povKl2MnisRX11c',
  authDomain: 'cs-g-drive.firebaseapp.com',
  projectId: 'cs-g-drive',
  storageBucket: 'cs-g-drive.appspot.com',
  messagingSenderId: '66725891981',
  appId: '1:66725891981:web:63ffc595b1edf1a8e0b7c4',
}

const firebaseapp = firebase.initializeApp(firebaseConfig)
const db = firebaseapp.firestore()
const storage = firebase.storage()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
export { db, storage, auth, provider }
