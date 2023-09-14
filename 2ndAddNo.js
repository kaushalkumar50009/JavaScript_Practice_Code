console.log('add static and dynamic numbers')

// first program to add static numbers

function add(a,b){
    let sum = (a+b)
    return sum
}

console.log(add(50,34))

function sub(a,b){
    let sum = (a-b)
    return sum
}

console.log(sub(50,34))

function mul(a,b){
    let sum = (a*b)
    return sum
}

console.log(mul(50,34))

function div(a,b){
    let sum = (a/b)
    return sum
}

console.log(div(50,34))

let c = prompt("enter first value")
let d = prompt("enter second value")
let e = parseInt(c) + parseInt(d)
console.log(`sum of ${c} and ${d} is ${e}`)