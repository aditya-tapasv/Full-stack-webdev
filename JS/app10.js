let btn = document.querySelector("button");
btn.addEventListener("click",function () {
    let randomcolor = colorgen();


    let h3 = document.querySelector("h3");
    h3.innerText = randomcolor;

    let div = document.querySelector("div");
    div.style.backgroundColor=randomcolor;
    console.log("color updated");
});


function colorgen(){
    let red= Math.floor(Math.random()*250);
    let blue= Math.floor(Math.random()*250);
    let green= Math.floor(Math.random()*250);
    let color = `rgb(${red},${green},${blue})`;
    return color;
}


// assignment pending .