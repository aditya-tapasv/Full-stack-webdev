// function getavg(){
//     console.log(this); // this prints the window object so ina tab the most highest object is window object
// }

// try{
//     console.log(a);
// }catch(err){  // or catch{cosole.....}
//     console.log("a is not defined ")
//     console.log(err);  /// printd the type of error
// }


// const sum =(a,b) => {
//     console.log(a+b);
// };


//also 
// const sum =(a,b) => (a+b);
// const student = {
//     name: "aman",
//     marks: 95,
//     prop: this,             //global scope
//     getName: function () {
//         console.log(this);
//         return this.name;
//     },

//     getMarks: () => {
//         console.log(this);     //parent's scope -> window
//         return this.marks;
//     },

//     getInfo1: function () {
//         setTimeout(() => {
//             console.log(this);    //student
//         }, 2000);
//     },

//     getInfo2: function () {
//         setTimeout(function () {
//             console.log(this);    //window
//         }, 2000);
//     }
// };
// assignment began 
// question 1 Write an arrow function named array Average that accepts an array of numbers and returns the average of those numbers.

// let n = parseFloat(prompt("Enter the no. of elemnts in array"));
// let a=[];
// for(let i=0;i<n;i++){
//     a[i]=parseInt(prompt("Enter the emenets of array"));}
    
// const average =(a,n) => {
//     let sum =0;
//     for(let i=0;i<n;i++){
//     sum += a[i];}
//     let avg = sum/n;
//     console.log(avg);
//     return avg;
//     };
//     average(a,n);

// question 2 Write an arrow function named is Even() that takes a single number as argument and returns if itis even or not
// let isEven = (a) => {
//     if((a%2)===0){
//         console.log("Is  Even");
//     }else{
//         console.log("Is not Even no.");
//     }
// };
// let a = parseInt(prompt("Enter the no. "))
// isEven(a);

// question 3 
// const object = {
//     message:'Hello,World!',
//     logMessage() {
//         console.log(this.message);}
//     };
//     setTimeout(object.logMessage,1000);

// question 4
// let length = 4;

// function callback() {
//     console.log(this.length);
// }

// const object = {
//     length: 5,
//     method(callback) {
//         callback();
//     }
// };

// object.method(callback, 1, 2);
// ans 4
// hello assignment completed!
// century yay!!!!!!!!!!!!!