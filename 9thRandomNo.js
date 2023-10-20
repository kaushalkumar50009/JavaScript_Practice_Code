console.log("print random number");

function genrandom() {
  // let x = Math.random()
  // let x = Math.random() * (100 - 1) +1
  let x = Math.random();
  x *= 100;
  x = Math.floor(x);
  document.getElementById(
    "randomresult"
  ).innerText = `${x} this is your random value`;
}
