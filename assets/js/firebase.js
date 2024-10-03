// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
// Autenticación
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdD3Glr5jEhMaE5bwf4DkjA49LnizOL4I",
  authDomain: "diario-digital-b5eaa.firebaseapp.com",
  projectId: "diario-digital-b5eaa",
  storageBucket: "diario-digital-b5eaa.appspot.com",
  messagingSenderId: "175265304764",
  appId: "1:175265304764:web:bd129614364c93ef4680b9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
