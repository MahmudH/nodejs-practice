function greetMaker(name) {
  function greet() {
    console.log('Hello ' + name + '!');
  }
  return greet;
}

var greetMahmud = greetMaker('Mahmud');
greetMahmud();

function createAdder(baseNumber) {
  function toAdd(numberToAdd){
    return result = baseNumber + numberToAdd;
  }
  return toAdd;
}

var addTen = createAdder(10);
console.log(addTen(2));
var addTen = createAdder(20);
console.log(addTen(5));
