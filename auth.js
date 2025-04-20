// auth.js

// Firebase Initialization (Ensure this matches your Firebase setup)
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyCjzYShI8O3kiMCfQItfZzPECIRKir2Vgo",
    authDomain: "creeperempire-6fff6.firebaseapp.com",
    projectId: "creeperempire-6fff6",
    appId: "1:120725025254:web:64dac90cee89a5b5b22627"
  };
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

// Listen for authentication state changes
auth.onAuthStateChanged(user => {
  const displaySpan = document.getElementById("usernameDisplay");

  if (user && user.displayName) {
    displaySpan.textContent = `Welcome, ${user.displayName}`; // Show the display name
  } else {
    displaySpan.textContent = 'Welcome, Guest'; // Show "Guest" if not logged in
  }
});
