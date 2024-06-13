document.getElementById("hello").textContent="this is my day 1 js file";

let a = prompt("what is your name");
console.log(typeof a);
let b = Number(prompt("enter first number"));
console.log(typeof b);
let c = Number(prompt("enter second number"));
console.log(typeof c);
let d = b+c;

document.getElementById("name").textContent= `my name is ${a}`;
document.getElementById("address").textContent= `the number is ${b} and ${c} sum is ${d}`;
