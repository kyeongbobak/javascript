const loginFormPassword = document.querySelector(".login-form-password");
const validPass = document.querySelector(".valid-pass");
const loginFormPoint = document.querySelector(".login-form-point");

function formValid() {
  if (loginFormPassword.value.length >= 1) {
    validPass.innerText = "Minimum 8 characters";
  } else {
    validPass.innerText = "";
  }
}

loginFormPassword.addEventListener("input", formValid);

function show() {
  if (loginFormPassword.type !== "password") {
    loginFormPassword.type = "password";
    loginFormPoint.src = "https://cdn2.iconfinder.com/data/icons/basic-ui-interface-v-2/32/hide-512.png";
  } else {
    loginFormPassword.type = "type";
    loginFormPoint.src = "https://static.thenounproject.com/png/777494-200.png";
  }
}
