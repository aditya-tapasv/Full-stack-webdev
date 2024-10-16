// let gameSeq =[];
// let userSeq= [];
// let highestscore =0;
// let btns = ["yellow","red","blue","green"];

// let started = false;
// let level = 0 ;


// document.addEventListener("keypress", function(){
//     if(started=false){
//         console.log("game is started");
//         started =true;

//         levelup();
//     }
// });
// function gameFlash(btn){
//     btn.classList.add("gameflash");
//     setTimeout(function (){
//         btn.classList.remove("gameflash");        
//     },250);
// }

// function userFlash(btn){
//     btn.classList.add("userflash");
//     setTimeout(function (){
//         btn.classList.remove("userflash");        
//     },250);
// }


// function levelup(){
//     userSeq=[];
//     level++;
//     let randIdx =Math.floor(Math.random()*3);
//     let randColor =btns[randIdx];
//     let randbtn = document.querySelector(`.${randColor}`);
//     gameSeq.push(randColor);
//     gameFlash(randbtn);
// }


// function check(idx){
//     if(userSeq[idx]===gameSeq[idx]){
//         if(userSeq.length == gameSeq.length){
//             setTimeout(levelup,1000);
//         }
//     }else{
//         h2.innerHTML = `Game Over ! Your score was <b>${level}</b> <br> Press Any key to start`;
//         if(highestscore<level){
//             highestscore=level;
//         }
//         h2.innerText = `Game Over ! Your score was <b>${level}</b> <br> This was the Highest Score <br> Press Any key to start`;
//         document.querySelector("body").style.backgroundColor="red";
//         setTimeout(function (){
//             document.querySelector("body").style.backgroundColor ="white";;
//         },150);
//         reset();
//     }
// }
// function btnpress(){
//     let btn = this;
//     userFlash(btn);
//     usercolor=btn.getAttribute("id");
//     userSeq.push(usercolor);

//     check(userSeq.length - 1);
// }

// let allbtns = document.querySelectorAll(".btn");
// for(btn of allbtns){
//     btn.addEventListener("btnPress",btn);
// }


// function reset(){
//     started = false;
//     gameSeq=[];
//     userSeq=[];
//     level = 0 ;
// }


let gameSeq = [];
let userSeq = [];
let highestscore = 0;
let btns = ["yellow", "red", "blue", "green"];

let started = false;
let level = 0;

// Start the game when a key is pressed
document.addEventListener("keypress", function () {
    if (started === false) {
        console.log("Game is starting...");
        started = true;
        document.querySelector("h2").innerText = "Level " + (level + 1);
        
        // Add a delay before starting the first level flash
        setTimeout(levelup, 1000);  // 1 second delay before flashing the first button
    }
});

// Function to handle game flash
function gameFlash(btn) {
    btn.classList.add("gameflash");
    setTimeout(function () {
        btn.classList.remove("gameflash");
    }, 500);  // Flash duration increased to 500ms
}

// Function to handle user flash
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);  // Flash duration remains the same for user press
}

// Increase level and generate a new random button
function levelup() {
    userSeq = [];
    level++;
    document.getElementById("level-title").innerText = "Level " + level;

    setTimeout(function () {  // Adding a delay to make the flash noticeable
        let randIdx = Math.floor(Math.random() * 4); // Generate random index between 0 and 3
        let randColor = btns[randIdx];
        let randbtn = document.querySelector(`.${randColor}`);
        gameSeq.push(randColor);
        gameFlash(randbtn);
    }, 1000);  // 1 second delay before flashing the next button
}

// Check user sequence against game sequence
function check(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelup, 1000);  // Wait 1 second before the next level
        }
    } else {
        let h2 = document.querySelector("h2");
        h2.innerHTML = `Game Over! Your score was <b>${level}</b><br>Press Any key to start`;

        if (highestscore < level) {
            highestscore = level;
        }

        h2.innerHTML += `<br>This was the Highest Score: <b>${highestscore}</b><br>Press Any key to start`;
        document.querySelector("body").style.backgroundColor = "red";

        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);

        reset();
    }
}

// Function to handle user button press
function btnpress() {
    let btn = this;
    userFlash(btn);
    let usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);
    check(userSeq.length - 1);
}

// Add click event listeners to all buttons
let allbtns = document.querySelectorAll(".btn");
allbtns.forEach(function (btn) {
    btn.addEventListener("click", btnpress);
});

// Reset the game
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
