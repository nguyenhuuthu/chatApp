import { loginPage } from "../pages/loginPage/index";
import { registerPage } from "../pages/registerPage/index";
import { resetPage } from "../pages/resetPage/index";
import { chatPage } from "../pages/chatPage/index";
import { validateLoginInfo, validateRegisterInfo } from "../controller/index";
import { signin } from "../model";
export let setActiveScreen = (screenName) => {
  let app = document.getElementById("app");
  switch (screenName) {
    case "loginPage":
      if (app) {
        app.innerHTML = loginPage;
      }
      const loginForm = document.getElementById("form");
      if (loginForm) {
        // console.log(loginForm);
        loginForm.addEventListener("submit", (event) => {
          event.preventDefault();

          const email = loginForm.email.value;
          const password = loginForm.password.value;
          validateLoginInfo(email, password);
          signin(email, password);
        });
      }

      break;
    case "registerPage":
      if (app) {
        app.innerHTML = registerPage;
      }
      const registerForm = document.getElementById("form-1");
      if (registerForm) {
        registerForm.addEventListener("submit", (event) => {
          event.preventDefault();

          const firstName = registerForm.firstName.value;
          const lastName = registerForm.lastName.value;
          const email = registerForm.email.value;
          const password = registerForm.passWord.value;
          const confirmPassword = registerForm.confirmPassword.value;
          validateRegisterInfo(
            firstName,
            lastName,
            email,
            password,
            confirmPassword
          );
        });
      }
      let singin = document.getElementById("titi1");
      singin.onclick = () => {
        setActiveScreen("loginPage");
      };
      break;
    case "resetPage":
      if (app) {
        app.innerHTML = resetPage;
      }
      break;
    case "chatPage":
      if (app) {
        app.innerHTML = chatPage;
      }
      break;
    default:
      break;
  }
};
export let renderErrorMessage = (id, text) => {
  const errorMessage = document.getElementById(id);
  if (errorMessage) {
    errorMessage.innerText = text;
  }
};
