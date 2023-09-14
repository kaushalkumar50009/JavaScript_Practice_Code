console.log("swap two number using temporary variable")


let a = prompt('enter first value') 
let b = prompt('enter second value')
console.log(`the value of a is ${a} and the value of b is ${b}`)
let temp;
//a = 3 b = 5
temp = a; // temp = 3
a = b; // a = 5
b = temp // b = 3

console.log(`the value of a is ${a} and the value of b is ${b}`)


console.log("swap two number without using temporary variable")
{
    let a = prompt('enter first value') 
    let b = prompt('enter second value')
    console.log(`the value of a is ${a} and the value of b is ${b}`)
    //a = 5 b = 10
    a = parseInt(a) + parseInt(b) //a = 5 + 10 = 15
    b = parseInt(a) - parseInt(b) //b = 15 - 10 = 5
    a = parseInt(a) - parseInt(b) //a = 15 - 5 = 10
    console.log(`the value of a is ${a} and the value of b is ${b}`)

}