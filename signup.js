import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

document.getElementById('signup-form').addEventListener('submit', e => {
  e.preventDefault();
  const email = email.value;
  const password = password.value;
  const displayName = displayName.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(userCred => {
      return updateProfile(userCred.user, { displayName });
    })
    .then(() => {
      alert("Account created!");
      window.location.href = "index.html";
    })
    .catch(error => {
      alert(error.message);
    });
});
