// function dice(){
//     let num = Math.floor(Math.random()*6)+1;
//     console.log(num);
// }
// function table(n){
//     for(let i=0;i<=10;i++){
//         console.log(`${n}*${i} = ${n*i}`);
//     }
// } //this way the table will be printed 


// assignment begin 
// Question1 WriteaJavaScriptfunctionthatreturnsarrayelementslargerthananumber
// let arr = [1,2,5,9,2,45,67,89];
// let num = 5;
// function gelements(arr , num){
//     for(let i = 0 ;i<arr.length;i++){
//         if(arr[i]>num){
//             console.log(arr[i]);
//         }
//     }
// };
// gelements(arr , num);

// // question 2WriteaJavaScriptfunctiontoextractuniquecharactersfromastring. Example: str=“abcdabcdefgggh” ans=“abcdefgh"
// let str="abcdabcdefgggh"; 
// function getUnique(str){
//     let ans="";
// for( let i=0;i<str.length;i++){
//     let currChar=str[i];
//     if(ans.indexOf(currChar)==-1)
// {ans += currChar;}
// }
// return ans;
// }
// getUnique(str);

// question 3 WriteaJavaScriptfunctionthatacceptsalistofcountrynamesasinputandreturnsthelongestcountrynameasoutput.Example:country=["Australia","Germany","UnitedStatesofAmerica"]output:"UnitedStatesofAmerica"
// let country=["Australia","Germany","UnitedStatesofAmerica"];
// let bigstring = "";
// function grstr(country){
//     for(let i = 0;i<country.length;i++){
//         if(country[i].length>bigstring.length){
//             bigstring=country[i];
//         }
//     }
//     return bigstring;
// };
// let cl=grstr(country , bigstring);
// console.log(cl);

// question 4 Write a JavaScript function to count the number of vowels in a  String argument
// let str2 = "uacuhbauhbcjhawbrcuc";
// function vowel(str2){
//     for(let i = 0 ;i<str2.length;i++){
//         let char = str2[i];
//         if(char = "a"||"e"||"i"||"o"||"u"){
//             console.log(char);
//         }
//     }
// };
// vowel(str2);

// let str="apnacollege";
// function countVowels(str){
//     let count=0;
//     for(let i=0;i<str.length;i++)
//     {if(str.charAt(i)=="a"||str.charAt(i)=="e"||str.charAt(i)=="i"||str.charAt(i)=="o"||str.charAt(i)=="u")
//     {count++;}
// }
// return count;
// }
// countVowels(str);

// question 5 WriteaJavaScriptfunctiontogeneratearandomnumberwithinarange(start,end).

// let start=100;let end=200;
// function generateRandom(start,end){
//     let diff=end-start;
//     return Math.floor(Math.random()*diff)+start;
// }
// let ans = generateRandom(start , end);
// console.log(ans);
