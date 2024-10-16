// without using promises 


// function stodb(data , success , failure){
//     let intspeed= Math.floor(Math.random()*10)+1;
//     if(intspeed>4){
//         success();
//     } else{
//         failure();
//     }
// }

// stodb("Hello",() =>{     // see this section after the succes add the callback after line 13 
//     console.log("Data was saved");
// },
// ()=>{
//     console.log("Not saved");
// });

// stodb("Hello",() =>{     // see this section after the succes add the callback after line 13 
//     console.log("Data was saved");
//     stodb("Hello",() =>{
//         console.log("Data2 was also saved");
//     },
//     ()=>{
//         console.log(" 2nd  was Not saved");
//     });
// },
// ()=>{
//    console.log("Not saved");
// });

// with using promises  

function stdb(data){
    return new Promise((resolve ,reject) =>{
        let intspeed= Math.floor(Math.random()*10)+1;
         if(intspeed>4){
          resolve("Promise resolved " ,data );
        } else{
         reject(" failed to ",data);
        }
})
}
