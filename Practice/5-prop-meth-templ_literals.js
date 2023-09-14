console.log('hello {Strings: Properties, Methods & Template Literals}')

// The declaration was marked as deprecated here
var myString = 'JavaScript!!!';
console.log(myString.charAt(7));
//output: i

// concat(p1, p2): Combines one or more strings and returns the concatenated string. Remember that the original string is not modified.
var str1="JavaScript"
var str2=str1.concat(" is","awesome")
console.log(str2);
//Output: JavaScript is awesome

// indexOf(substr, [start_from]): This method Searches and returns the index number of the searched character within the string. If not found, it will return -1 . “Start_from” is an optional argument specifying the position within string to begin the search. Default is 0.
//indexOf(char/substring)
var str1="Hi, my name is Sam!";
var str2 = str1.indexOf("locate");
//Output: -1

// lastIndexOf(substr, [start_from]): This method searches and  returns the index number of the searched character within the string. This method will return the index of the last occurrence of a specified text in a string.If the character or string is not found, -1 is returned. "Start_from" is an optional argument specifying the position within string to begin the search. Default is string.length-1
var myString = 'javascript Node.js';
console.log(myString.lastIndexOf('N'));
//output: 11

// slice(start, [end]);
// var text="programming"
// var mystr= text.slice(0,4);
// console.log(mystr);
//Output:- "prog"

// split(delimiter, limit):
var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
txt.split(" ");          // Split on spaces

// substring(from, [to]):
//substring(from, [to])
var myString = 'javascript Programming';
myString = myString.substring(0,10);
console.log(myString)
//output: javascript

// toLowerCase():
//toLowerCase()
var myString = 'JAVASCRIPT';
myString = myString.toLowerCase();
console.log(myString)
//output: javascript

// toUpperCase():
//toUpperCase()
var myString = 'javascript';
myString = myString.toUpperCase();
console.log(myString)
//output: JAVASCRIPT

// search(“str”):
var str = "Welcome to programming World!!";
var pos = str.search("programming");

// substr() Method:
var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);
// Output: Banana

// JavaScript template literals:-

// Prior to ES6, we use single quotes (') or double quotes (") to wrap a string literal. At that time, the strings have very limited functionality. To help us in solving more complex problems, ES6 template literals provide the syntax that allows you to work with strings in a much cleaner way. In ES6, we can create a template literal by wrapping the string in backticks as follows:
let simple = `This is an example of
                     Template literal`;


                    //  Following are the features of javascript template literals:

                    //  We can write a Multiline string
                    //  It provides the ability to substitute part of the string for the values of variables or expressions. This feature is also called string interpolation.
                    //  It provides the ability to transform a string so that it is safe to include in HTML.
                 
let firstName = 'Code With',
lastName = 'Harry';         
let greets = `Welcome to ${firstName} ${lastName}`;
console.log(greets);
// Welcome to Code With Harry





console.log('We are at tut 6');
const name = 'Kaushal';
const greeting = 'Good Morning';
// console.log(greeting + ' ' + name);

let html;
html  = "<h1> this is heading</h1>"+
        "<p> this is My para</p>";

html = html.concat('this', ' str2');
console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html);


// console.log(html[1]);
// console.log(html.indexOf('<'));
// console.log(html.lastIndexOf('<'));
// console.log(html.charAt(3));
// console.log(html.endsWith('dsfsdfd'));
// console.log(html.includes(' fg'));
// console.log(html.substring(1,6));
// console.log(html.slice(0, 4))
// console.log(html.split('>'));
// console.log(html.replace('this', 'it'));

// let fruit1 = 'Orange\'';
// let fruit2 = 'Apple';
// let myHtml = `Hello ${name}
//             <h1> This is "my" heading </h1>
//             <p> You like ${fruit1} and ${fruit2}`;

// document.body.innerHTML = myHtml;


let Firstname = 'kaushal';
let lastname = 'kumar';
let thank = 'Thank you'
let myfirsthtml = `<h1>hello ${name} ${greeting} </h1>
                    <p> hello sir good morning</p>
                    <h3> i am from java script </h3>
                    <p> my first name is ${Firstname} and last name
                    is ${lastname} Thank you for learning java script ${thank} `

document.body.innerHTML = myfirsthtml