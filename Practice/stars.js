// console.log('hello stars')

let doc = "hello world";

{
    let n = 5
    for (let row = 1; row <= n; row++) {  //this line of code change the row or using for row
        for (let col = 1; col <= n; col++) { // this line of code change the column or using for column
            document.write('* ') //this line of code using for printing pattern

        }

        document.write('<br/>') //this line of code is used for printing a code in next line

    }
}




{
    let n = 5
    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= row; col++) {
            document.write('* ')

        }

        document.write('<br/>')

    }
}


{
    let n = 5
    for (let row = 1; row <= n; row++) {
        for (let col = row; col <= n; col++) {
            document.write('* ')

        }

        document.write('<br/> ')

    }
}

{
    let n = 5
    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= row - 1; col++) {
            document.write(' ')
        }
        for (let col1 = 1; col1 <= row; col1++) {
            document.write('* ')

        }
        document.write('<br/> ')
    }
}



// {
//     let n = 5;
//     let string = "";

//     for (let i = 1; i <= n; i++) {
//         for (let j = 0; j < n - 1; j++) {
//             string += " ";

//         }
//         for (let k = 0; k < i; k++) {
//             string += "*";
//         }
//         string += "\n";
//     }
//     document.write(string)
// }


let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
    // printing spaces
    for (let j = 0; j < n - i; j++) {
        string += " ";
    }
    // printing star
    for (let k = 0; k < i; k++) {
        string += "*";
    }
    string += "\n";
    string += "<br/> ";
}

console.log(string);
document.write(string)

document.getElementById("demo").innerHTML = doc;

