console.log("print prime number or not")

// function reverse(array) {
//     var output = [];
//     while (array.length) {
//       output.push(array.pop());
//     }
  
//     return output;
//   }
  
//   console.log(reverse([1, 2, 3, 4, 5, 6, 7]));


function primeNo(){
   let value = document.getElementById("data").value
   if(value == 1){
    result = `This number ${value} is not prime or nor composite number`
   }
    
   else if(value < 1){
        result = `this number ${value} is not prime number`
   }
   else{
        for( let i=2; i<value; i++){
            if (value % i == 0){
                result = `your number ${value} is not prime`
                break;
          }
          else{
              result = `your number ${value} is prime`
              }
          }
        
   document.getElementById("result").innerText = `${result}`
        
   }
   document.getElementById("result").innerText = `${result}`

}



