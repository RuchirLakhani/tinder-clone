import firebase from "firebase";
//import * as firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
    apiKey: "AIzaSyAeFiwDGlTU2KAGUJ9zDo5y66B9F3jf86w",
    authDomain: "tinder-clone-eaa50.firebaseapp.com",
    databaseURL: "https://tinder-clone-eaa50.firebaseio.com",
    projectId: "tinder-clone-eaa50",
    storageBucket: "tinder-clone-eaa50.appspot.com",
    messagingSenderId: "960312951062",
    appId: "1:960312951062:web:36ec2018d1a1ae02891037",
    measurementId: "G-KPS0S5Y9H1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;