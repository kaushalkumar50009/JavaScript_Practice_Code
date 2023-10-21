let string = document.getElementById("input_word").value;
let button = document.getElementById("uppercase");

function convertusingLoop() {
  let string = document.getElementById("input_word").value;
  for (i = 0; i < string.length; i++) {
    // console.log(string[i])
    // console.log(string[0])
    if (string[0] !== string[0].toUpperCase()) {
      let upperCase = string[0].toUpperCase();
      let fullName = upperCase + string.slice(1);
      document.getElementById("converted_result").innerText = `${fullName}`;
    } else {
      document.getElementById(
        "converted_result"
      ).innerText = `first letter is already in caoital letter`;
    }
  }
}

button.addEventListener("click", () => {
  convertusingLoop();
});

//! more examples

// function upper() {
//     let charzero = string.charAt(0)

//     if (string.charAt(0) !== charzero.toUpperCase()) {
//         let strings = charzero.toUpperCase();
//         let upperca = strings + string.slice(1)
//         console.log(upperca)

//     } else {
//         console.log('This is already in uppercase.');
//     }

// }

// upper()

// function upper() {
//   let charzero = string.charAt(0);

//   if (string.charAt(0) !== charzero.toUpperCase()) {
//     let upperca = charzero.toUpperCase() + string.slice(1);
//     console.log(upperca);
//   } else {
//     console.log("This is already in uppercase.");
//   }
// }

// upper();
