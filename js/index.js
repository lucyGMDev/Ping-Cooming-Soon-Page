"use strict";

const createErrorMessage = (blockInput, message) => {
  const error_message = document.createElement("span");
  error_message.className += "error-message";
  error_message.innerHTML = message;

  blockInput.appendChild(error_message);
};

const deleteErrorMessages = () => {
  const error_messages = document.querySelectorAll(".error-message");
  error_messages.forEach((message) => {
    const parentNode = message.parentNode;
    parentNode.removeChild(message);
  });
};

const emailForm = document.querySelector("#email-form");
emailForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  deleteErrorMessages();
  const emailInput = document.querySelector("#email-input");
  const email = emailInput.value;
  if (email === "") {
    const emailBlock = document.querySelector("#email-block");
    createErrorMessage(emailBlock, "Email can not be empty");
    emailInput.className += " invalid-input";
    return;
  }
  const emailRegex = /^([0-9a-zA-Z-_\.])+@([a-z])+\.([a-z])+$/;
  if (!emailRegex.test(email)) {
    const emailBlock = document.querySelector("#email-block");
    createErrorMessage(emailBlock, "Please provide a valid email address");
    emailInput.className += " invalid-input";
    return;
  }
  console.log("email valido");
});
