//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance
function Person (age, name, hobby); {
  this.name = name;
  this.age = age;
  this.hobby = hobby;
  }
  Person.prototype.religion = "Hindu";


//2. Create an array of numbers from 1 - 10; slice the 5th number in the array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.slice(5));
//3. Delete the last number in the array that you created above.
numbers.pop();

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas:
Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.

function myFunction () {
var str = str.replace("Strawberries", "Bananas")
var str = str.replace("strawberry", "banana")
}


//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.

function myFunction () {
var football = ["Sykkylven IL", "Stranda IL", "Gursken IL", "Hovdebygda IL"];
var cars = ["Ambassador Nova", "Ambassador Grand", "Ambassador Avigo", "Ambassador Encore"];
}



//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.

var kings = [ {

name: "Balthazar",
origin: "Babylon",
},
{
name: "Caspar",
origin "Persia",
},
{
  name: "Melchior",
origin: "Babylon",
}
];
var Babylon = kings.filter(function (kings) {
  return kings.origin === "Babylon";
});
var Persia = kings.filter(function (kings) {
  return kings.origin === "Persia";
});

//7. Create a simple function that logs the date.
function myDate(){
  var d = new Date();
}
console.log(d)
