let input = prompt('enter the nuber to find factorial')

function factorial() {
    let initialFact = 1

    if (input === 0) {
        console.log("number should be grater than 0")
    } else {
        for (let i = initialFact; i <= input; i++) {
            initialFact *= i
        }

    }
    console.log(initialFact)
}

// factorial()

// function factorial() {
//     let f = input.reduce((initial, final) => {
//         for (let i = initial; i < input; i++) {
//             final *= i
//         }
//     }, 1)
//     console.log(f)
// }

// factorial()


function factorials() {
    let input = [1, 2, 3, 4, 5, 6]; // Replace with your desired input array
    let f = input.reduce((final, current) => {
        for (let i = current; i <= current; i++) {
            final *= i;
        }
        return final;
    }, 1);
    console.log(f);
}

// factorials();


function fact() {
    let input = [1, 2, 3, 4, 5, 6, 7]; // Replace with your desired input array

    input.forEach((number) => {
        let factorial = 1;
        for (let i = 1; i <= number; i++) {
            factorial *= i;
        }
        console.log(`Factorial of ${number}: ${factorial}`);
    });
}

// fact();

// factorial using recursion 

let num = prompt("enter the number")
let fact = 1
function factr(n) {
    if (n > num) {
        return

    }
    fact = fact * n
    fact++
    console.log(fact)
    factr(n)

}

factr(1)