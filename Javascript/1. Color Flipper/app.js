const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function () {
    //get random number bertween 0-3
    const randomNumber = getRandomNumber(colors.length);
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

export let getRandomNumber = (length) => Math.floor(Math.random() * length);