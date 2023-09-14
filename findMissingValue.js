let value = [1, 2, 4, 7, 9, 20]

function missingValue() {

    let missArrr = []
    let max = Math.max(...value)
    // console.log(max)
    let min = Math.min(...value)
    // console.log(min)

    for (let i = min; i < max; i++) {

        if (value.indexOf(i) < 0) {
            missArrr.push(i)
            // console.log(i)
        }
    }
    console.log(missArrr)
}

// missingValue()

// using include
function usingInclude() {
    let max = Math.max(...value)
    console.log(max)
    let min = Math.min(...value)
    console.log(min)

    let storeAllValue = []
    let storeMissingValue = []


    for (let i = min; i < max; i++) {

        //store all value
        if (!storeAllValue.includes(i)) {
            storeAllValue.push(i)
        }

        // store only missing value 
        if (!value.includes(i)) {
            storeMissingValue.push(i)
        }

    }

    console.log(storeAllValue)
    console.log(storeMissingValue)
}

// usingInclude()



