import {handleAddClass} from './utilities.js'

const button = document.getElementById("button");
button.addEventListener("click", buttonClick);

const firstName = document.getElementById("firstName");
firstName.addEventListener("blur", submitEvent);

const lastName = document.getElementById("lastName");
lastName.addEventListener("blur", submitEvent);

const email = document.getElementById("email");
email.addEventListener("blur", submitEvent);

const password = document.getElementById("password");
password.addEventListener("blur", submitEvent);

function buttonClick(event) {
  event.preventDefault();
  handleAddClass('signupform','touched');
}

function submitEvent(event) {
  event.preventDefault();
  handleAddClass(`${event.target.id}`,'touched')
}
