 import firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth'
 
 var config = {
  apiKey: "AIzaSyD4mGSYqY03bdMz1H7ndiDrJ09uNkNUoJY",
  authDomain: "lisboa-fb.firebaseapp.com",
  databaseURL: "https://lisboa-fb.firebaseio.com",
  projectId: "lisboa-fb",
  storageBucket: "",
  messagingSenderId: "782945401787",
  appId: "1:782945401787:web:c11112a09c7396d4"
};

firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase;