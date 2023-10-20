function squareRoot() {
  let a = document.getElementById("square_root").value;
  let b = Math.sqrt(a).toFixed(3);
  document.getElementById(
    "result"
  ).innerText = `The square root of ${a} is ${b}`;
}

const btn = document.getElementById("print_sq_root");
btn.addEventListener("click", () => {
  squareRoot();
});
