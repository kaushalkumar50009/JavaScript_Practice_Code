// use logical operator to find the weather the age of a person lies between 10 and 20

let age = prompt("enter your age");
age = Number.parseInt(age);

if (age > 10 && age < 20) {
  console.log("Great your age lies between 10 and 20");
} else {
  console.log("sorry your age does not met our condition");
}

let sage = prompt("enter your age");
switch (sage) {
  case "10":
    console.log("your age is less than 50");
    break;
  case "11":
    console.log("your age is greater than 50");
    break;
  case "15":
    console.log("your age met our condition");
    break;
  default:
    console.log("good try keep it up");
}

let num = prompt("enter the number");
if (num % 2 == 0 && num % 3 == 0) {
  console.log("this number is divisible by 2 and 3");
} else {
  console.log("this number is not divisible 2 and 3");
}

let num1 = prompt("enter the number");
if (num1 % 2 == 0 || num1 % 3 == 0) {
  console.log("this number is divisible by 2 and 3");
} else {
  console.log("this number is not divisible 2 and 3");
}

let age1 = 35;
let a = age1 > 20 ? "great you can apply" : "sorry but you cant apply";
console.log(a);
