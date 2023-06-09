"use strict";

// select elements
const btnRight = document.querySelector(".button-right");
const input = document.querySelector(".input-container");
const errorMsg = document.querySelector(".error");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const email = 'example@example.com'
btnRight.addEventListener("click", function () {

   if(input.value.match(emailPattern)){
    const newText = document.createElement("p");
    newText.innerHTML = "Thank you for subscribing to our newsletter";
    newText.classList.add("currect-message");
    input.insertAdjacentElement("afterend", newText);
    
  } else if (!input.value.match(emailPattern)){
    console.log('nist');
    input.style.border = "2px solid red";
    const createNewText = document.createElement("p");
    createNewText.innerHTML = "Please provide a valid email";
    createNewText.classList.add("error-message");
    input.insertAdjacentElement("afterend", createNewText);
    errorMsg.style.display = "block";
  }
});
