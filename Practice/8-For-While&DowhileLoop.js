console.log("For, While & Do while Loops");

// types of lopps

// for
// for…in
// forEach
// while
// do…while

// The for Loop:-

// for(initialization; condition; increment) {
//     // Code to be executed
//  }
for (var i = 1; i <= 5; i++) {
  console.log(i);
}

// The for… in Loop:-

// for(variable in object) {
//     // Code to be executed
//     }

// An object with some properties
var person = { name: "Harry", language: "JavaScript", age: 20 };
// Loop through all the properties in the object
for (var i in person) {
  console.log(i + " = " + person[i]);
}

// The forEach Loop:-

const alpha = ["a", "b", "c"];
for (let i = 0; i < alpha.length; i++) {
  console.log(alpha[i]);
}

// while loop:-

// while (expression) {
//   // body of loop
// }
{
  let i = 1,
    n = 100;
  while (i <= n) {
    console.log(i);
    i += 1;
  }
}

// do...while loop:-

// do {
//     // body of loop
// } while(condition)

{
  let i = 1;
  let n = 100;
  do {
    console.log(i);
    i++;
  } while (i <= n);
}

// Breaking a Loop:-

for (let i = 0; i < 100; i++) {
  console.log(i);
  if (i == 90) {
    break;
  }
}

// Skipping an Iteration:-

{
  let i = 10;
  for (let x = 1; x <= i; x++) {
    if (x == 5) {
      continue;
    }
  }
}

// General Loops: for, while, do-while
// let a =34;
// a +=1;
// a++;
// console.log(a);
// for(let i=0; i<100;i++){
//     console.log(i);
// }

// let j = 110;
// while (j < 10) {
//   console.log(j + 1);
//   j += 1;
// }

// let k = 0;
// do {
//     if(k===5){
//         k +=1;
//         continue;
//     }
//   console.log(k + 1);
//   k +=1;
// } while (k < 10);

let arr = [2, 5, 6, 4, 2, 3];

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element)
// }

arr.forEach(function (element, index, array) {
  console.log(element, index, array);
});

// let obj = {
//     name: "Rohan Das",
//     age: 78,
//     type: "Dangerous Programmer",
//     os: "Ubuntu"
// }
// for(let key in obj){
//     console.log(`The ${key} of object is ${obj[key]}`)
// }

console.log("done");

// sum of first n natural Number

let sum = 0;
let n = prompt("enter the value");
n = Number.parseInt(n);
for (let i = 0; i < n; i++) {
  sum += i + 1;
}
console.log(sum);
