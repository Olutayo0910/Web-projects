const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const color = document.querySelector(".color");
const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    const randomNum = getRandNum();
    document.body.style.backgroundColor = colors[randomNum];
    color.textContent = colors[randomNum];
});

function getRandNum() {
    var randN = Math.floor(Math.random() * colors.length);
    return randN;
}