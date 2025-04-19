import { auth } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

onAuthStateChanged(auth, user => {
  const userNameEl = document.getElementById('user-name');
  if (user) {
    userNameEl.textContent = `Welcome, ${user.displayName || 'User'}`;
  }
});
