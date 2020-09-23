import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDOJTGQuJT8xajsASNFI3gqLZqZ0mxog0A",
    authDomain: "jipsa-f922c.firebaseapp.com",
    databaseURL: "https://jipsa-f922c.firebaseio.com",
    projectId: "jipsa-f922c",
    storageBucket: "jipsa-f922c.appspot.com",
    messagingSenderId: "356463774004",
    //appId: "1:356463774004:android:9331967b00e7263e89bd61"
    //measurementId: "G-measurement-id"
};

const Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;