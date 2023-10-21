console.log("check number is positive, negative or 0");

// function check() {
//   let value = document.getElementById("data").value;
//   let result = Math.sign(value);
//   document.getElementById("result").innerText = `this number is ${result} `;
// }

function check() {
  let value = document.getElementById("PosOrNeg").value;

  if (value > 0) {
    result = "positive number";
  } else if (value == 0) {
    result = "zero value";
  } else if (value <= -1) {
    result = `negative value
          ( ${value} ) `;
  } else {
    result = "this value is not a number";
  }

  document.getElementById(
    "PosorNegResult"
  ).innerText = `this number is ${result} `;
}
