let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete"); // Adds class to button
    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value = "";

    // Add the event listener for the delete button immediately after creating it
    delbtn.addEventListener("click", function () {
        let par = this.parentElement;
        par.remove();
    });
});
