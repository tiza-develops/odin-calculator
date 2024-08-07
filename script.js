let buttons = document.querySelectorAll("button");

buttons.forEach( button => {
    button.addEventListener('click',
    function(event) {
      let results = document.querySelector(".screen")
      results.innerHTML += event.target.innerHTML;
    }
    );
  }
);


