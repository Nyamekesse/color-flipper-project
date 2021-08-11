const allColors = ["white", "red", "green", "pink", "violet", "yellow", "blue", "orange", "grey"];
const btn = document.querySelector('#btnColor');
const showCol = document.querySelector('.colorShow');
const textCol = document.querySelector('main .show h1');

btn.addEventListener('click', ()=> {
    let randomNum = getRandomNumber();
    document.body.style.backgroundColor = allColors[randomNum];
    showCol.textContent = allColors[randomNum];
    textCol.style.color = allColors[randomNum];
    showCol.style.color = allColors[randomNum];
});

function getRandomNumber() {
    return Math.floor(Math.random() * allColors.length);
}