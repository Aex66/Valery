const button = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')

let currentText = 0
const texts = [
    'No.',
    'Estás segura?',
    'Estás completamente segura?',
    'Pero segura segura?',
    'Por favor?',
    'Pero porfavor porfavor?',
    'Andale perdoname',
    'Deja de darle click aqui!!!',
    'Ya perdoname!!!',
    'No puedes decir que no!',
    'Andale amorchi',
    'POR FAVOOOR',
    'ANDALE ANDALE',
    'PERDONAMEEEE'
]
function btn1Resize() {
    currentText++
    btn2.innerText = `${texts[currentText] ? texts[currentText] : texts[texts.length - 1]}`
    let currentSize = window.getComputedStyle(button).fontSize;
    const newSize = parseFloat(currentSize) * 1.4;

    const interval = setInterval(function() {
        if (parseFloat(window.getComputedStyle(button).fontSize) >= newSize) {
            clearInterval(interval);
        } else {
            let currentSize = parseFloat(window.getComputedStyle(button).fontSize);
            button.style.fontSize = (currentSize+ 1) + "px";
        }
    }, 2);
}

function btn1Action() {
    button.parentNode.removeChild(button)
    btn2.parentNode.removeChild(btn2)

    document.getElementById('yes_image').style.display = 'block'

    document.getElementById('yes_text').innerHTML = `TE AMO ENERGÚMENA`
}