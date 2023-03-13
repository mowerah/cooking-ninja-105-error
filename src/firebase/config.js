import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAA47QVJc4SFlJWPqOpWcR87z-Eb7fuYD4",
  authDomain: "cooking-ninja-site-88bc6.firebaseapp.com",
  projectId: "cooking-ninja-site-88bc6",
  storageBucket: "cooking-ninja-site-88bc6.appspot.com",
  messagingSenderId: "558995959093",
  appId: "1:558995959093:web:704a24d75224e783d3707c"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }