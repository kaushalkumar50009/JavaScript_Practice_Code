console.log("check number is positive, negative or 0");

// function check() {
//   let value = document.getElementById("data").value;
//   let result = Math.sign(value);
//   document.getElementById("result").innerText = `this number is ${result} `;
// }

function PosOrNeg() {
  let value = document.getElementById("PosOrNeg").value;

  if (value > 0) {
    rsult = `( ${value} ) is positive `;
  } else if (value == 0) {
    rsult = `( ${value} ) not negative and not positive `;
  } else if (value <= -1) {
    rsult = `( ${value} ) is negative `;
  } else {
    rsult = `( ${value} ) not a number`;
  }

  document.getElementById("PosorNegResult").innerText = ` ${rsult} number`;
}
