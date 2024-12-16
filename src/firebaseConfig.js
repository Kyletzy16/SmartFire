// Import Firebase functions from the modular SDK
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyDmLGAtC_C3EAf-6VasG93GSuxpvcutCUY",
    authDomain: "smartfire-8b4db.firebaseapp.com",
    databaseURL: "https://smartfire-8b4db-default-rtdb.firebaseio.com",
    projectId: "smartfire-8b4db",
    storageBucket: "smartfire-8b4db.firebasestorage.app",
    messagingSenderId: "192510659311",
    appId: "1:192510659311:web:6a0e56e5e173476ff4e91a",
    measurementId: "G-CZFD7CT5FB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export the Realtime Database
const database = getDatabase(app);
export default database;
