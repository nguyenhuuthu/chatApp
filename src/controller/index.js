import { renderErrorMessage } from "../view/index";
import { createNewUser, loginUser } from "../model/index";
import { validate } from "schema-utils";
export let validateLoginInfo = (email, password) => {
  // regex, regular expression
  // email regex

  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email) {
    renderErrorMessage("email-error-message", "Please enter your email");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("email-error-message", "Invalid email");
  } else {
    renderErrorMessage("email-error-message", "");
  }

  if (!password) {
    renderErrorMessage("password-error-message", "Please enter your password");
  } else {
    renderErrorMessage("password-error-message", "");
  }
};

export let validateRegisterInfo = (
  firstName,
  lastName,
  email,
  password,
  confirmPassword
) => {
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!firstName) {
    renderErrorMessage("firstName1", "Please enter your first name");
  } else {
    renderErrorMessage("firstName1", "");
  }
  if (!lastName) {
    renderErrorMessage("lastName1", "Please enter your last name");
  } else {
    renderErrorMessage("lastName1", "");
  }
  if (!email) {
    renderErrorMessage("email-error-message2", "Please enter your email");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("email-error-message2", "Invalid email");
  } else {
    renderErrorMessage("email-error-message2", "");
  }

  if (!password) {
    renderErrorMessage("password-error-message2", "Please enter your password");
  } else {
    renderErrorMessage("password-error-message2", "");
  }

  if (!confirmPassword) {
    renderErrorMessage("confirmPassword1", "Please confluent");
  } else if (!confirmPassword === password) {
    renderErrorMessage("confirmPassword1", "Password not match");
  } else {
    renderErrorMessage("confirmPassword1", "");
  }

  if (
    firstName &&
    lastName &&
    email &&
    password &&
    confirmPassword &&
    confirmPassword === password
  ) {
    createNewUser(firstName, lastName, email, password);
  }
};
