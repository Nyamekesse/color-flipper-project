const items = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const btn = document.querySelector('#btnColor');
const showColor = document.querySelector('.colorShow');
const textColor = document.querySelector('main .show h1');
const topText = document.querySelectorAll('#topMenu h2 a');
console.log(topText);

btn.addEventListener('click', ()=> {
    let colorHex = "#";
    topText.forEach((item) => {
        item.style.color = 'white';
    });

    for (let i=0; i<6; i++){
        colorHex += items[getRandomNum()]
    }

    document.body.style.backgroundColor = colorHex;
    textColor.style.color = colorHex;
    showColor.textContent = colorHex;
    showColor.style.color = colorHex;

})

function getRandomNum(){
    return Math.floor(Math.random() * items.length);
}