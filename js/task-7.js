const fontSizeControlEll = document.querySelector('#font-size-control');
const textEll = document.querySelector('#text');

fontSizeControlEll.addEventListener('input', onFontSizeControl)

function onFontSizeControl (event) {
    textEll.style.fontSize = event.currentTarget.value + 'px';
}