import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCDwM7DIcYAu3qjfEXCiLP3-uM7_NslBAI",
  authDomain: "fp-cc751.firebaseapp.com",
  databaseURL: "https://fp-cc751-default-rtdb.firebaseio.com",
  projectId: "fp-cc751",
  storageBucket: "fp-cc751.appspot.com",
  messagingSenderId: "735921126388",
  appId: "1:735921126388:web:0728a45dc4ee964200d7a1",
  measurementId: "G-6J6R16WV4F"
  };
const FirebaseApp = firebase.initializeApp(firebaseConfig);

const db = FirebaseApp.firestore();
const auth = FirebaseApp.auth();

export { db, auth };