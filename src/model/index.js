import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { renderErrorMessage } from "../view";
export let createNewUser = (firstName, lastName, email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // hiển thị đki thành công
      renderErrorMessage("server-error-message", "success");
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
      console.log(errorCode);
      renderErrorMessage("server-error-message", errorMessage);
    });
};
export let signin = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};
