const allColors = ["white", "red", "green", "pink", "violet", "yellow", "blue", "orange", "grey"];
const btn = document.querySelector('#btnColor');
const showCol = document.querySelector('.colorShow');
const textCol = document.querySelector('main .show h1');
const topText = document.querySelectorAll('#topMenu h2 a');

btn.addEventListener('click', ()=> {
    let randomNum = getRandomNumber();
    document.body.style.backgroundColor = allColors[randomNum];
    showCol.textContent = allColors[randomNum];
    textCol.style.color = allColors[randomNum];
    showCol.style.color = allColors[randomNum];

    topText.forEach((item) => {
        item.style.color = 'white';

        if (document.body.style.backgroundColor == 'white') {
            item.style.color = '#111';
        }
    })
});

function getRandomNumber() {
    return Math.floor(Math.random() * allColors.length);
}
