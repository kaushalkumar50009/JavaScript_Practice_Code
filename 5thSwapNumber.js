function swapNumber() {
  let a = document.getElementById("swap_a").value;
  let b = document.getElementById("swap_b").value;
  let temp;
  console.log(
    `the value of a is ${a} and the value of b is ${b} before swapping`
  );
  //a = 3 b = 5
  temp = a; // temp = 3
  a = b; // a = 5
  b = temp; // b = 3
  document.getElementById(
    "swap_result1"
  ).innerText = `the value of a is ${a} and the value of b is ${b} after swapping`;

  console.log("swap two number without using temporary variable");
  let c = document.getElementById("swap_c").value;
  let d = document.getElementById("swap_d").value;

  console.log(`the value of c is ${c} and the value of  is ${d}`);
  //a = 5 b = 10
  c = parseInt(c) + parseInt(d); //a = 5 + 10 = 15
  d = parseInt(c) - parseInt(d); //b = 15 - 10 = 5
  c = parseInt(c) - parseInt(d); //a = 15 - 5 = 10
  console.log(c, d);

  document.getElementById(
    "swap_result2"
  ).innerText = `the value of a is ${c} and the value of b is ${d}`;
}

const swappedNumber = document.getElementById("swap_number");
swappedNumber.addEventListener("click", () => {
  swapNumber();
});
