//simple for loop

let obj = {
  kau: 90,
  abhi: 34,
  kaas: 93,
  ksas: 45,
};

for (let i = 0; i < Object.keys(obj).length; i++) {
  console.log(
    `marks of ${Object.keys(obj)[i]} are ${obj[Object.keys(obj)[i]]}`
  );
}

// for in loop
for (let key in obj) {
  console.log(key);
  console.log(obj[key]);
}

// while loop
let cn = 50;
let i;
while (i != cn) {
  i = prompt("enter the correct number");
  console.log("please enter the correct number");
}
console.log("great you won this match");

// function
const mean = (a, b, c) => {
  return (a + b + c) / 3;
};

mean(1, 4, 6);
