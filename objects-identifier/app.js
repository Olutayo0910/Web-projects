const objImages = ['apple.png', 'bananas.png', 'bicycle.png', 'butterfly.png', 'car.png', 'cooking-pot.png', 'dog.png', 'fish.png', 'hen.png', 'horse.png', 'iron.png', 'kettle.png', 'lion.png', 'pineapple.png', 'sandals.png', 'shoes.png', 'smart-tv.png', 'umbrella.png', 'wicker-basket.png'];
const objNames = ['apple', 'banana', 'bicycle', 'butterfly', 'car', 'pot', 'dog', 'fish', 'hen', 'horse', 'iron', 'kettle', 'lion', 'pineapple', 'sandal', 'shoes', 'television', 'umbrella', 'basket'];

const image = document.getElementById("image");
const myName = document.getElementById("obj-name");
const body = document.body;

const extractedName = localStorage.getItem("extractedName");
document.getElementById("myName").textContent = extractedName;

const synth = window.speechSynthesis;

body.addEventListener("click", function() {
    const randomIndex = randomNumber();
    image.src = 'images/' + objImages[randomIndex];
    myName.textContent = objNames[randomIndex];

    speak(objNames[randomIndex]);
});

function randomNumber() {
    return Math.floor(Math.random() * objImages.length);
}

function speak(text) {
    if (synth.speaking) {
        return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
}
