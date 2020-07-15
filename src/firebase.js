import * as firebase from 'firebase';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDRISdOoypSno4RViHOms8-QcBQ9yKrRcM",
  authDomain: "goodfoodmood-b0f8c.firebaseapp.com",
  databaseURL: "https://goodfoodmood-b0f8c.firebaseio.com",
  projectId: "goodfoodmood-b0f8c",
  storageBucket: "goodfoodmood-b0f8c.appspot.com",
  messagingSenderId: "544246566728",
  appId: "1:544246566728:web:cb54bf6bc8bfc27c4f6d7d"
};

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

export default firebase
