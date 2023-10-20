console.log("print prime number or not");

function primeNo() {
  let value = document.getElementById("prime").value;
  if (value == 1) {
    result = `This number ${value} is not prime or nor composite number`;
  } else if (value < 1) {
    result = `this number ${value} is not prime number`;
  } else {
    for (let i = 2; i < value; i++) {
      if (value % i == 0) {
        result = `your number ${value} is not prime`;
        break;
      } else {
        result = `your number ${value} is prime`;
      }
    }

    document.getElementById("primeresult").innerText = `${result}`;
  }
  document.getElementById("primeresult").innerText = `${result}`;
}
