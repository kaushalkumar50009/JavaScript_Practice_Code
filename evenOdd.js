let evOd = [1, 2, 3, 6, 34, 7, 74, 78, 35, 9663, 56, 3, 8]


function evenOdd() {
    let even = []
    let odd = []
    let odds = []

    for (let i = 0; i < evOd.length; i++) {
        if (evOd[i] % 2 === 0) {
            even.push(evOd[i])
        } else {
            odd.push(evOd[i])
        }
    }
    console.log(even)
    console.log(odd)

    for (let i = 0; i < evOd.length; i++) {
        if (evOd[i] % 2 !== 0) {
            odds.push(evOd[i])
        }
    }

    console.log(odds)
}

// evenOdd()

function find_even_numbers(evOd) {
    let even_numbers = []
    for (let number in evOd)
        if (number % 2 == 0) {
            even_numbers.push(number)

        }
    console.log(even_numbers)
}

// find_even_numbers(evOd)