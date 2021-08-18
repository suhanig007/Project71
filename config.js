import * as firebase from 'firebase'
require("@firebase/firestore")
import 'firebase/auth'
var firebaseConfig ={
  apiKey: "AIzaSyCy6CQjMSIPSm_X7BMUuT_q38KH23VOEq4",
    authDomain: "project71-b9c4f.firebaseapp.com",
    projectId: "project71-b9c4f",
    storageBucket: "project71-b9c4f.appspot.com",
    messagingSenderId: "884527922372",
    appId: "1:884527922372:web:3e4f0e4fa17b22ddb9dd91",
    measurementId: "G-YDCX97V0YP"
}
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

