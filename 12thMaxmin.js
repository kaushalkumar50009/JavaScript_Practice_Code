console.log('finding max and min value using user input and math.max')

// let value = [10,34,53,532,462,23,63,56666]

// maxno = Math.max(...value)

// arr.reduce(function (accumulatedValue, currentValue) {
//     // reducer function content
//   });
// maxno = value.reduce((a, b) => Math.max(a, b), -Infinity);




function check (a,b,c){
    if(a>=b && a>=c){
        return a
    }
    else if(b>=a && b>=c){
        return b
    }
    else{
        return r
    }
}

console.log(check(34,3342,245))

let a = prompt("enter value")
let b = prompt("enter value")
let c = prompt("enter value")
let d = prompt("enter value")
let e = prompt("enter value")
let f = prompt("enter value")
let fmax = Math.max(a,b,c,d,e,f)
console.log(`${a} ${b} ${c} ${d} ${e} ${f} your max number is ${fmax}`)
