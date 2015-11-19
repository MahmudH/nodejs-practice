var person = {
  name: 'Mahmud',
  age: 25
}

var personJSON = JSON.stringify(person);

//console.log(personJSON);
//console.log(typeof personJSON);

var animal = '{"Duck": "Duffy"}';

var animalObject = JSON.parse(animal);

animalObject.age = 2;

animal = JSON.stringify(animalObject);

console.log(animal);
