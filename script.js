/*
  function 1
  input: button click (event)
  output: screen innerHTML
*/
function input(number) {
  let screenElement = document.querySelector(".screen");
  screenElement.innerHTML += number.getAttribute("number");
}

const digitButtons = document.querySelectorAll(".clickable");
digitButtons.forEach(digitButton => {
  digitButton.addEventListener('click', () => {
    // Passes a REFERENCE to the function, not the function,
    // otherwise, it would be invoked at startime.
    input(digitButton);
  });
});

/*
  function 2
  input: button click (event)
  output: object
*/

function operate(string) {
  // Declare regex
  let reNum = /[0-9]/g;
  let reOp = /[\+]/g;
  // Put regex into variables
  let numbers = string.match(reNum) || [];
  let operators = string.match(reOp) || [];
  alert(numbers);
}

let equalButton = document.querySelector(".equal");
equalButton.addEventListener('click', () => {
  let screen = document.querySelector(".screen");
  operate(screen.innerHTML);
});
/*
  function 3
  input: function 2's object
  output: number
*/

/*
  function 4
  input: number
  output: screen HTML
*/
