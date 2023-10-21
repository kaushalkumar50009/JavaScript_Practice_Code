// ! using for loop
function palindromeforloop() {
  let inputValue = document.getElementById("palindromeword").value;
  let length = inputValue.length;
  let na = [];
  let revna = [];

  for (let i = 0; i < length; i++) {
    // console.log(inputValue[i]);
    na.push(inputValue[i]);
  }
  for (let i = length - 1; i >= 0; i--) {
    // console.log(inputValue[i])
    revna.push(inputValue[i]);
  }

  if (na.join("") === revna.join("")) {
    //   console.log("all correct so palindrome");
    document.getElementById(
      "palindromeresult1"
    ).innerText = `all correct so palindrome`;
  } else {
    document.getElementById("palindromeresult1").innerText = `not palindrome`;
    // console.log("not palindrome");
  }
}

// ! using for loop more optimised
function optimisedforloop() {
  let inputValue = document.getElementById("palindromeword").value;
  let length = inputValue.length;
  let isPalindrome = true;
  for (let i = 0; i < length / 2; i++) {
    if (inputValue[i] !== inputValue[length - i - 1]) {
      isPalindrome = false;
      break;
    }
  }

  if (isPalindrome) {
    document.getElementById(
      "palindromeresult2"
    ).innerText = `all correct so palindrome`;
  } else {
    document.getElementById("palindromeresult2").innerText = `not palindrome`;
  }
}

// ! using if else

function usingifelse() {
  let inputValue = document.getElementById("palindromeword").value;
  let reversedName = inputValue.split("").reverse().join("");
  if (inputValue === reversedName) {
    // console.log("your provided text is Palindrome");
    document.getElementById(
      "palindromeresult3"
    ).innerText = `all correct so palindrome`;
  } else {
    // console.log("Not a palindrome");
    document.getElementById("palindromeresult3").innerText = `not palindrome`;
  }
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
