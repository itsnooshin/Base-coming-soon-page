"use strict";

// select elements
const btnRight = document.querySelector(".button-right");
const input = document.querySelector(".input-container");
const errorMsg = document.querySelector(".error");
const validMsg = document.querySelector('.message')
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let createNewText;
btnRight.addEventListener("click", function (e) {

  e.preventDefault();
  const validFn = function () {
    input.classList.toggle("input-valid");
    input.classList.toggle("input-invalid");
   createNewText = document.createElement("p");
    createNewText.innerHTML =
      "Thank you for your subscribing for our newsletter!";
    createNewText.classList.toggle("error-message");
    createNewText.classList.toggle("currect-message");
    input.insertAdjacentElement("afterend", createNewText);
    errorMsg.style.display = "none";
  };

  const inValidFn = function () {
    input.classList.toggle("input-invalid");
    createNewText = document.createElement("p");
    createNewText.innerHTML = "Please provide a valid email";
    createNewText.classList.add("error-message");
    input.insertAdjacentElement("afterend", createNewText);
    errorMsg.style.display = "block";

    
  };

  if (input.value.match(emailPattern)) {
    validFn();
    setTimeout(function () {
      input.value = "";
      input.style.border = "1px solid #ce9898";
      createNewText.textContent = "";
    }, 1200);
  } 

  if (!input.value.match(emailPattern)) {
    inValidFn();
    setTimeout(function(){
      input.value = "";
      input.style.border = "1px solid #ce9898";
      createNewText.textContent = "";
      errorMsg.style.display = "none";
    },1200)
  }

});
