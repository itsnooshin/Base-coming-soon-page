"use strict";

// select elements
const btnRight = document.querySelector(".button-right");
const input = document.querySelector(".input-container");
const errorMsg = document.querySelector(".error");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let isButtonIsClick = false;




btnRight.addEventListener("click", function () {
   if(!isButtonIsClick && input.value.match(emailPattern)){
    isButtonIsClick = true;
    
    
   const newText = document.createElement("p");
    newText.innerHTML = "Thank you for subscribing to our newsletter";
    newText.classList.toggle("currect-message");
    input.insertAdjacentElement("afterend", newText);
    
     
   } 
   
   else if (!isButtonIsClick && !input.value.match(emailPattern)) {
    isButtonIsClick = true;
    input.style.border = "2px solid red";
    const createNewText = document.createElement("p");
    createNewText.innerHTML = "Please provide a valid email";
    createNewText.classList.toggle("error-message");
    input.insertAdjacentElement("afterend", createNewText);
    errorMsg.style.display = "block";
   
   }
   

});



