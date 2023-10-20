console.log("check if number is odd or even");

// checking using if else
// function OddEven() {
//   let value = document.getElementById("OddEven").value;

//   if (value % 2 == 0) {
//     result = `your number ${value} is even`;
//   } else {
//     result = `your number ${value} is odd`;
//   }
//   document.getElementById("OddEvenresult").innerText = `${result}`;
// }

// checking using ternary operator
function OddEven() {
  let value = document.getElementById("OddEven").value;
  result =
    value % 2 == 0
      ? `your number ${value} is even`
      : `your number ${value} is odd`;
  document.getElementById("OddEvenresult").innerText = `${result}`;
}

// {
//   function OddEven() {
//     let value = 20;
//     value = parseInt(value);
//     for (var i = 1; i <= 3; i = i + 1) {
//       value = value + 2;
//       document.write(value + "<br>");
//     }
//   }

//   OddEven();
// }

// let value = 11
// for (var i = 1; i <= 3; i = i + 1){
//     if (value % 2 == 0){
//             value = value +2
//             document.write(`${value} <br>`)
//         }
//     else{
//         value = value +2
//             document.write(`${value} <br>`)
//     }

// }

// function OddEven(){

//     let value = document.getElementById("data").value
//     value = parseInt(value);

//     for (var i = 1; i <= 3; i = i + 1){
//         if (value % 2 == 0){
//                 value = value +2
//                 document.getElementById('result').innerText = document.getElementById('result').innerText + `${value} <br>`
//             }

//         else{
//             value = value +2
//             document.getElementById('result').innerText = document.getElementById('result').innerText + `${value } ${" "}`

//         }

//     }

// }

// function OddEven() {
//   let value = document.getElementById("OddEven").value;
//   value = parseInt(value);
//   for (let i = 1; i <= 3; i = i + 1) {
//     if (value <= 0) {
//       document.getElementById(
//         "OddEvenresult"
//       ).innerHTML = `please enter positive no`;
//     } else if (value % 2 == 0) {
//       value = value + 2;
//       document.getElementById("OddEvenresult").innerHTML += `${value} <br>`;
//     } else {
//       value = value + 2;
//       document.getElementById("OddEvenresult").innerHTML += `${value}  <br>`;
//     }
//   }
// }
