import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDsYQWHy5Eg35Vvi4VUjGgW99SKZr0oNiA",
    authDomain: "firsttest-b7475.firebaseapp.com",
    databaseURL: "https://firsttest-b7475-default-rtdb.firebaseio.com",
    projectId: "firsttest-b7475",
    storageBucket: "firsttest-b7475.appspot.com",
    messagingSenderId: "622358215740",
    appId: "1:622358215740:web:b45d080084ad6f55e25739",
    measurementId: "G-9V2MHFH268"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.database().ref();
