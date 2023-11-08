const value = document.getElementById("value");
const decrease = document.getElementById("decrease");
const zero = document.getElementById("zero");
const increase = document.getElementById("increase");

let count = 0;
increase.addEventListener("click", function() {
    count += 1;
    value.textContent = count;
    updateTextColor();
});

decrease.addEventListener("click", function() {
    count -= 1;
    value.textContent = count;
    updateTextColor();
});

zero.addEventListener("click", function() {
    count = 0;
    value.textContent = count;
    updateTextColor();
});

function updateTextColor() {
    if (count > 0) {
        value.style.color = "green";
    } else if (count < 0) {
        value.style.color = "red";
    } else {
        value.style.color = "black";
    }
}