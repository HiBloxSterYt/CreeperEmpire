// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCjzYShI8O3kiMCfQItfZzPECIRKir2Vgo",
  authDomain: "creeperempire-6fff6.firebaseapp.com",
  projectId: "creeperempire-6fff6",
  storageBucket: "creeperempire-6fff6.appspot.com",
  messagingSenderId: "120725025254",
  appId: "1:120725025254:web:64dac90cee89a5b5b22627"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
