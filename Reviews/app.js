const reviews = [
    {
        id: 1,
        img: "images/apple.png",
        author: "Chris Okotie",
        job: "wEB DESIGNER",
        text: 
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 2,
        img: "images/baby.png",
        author: "Alan Okotie",
        job: "SWE",
        text: 
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 3,
        img: "images/bananas.png",
        author: "Smith Okotie",
        job: "MARKETER",
        text: 
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    }
];

const img = document.getElementById("person-img");
const myName = document.getElementById("author");
const job = document.getElementById("job");
const text = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

const currentContent = 2;
window.addEventListener("DOMContentLoaded", function(){
    const rev = reviews[currentContent];
    img.src = rev.img;
    myName.textContent = rev.author;
    job.textContent = rev.job;
    text.textContent = rev.text;
});