let a = prompt("enter first digit")
let b = prompt("enter second digit")
let c = prompt("enter third digit")

let var1 = a % 10
let var2 = b % 10
let var3 = c % 10

if (var1 === var2 && var1 === var3) {
    console.log("numbers having the same last digit");
}