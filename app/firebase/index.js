import firebase from 'firebase';
// Initialize Firebase

try {
  var config = {
    apiKey: "AIzaSyDM7PWHUP7cgFTgKUrg49BUyZeP_6gkKB4",
    authDomain: "react-todo-app-7261b.firebaseapp.com",
    databaseURL: "https://react-todo-app-7261b.firebaseio.com",
    storageBucket: "react-todo-app-7261b.appspot.com",
    messagingSenderId: "521340759368"
  };
firebase.initializeApp(config);
}
catch(e){
    console.log(e);
}
export var firebaseRef = firebase.database().ref();
export default firebase;