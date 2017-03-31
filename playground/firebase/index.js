import firebase from 'firebase';
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDM7PWHUP7cgFTgKUrg49BUyZeP_6gkKB4",
    authDomain: "react-todo-app-7261b.firebaseapp.com",
    databaseURL: "https://react-todo-app-7261b.firebaseio.com",
    storageBucket: "react-todo-app-7261b.appspot.com",
    messagingSenderId: "521340759368"
  };
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'ToDo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Asad Marfani',
    age: 22
  }
});

// firebaseRef.child('app').set({
//   name: 'ToDo App with Redux'
// }).then(()=>{
//   console.log('Set Worked!');
// },(e)=>{
//   console.log('Set Not Worked!');
// });


// firebaseRef.update({
//   'app/name': 'ToDo Application',
//   'user/name': 'Marfani 007'
// }).then(()=>{
//   console.log('Update Work!');
// },()=>{
//   console.log('Update Does Not Work!');
// });

// firebaseRef.child('app').update({
//   name: 'ToDo Application'
// });

// firebaseRef.child('user').update({
//   name: 'Anas Marfani'
// });

// firebaseRef.update({
//   isRunning: null
// });

// firebaseRef.child('user/age').remove();

// firebaseRef.once('value').then((snapshot)=>{
//   console.log('Get Value Is : ',snapshot.val());
// },(e)=>{
//   console.log('Error!',e);
// // });
// var logData = (snapshot)=>{
//   console.log('On Function get value : ',snapshot.val());
// };

// firebaseRef.on('value',logData);

// firebaseRef.off();

// firebaseRef.update({
//   isRunning: false
// });

// firebaseRef.child('user').on('value',(snapshot)=>{
//   console.log('User updated value is : ',snapshot.val());
// });

// firebaseRef.child('user').update({
//   name: 'UBIT'
// });

// firebaseRef.child('app').update({
//   name: 'MyToDoApp'
// });

// var todos = [
//   {
//     id: 'wihfwefwhe',
//     text: 'Complete the tutorials!'
//   }
// ];

// var nodesRef = firebaseRef.child('nodes');

// nodesRef.on('child_added',(snapshot)=>{
//   console.log('Child Added In The Node Is : ',snapshot.key,snapshot.val());
// });
// nodesRef.on('child_changed',(snapshot)=>{
//   console.log('Child Changed In The Node Is : ',snapshot.key,snapshot.val());
// });
// nodesRef.on('child_removed',(snapshot)=>{
//   console.log('Child Removed In The Node Is : ',snapshot.key,snapshot.val());
// });

// var nodeOne = nodesRef.push({
//   text: 'Watch Harry Potter Movies!'
// });

// var nodeTwo = nodesRef.push({
//   text: 'Complete Firebase tutorials'
// });

var todoRef = firebaseRef.child('todos');

todoRef.on('child_added',(snapshot)=>{
  console.log('New Added ToDo Item Is: ',snapshot.key, snapshot.val());
});

todoRef.push({
  text: 'Pay Farmhouse Fund to Sameer ! '
});

todoRef.push({
  text: 'Teach Ahmed Chapter 2 of Maths ! '
});