import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAPZtCaJ6FBserIvPzcUdFxO-KQtwER5v0",
    authDomain: "skate-date-app.firebaseapp.com",
    databaseURL: "https://skate-date-app.firebaseio.com",
    projectId: "skate-date-app",
    storageBucket: "skate-date-app.appspot.com",
    messagingSenderId: "121814123197",
    appId: "1:121814123197:web:354a1408999b694d68edd4",
    measurementId: "G-93E6CGLLJG"

};

firebase.initializeApp(firebaseConfig)

export default firebase;
