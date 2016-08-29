// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];
// Hi Andrew, you are 25

function greet (name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}
greet(...person);
greet(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Andrew', ...names];
// Hi Andrew

final.forEach(function (name) {
  console.log('Hi ' + name);
});


// localStorage

// localStorage.setItem("1", "Mahmud")
// undefined
// localStorage.getItem(1)
// "Mahmud"
// localStorage.getItem("1")
// "Mahmud"
// localStorage.removeItem(1)
// undefined
// localStorage.getItem("1")
// null
