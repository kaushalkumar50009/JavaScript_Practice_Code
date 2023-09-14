let empArr = [
    { name: 'k', age: 23 },
    { name: 'ka', age: 43 },
    { name: 'ku', age: 64 },
    { name: 'ks', age: 32 },
    { name: 'kh', age: 24 },
    { name: 'ka', age: 75 },
    { name: 'kl', age: 23 },
    { name: 'ku', age: 22 },
    { name: 'km', age: 17 }
]

// filter return all the value which match the condition 
// use to find every unique item which find the condition 

function filters() {
    let filterss = empArr.filter((item) => {
        if (item.age > 40) {
            return item
        }

    })
    console.log(filterss)
}

// filters()

//but find return only first value which match the condition 
// use to find single unique item 

function findss() {
    let findsss = empArr.find((item) => {
        if (item.age > 40) {
            return item
        }

    })
    console.log(findsss)
}
// findss()