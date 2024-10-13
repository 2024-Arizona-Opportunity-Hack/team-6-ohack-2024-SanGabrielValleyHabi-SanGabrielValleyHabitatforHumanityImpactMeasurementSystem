// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Only import Firestore if you plan to use it

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtmt54M6slLu1Yo4hbNnwfzHp8D-gbyCQ",
    authDomain: "ohackteam6.firebaseapp.com",
    projectId: "ohackteam6",
    storageBucket: "ohackteam6.appspot.com",
    messagingSenderId: "456779040203",
    appId: "1:456779040203:web:b2a397696f30aeb87c624e",
    measurementId: "G-FLBESBF8HP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Set up Express server
import express from "express";
const appServer = express();
const PORT = process.env.PORT || 3000;

appServer.use(express.json());

appServer.get('/', (req, res) => {
    res.send('Hello, Firebase!');
});

// Start the server
appServer.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
