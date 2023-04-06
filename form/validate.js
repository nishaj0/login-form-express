const form = document.querySelector("form");
const username = document.querySelector("input[name=username]");
const email = document.querySelector("input[name=email]");
const password = document.querySelector("input[name=password]");

form.addEventListener("submit", checkValid);

console.log(email.value);

function checkValid() {
   if (username.value == "" || email.value == "" || password.value == "") {
      event.preventDefault();
      alert("fill all input");
      return false;
   }
}
