
const input = document.querySelector('input');
const panels = [...document.querySelectorAll('.panels .num')];


const numberArrays = [];

function numberSelection() {
    this.classList.toggle('color');
    let numberDraw = this.dataset.option

    if (numberArrays.length <= 5) {
        const addNumbers = numberArrays.push(numberDraw);

    }

    for (let i = 0; i < numberArrays.length; i++) {

        console.log(numberArrays[i]);
    }

}



panels.forEach(panel => panel.addEventListener('click', numberSelection));




