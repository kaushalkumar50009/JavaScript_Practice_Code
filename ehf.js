// function kat(num){

//     let st = num
//     let strin = " ";
//     for(let i = 0; i<st; i++){
//         for(let j =0; j<st; j++){
//             strin += "*"
//         }
//         strin += "\n"
//     }
//     console.log(strin)
// }

// kat(5)

///////////////////////////////////////////////

// function kat(num){

//     let n = num
//     let strin = " ";
//     for(let i = 0; i<n; i++){
//         for(let j =0; j<n-i; j++){
//             strin += "*"
//         }
//         strin += "\n"
//     }
//     console.log(strin)
// }

// kat(5)

//////////////////////////////////////////////////////////////

// let n = 5; // row or column count
// // defining an empty string
// let string = "";

// for(let i = 0; i < n; i++) { // external loop
//   for(let j = 0; j < n; j++) { // internal loop
//     if(i === 0 || i === n - 1) {
//       string += "*"; 
//     }
//     else {
//       if(j === 0 || j === n - 1) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//   }
//   // newline after each row
//   string += "\n";
// }
// // printing the string
// console.log(string);

/////////////////////////////////////////////////

// let n = 5; // row or column count
// // defining an empty string
// let string = "";

// for(let i = 0; i < n; i++) { // external loop
//   for(let j = 0; j < n; j++) { // internal loop
//     if(i === 0 || i === n - 1) {
//       string += "*"; 
//     }
//     else {
//       if(j === 0 || j === n - 1) {
//         string += " ";
//       }
//       else {
//         string += "*";
//       }
//     }
//   }
//   // newline after each row
//   string += "\n";
// }
// // printing the string
// console.log(string);

////////////////////////////////////////////////////////

// function getName(name, callback){
//     setTimeout(() => {
//         console.log('first Timeout')
//         callback(name)
//     }, 2000);
// }

// function getHobby(name,callback){
//     setTimeout(()=>{
//         console.log('second Timeout')
//         callback(['hellp','huuu'])
//     },4000)
// }

// function getDream(name,callback){
//     setTimeout(()=>{
//         console.log('Third Timeout')
//         callback(['war','destroy'])
//     },1000)
// }

// function createCallbackHell(nm){
//     console.log(nm);
//     getHobby(nm,(hobby)=>{
//         console.log(hobby);
//         getDream(nm,(dream)=>{
//             console.log(dream[0]);
//             setTimeout(()=>{
//                 console.log('hii friends chai pi loo')
//             },9000)
//         })
//     })
// }

// getName('kaushal',createCallbackHell)

/////////////////////////////////////////////////////////

// let choose = {
//     ch1 : ['a','b','c'],
//     ch2 : ['d','e','f'],
//     ch3 : ['g','h','i']
// }

// let pr = (chose,chs3,callb)=>{
//     setTimeout(()=>{
//         console.log(choose.ch1[chose])
//         callb(chs3)
//     },1000)
    
// }
     
// let cal = (chs3)=>{
//    setTimeout(()=>{
//        console.log('you have choose first ch1')
//        setTimeout(()=>{
//            console.log(choose.ch2[0])
//            setTimeout(()=>{
//                console.log('you have choose 2nd')
//                setTimeout(()=>{
//                    console.log(choose.ch3[chs3])
//                    setTimeout(()=>{
//                        console.log('you have choose ch3 done now end')
//                    },2000)
//                },1000)
//            },2000)
//        },1000)
//    },2000)
// }

// pr(0,1,cal)

/*
function g (a,b, callback){
  
   console.log(a)
   callback(b)
}

function s(b){
   console.log(b)
}

g(1,10,s)

*/

///////////////////////////////////////////////////////////
// function getName(name, callback){
//     setTimeout(() => {

//         console.log('first timeout')
//         callback(name)

//     }, 2000);
// }

// function getHobby(name, callback){
//     setTimeout(()=>{
//         console.log('second Timeout')
//         callback(['hellp','huuu'])
//     },1000)
// }

// function getDream(name,callback){
//     setTimeout(()=>{
//         console.log('Third Timeout')
//         callback(['war','destroy'])
//     },2000)
// }


// const nm = getName('kaushal', (nm)=>{console.log(nm);
// getHobby(nm,(hobby)=>{console.log(hobby);
// getDream(nm,(dream)=>{console.log(dream)})})})

//////////////////////////////////////////////////////////////

function getName(name){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('first timeout')
            resolve(name)
        }, 2000);
    })
}

function getHobby(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('second Timeout')
            resolve(['hellp','huuu'])
        },1000)
    })
}

getName('kaushal')

//Working perfect
.then(nm=>console.log(nm))

.then(nm=>getHobby(nm))

.then(hobby=>console.log(hobby))

//showing undefined 
// .then((nm)=>{getHobby(nm)})
// .then((hobby)=>{console.log(hobby)})



