function identification(string) {
  let regexFetchNumbers = /[\+\-\*\/]/g;
  let regexFetchSymbols = /[0-9]/g;
  let objectComputation = {
    numbers : string.split(regexFetchNumbers),
    operations : string.split(regexFetchSymbols),
    }
  return objectComputation;
}

console.log(identification("5017*1+2-4/2"));
