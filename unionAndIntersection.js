// union of set  (unique item from both set)
// this new set contain all the Element of set A and all the element of set B with no repetition of element and is named as union of set A and B 

let a = [1, 2, 3, 5, 2, 8]
let b = [1, 5, 9, 3, 0, 4, 43, 8]

let c = [...a, ...b]

let unionOfSet = [...new Set(c)]
let unionOfSet1 = [new Set(c)]
let unionOfSet2 = new Set(c)
console.log(unionOfSet)
console.log(unionOfSet1)
console.log(unionOfSet2)

// intersection of set (same items fom both set )

function intersection() {
    let news = a.filter((item, index, value) => {
        return b.include(item)
    })
    console.log(news)
}

// intersection()



const usingReduce = a.reduce((acc, element) => {

    // console.log(acc)
    // console.log(element)
    if (b.includes(element)) {
        acc.push(element)
    }
    return acc
}, [])

// console.log(usingReduce)


