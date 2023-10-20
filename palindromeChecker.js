let name = "noon";
let len = name.length;

// ! using for loop
let na = [];
let revna = [];

for (let i = 0; i < len; i++) {
  // console.log(name[i])
  na.push(name[i]);
}

for (let i = len - 1; i >= 0; i--) {
  // console.log(name[i])
  revna.push(name[i]);
}
// ! we can also reverse the string using reverse method
// revna.push(name.split('').reverse().join(''))

if (na.join("") === revna.join("")) {
  console.log("all correct so palindrome");
} else {
  console.log("not palindrome");
}

// ! using for loop more optimised
let isPalindrome = true;

for (let i = 0; i < len / 2; i++) {
  if (name[i] !== name[len - i - 1]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log("your provided text is Palindrome");
} else {
  console.log("Not a palindrome");
}

// ! using if else
let reversedName = name.split("").reverse().join("");
if (name === reversedName) {
  console.log("your provided text is Palindrome");
} else {
  console.log("Not a palindrome");
}

// !another way
function palindrome() {
  const word = "kaushal";
  let len = word.length;

  let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
  let end = word.substring(len - Math.floor(len / 2)).toLowerCase();

  // let flip = end.split("").reverse().join("");

  let flip = [...end].reverse().join("");
  if (start == flip) {
    console.log("palindrome");
  } else {
    console.log("NOT a palindrome");
  }
  // alert(flip);
}
palindrome();
