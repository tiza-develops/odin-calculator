/*
 here what the code will do:
 1.- Parse a string given by the calculator once the = button is pressed.
 2.- Break down the string into number, operand number.
 3.- Identify the operand and assign it to a mathematical operation.
 4. Perform the operation between the two numbers.
 5. Print out the result.
 */
let buttons = document.querySelectorAll("button");

function putNumber() {
  let results = document.querySelector(".screen");
  results.innerHTML ="1";
}

buttons.forEach( button => {
    button.addEventListener('click',putNumber);
  }
);
