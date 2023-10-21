let vowels = ["a", "e", "i", "o", "u"];
let count = 0;

let vowelsCounter1 = () => {
  inputWords = document.getElementById("vowelsCounter").value;
  let conlow = inputWords.toLowerCase();
  for (let i = 0; i < inputWords.length; i++) {
    if (vowels.includes(conlow[i])) {
      console.log(inputWords[i]);
      count++;
    }
  }
  document.getElementById("vowelsCounterresult1").innerText = count;
  //   console.log(count);
};

// let conv = () => {
//   let vowelsInInput = [];
//   // Convert the input string to lowercase for case-insensitive comparison
//   let lowercaseInput = input.toLowerCase();
//   // Loop through each character in the input string
//   for (let char of lowercaseInput) {
//     // Check if the character is a vowel
//     if (vowels.includes(char)) {
//       vowelsInInput.push(char);
//     }
//   }
//   console.log(vowelsInInput);
// };

// conv();

// // Regular Expression:
// {
//   let input = "kaushal";
//   let vowels = input.match(/[aeiou]/gi);
//   console.log(vowels);
// }

// // Filter and includes:
// {
//   let input = "kaushal";
//   let vowels = Array.from(input).filter((char) =>
//     ["a", "e", "i", "o", "u"].includes(char.toLowerCase())
//   );
//   console.log(vowels);
// }

// // Reduce:
// {
//   let input = "kaushal";
//   let vowels = Array.from(input).reduce((acc, char) => {
//     if (["a", "e", "i", "o", "u"].includes(char.toLowerCase())) {
//       acc.push(char);
//     }
//     return acc;
//   }, []);
//   console.log(vowels);
// }

// function countVowel() {
//   let word = "kaushal";
//   let vowelCount = 0;
//   let wordVal = word.toLowerCase();

//   for (let i = 0; i < wordVal.length; i++) {
//     let letter = wordVal[i];
//     if (letter.match(/([a,e,i,o,u])/)) {
//       vowelCount++;
//     }
//   }
//   console.log(vowelCount);
//   // result.innerHTML = `${word.value.toUpperCase()} has ${vowelCount} vowels`;
// }

// countVowel();
