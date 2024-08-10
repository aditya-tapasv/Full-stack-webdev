let todoarr= [];
while(true){
let ans=prompt("Enter the task to be performed among list ,delete,add,quit ");
ans.toLowerCase();
if(ans == "list"){
    for(let i=0;i<todoarr.length;i++){
    console.log(i,todoarr[i]);}
    if(todoarr.length==0){
        console.log("No Task Remaining");
    }
}
if(ans == "delete"){
    console.log(` ${todoarr.pop()}ing  task is cpompleted `);
}
if(ans == "add"){
    let task =prompt("Enter the task to be done");
    todoarr.push(task);
}
if (ans == "quit"){
    break;
}
}