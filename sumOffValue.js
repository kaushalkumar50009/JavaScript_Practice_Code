let suAr = [12, 10, 18, 60, 75]


//using for loop
function forLoop() {
    let initialvalue = 0
    for (let i = 0; i < suAr.length; i++) {
        initialvalue += suAr[i]
    }
    console.log(initialvalue)
}

// forLoop()

// using reduce 
function usingReduce() {
    let sums = suAr.reduce((currentItems, finalOutput) => {
        return currentItems + finalOutput
    })
    console.log(sums)
}

// usingReduce()

// using forEach 
function usingForEach() {
    let total = 0
    suAr.forEach((totals) => {
        return total += totals
    })

    console.log(total)
}

// usingForEach()