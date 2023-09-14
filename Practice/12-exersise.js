// Exercise 1
// You have to create a variable which is a string containing the text which is a link you are interested in.

// You have to fetch all the links from a given page which contains this text

// codewithharry.com
// javascript

// {
//   var a = document.links;

//   var string = "harry";
//   Array.from(a).forEach(function (element) {
//     if (element.href.includes(string)) console.log(element.href);
//   });
// }

// {
//   let a = document;
//   a = document.links;
//   Array.from(a).forEach(function (element) {
//     console.log(element);
//   });
// }

// a = document.images;

// Array.from(a).forEach(function (element) {
//   console.log(element, index);
// });


{
    let a = document;
    a = document.links;
    var kau = 'kau'
    Array.from(a).forEach(function(element){
        if(element.href.includes(kau)
        )
        console.log(element)
    })
    
    }