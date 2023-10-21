console.log("print prime number or not");

function primeNo() {
  let value = document.getElementById("prime").value;
  if (value == 1) {
    primeresult = `${value} is not prime or nor composite number`;
  } else if (value < 1) {
    primeresult = ` ${value} is not prime number`;
  } else {
    for (let i = 2; i < value; i++) {
      if (value % i == 0) {
        primeresult = ` ${value} is not prime number`;
        break;
      } else {
        primeresult = `${value} is prime number`;
      }
    }

    document.getElementById("primeresult").innerText = `${primeresult}`;
  }
  document.getElementById("primeresult").innerText = `${primeresult}`;
}

// ! more examples
// function isPrime(n) {
//   for (var i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(24));

// function dis() {
//   let a = [1, 334, 54, 542, 2, 11, 7, 432, 6, 32, 23];
//   let val = [];

//   for (let i = 0; i < a.length; i++) {
//     if (isPrime(a[i])) {
//       val.push(a[i]);
//     }
//   }

//   console.log(val);
// }

// function isPrime(num) {
//   if (num < 2) {
//     return false;
//   }

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// dis();
