import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBoE8fGTC3cpvxdubYzmMe4JeDp67X-SMs',
  authDomain: 'react18-file-manager.firebaseapp.com',
  projectId: 'react18-file-manager',
  storageBucket: 'react18-file-manager.appspot.com',
  messagingSenderId: '596314267378',
  appId: '1:596314267378:web:2c15eb665612b124fefa6b',
}

const firebaseapp = firebase.initializeApp(firebaseConfig)
const db = firebaseapp.firestore()
const storage = firebaseapp.storage()
const auth = firebaseapp.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, storage, auth, provider }
