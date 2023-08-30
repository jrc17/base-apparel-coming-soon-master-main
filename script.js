let email = document.querySelector("#email");
let error = document.querySelector(".error-msg");
let errorIcon = document.querySelector(".error-icon");
let mailRegex =
  /^[a-zA-Z0-9]([-_]?[a-zA-Z0-9]+)*(\.[a-zA-Z0-9]([-_]?[a-zA-Z0-9]+)*)*@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;

function checker() {
  if (email.value.match(mailRegex) || email.value === "") {
    error.style.display = "none";
    errorIcon.style.display = "none";
  } else {
    error.style.display = "block";
    errorIcon.style.display = "block";
  }
}
