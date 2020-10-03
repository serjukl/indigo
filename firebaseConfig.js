import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAPjR2JSM1eH_eOB_KrHPpWqPCr05bwHxI",
    authDomain: "indigo-99639.firebaseapp.com",
    databaseURL: "https://indigo-99639.firebaseio.com",
    projectId: "indigo-99639",
    storageBucket: "indigo-99639.appspot.com",
    messagingSenderId: "530036193840",
    appId: "1:530036193840:web:10e8cbfc01358470cf8bf5",
    measurementId: "G-Y0418XD1WP"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Get a reference to the database service
let database = firebase.database();

export default database