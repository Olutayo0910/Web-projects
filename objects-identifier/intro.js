const btn = document.getElementById("btn");
const msg = document.getElementById("message");

btn.addEventListener("click", function() {
    const myName = document.querySelector(".name-input").value;
    msg.innerHTML = `Welcome <span class="name"> ${myName}! </span> <a href="index.html">Continue</a>`;
});