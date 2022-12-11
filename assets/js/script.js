// change background
let buttonColor = document.querySelector("#button-color");
buttonColor.addEventListener("click", (event) => {
    document.querySelector(".colors").classList.toggle("hidden");
})

let pickColors = document.querySelectorAll(".color");
pickColors.forEach((color) => {
    color.addEventListener("click", (event) => {
        document.body.style.backgroundColor = event.target.textContent;
    })
})
