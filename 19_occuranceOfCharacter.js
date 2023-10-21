// check nummber of occurance of a character in strings

function occurancess() {
  let characterInputs = document.getElementById("character_inputs").value;
  let letterInputs = document.getElementById("letter_inputs").value;
  let store = [];

  let a = characterInputs.split("");
  console.log(a);

  for (let i = 0; i < a.length; i++) {
    if (a[i].includes(letterInputs)) {
      store.push(a[i]);
    }
  }
  document.getElementById("occurrence_result").innerText = store.length;
}

//! more examples
// function occurrences() {
//   let char = "u";
//   let store = [];

//   let a = strings.split("");
//   console.log(a);

//   for (let i = 0; i < a.length; i++) {
//     if (a[i] === char) {
//       store.push(a[i]);
//     }
//   }

//   console.log(store.length);
// }

// occurrences();

// function occurance() {
//   let char = "s";
//   let store = 0;

//   let a = strings.split("");
//   console.log(a);

//   for (let i = 0; i < a.length; i++) {
//     if (a[i].includes(char)) {
//       store++;
//     }
//   }
//   console.log(store);
//   // console.log(store.length)
// }

// occurance();
