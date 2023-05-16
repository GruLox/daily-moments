import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyD2dO80l1XeImuVlDiiQex7OnZHiSQU1yU",
    authDomain: "daily-moments-10a14.firebaseapp.com",
    projectId: "daily-moments-10a14",
    storageBucket: "daily-moments-10a14.appspot.com",
    messagingSenderId: "878012023245",
    appId: "1:878012023245:web:915f5221ef5a28d8cb0484"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();

export const firestore = app.firestore();
