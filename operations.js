function identification(string) {
  let regexFetchNumbers = /[\+\-\*\/]/g;
  let regexFetchSymbols = /[0-9]/g;
  let objectComputation = {
    operations : string.match(regexFetchNumbers),
    numbers : string.match(regexFetchSymbols),
    }
  return objectComputation;
}

function math(object) {
  let total = eval(object.numbers[0]+object.operations[0]+object.numbers[1])
  return total;
}


console.log(math(identification("1+2")))
