import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBCnIJc_4wUaIgORVKdyXAEpLinx7aZdv8",
  authDomain: "e-ride-4cb52.firebaseapp.com",
  projectId: "e-ride-4cb52",
  storageBucket: "e-ride-4cb52.appspot.com",
  messagingSenderId: "979953080553",
  appId: "1:979953080553:web:f13dca955def191e43b878"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
