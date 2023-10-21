console.log("finding max and min value using user input and math.max");

// let value = [10,34,53,532,462,23,63,56666]

// maxno = Math.max(...value)

// arr.reduce(function (accumulatedValue, currentValue) {
//     // reducer function content
//   });
// maxno = value.reduce((a, b) => Math.max(a, b), -Infinity);

function check() {
  const input1 = Number(document.getElementById("firstno").value);
  const input2 = Number(document.getElementById("secondno").value);
  const input3 = Number(document.getElementById("thirdno").value);

  let maxresult; // Declare maxresult with let

  if (input1 > input2 && input1 > input3) {
    maxresult = input1;
  } else if (input2 > input1 && input2 > input3) {
    maxresult = input2;
  } else {
    maxresult = input3;
  }

  document.getElementById("max").innerText = `maximum value is ${maxresult}`;
}

// let a = prompt("enter value")
// let b = prompt("enter value")
// let c = prompt("enter value")
// let d = prompt("enter value")
// let e = prompt("enter value")
// let f = prompt("enter value")
// let fmax = Math.max(a,b,c,d,e,f)
// console.log(`${a} ${b} ${c} ${d} ${e} ${f} your max number is ${fmax}`)
