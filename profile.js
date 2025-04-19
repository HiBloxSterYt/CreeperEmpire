import { auth } from './firebase-config.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const nameDisplay = document.getElementById('profile-name');
const logoutBtn = document.getElementById('logout-btn');

onAuthStateChanged(auth, user => {
  if (user) {
    nameDisplay.textContent = `Hello, ${user.displayName || 'User'}!`;
  } else {
    nameDisplay.textContent = 'You are not logged in.';
  }
});

logoutBtn.addEventListener('click', () => {
  signOut(auth).then(() => {
    alert("Signed out");
    window.location.href = "index.html";
  });
});
