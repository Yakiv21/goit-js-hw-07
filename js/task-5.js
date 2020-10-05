const inputEll = document.querySelector('#name-input');
const nameOutputEll = document.querySelector('#name-output');

inputEll.addEventListener('input', onNameOutput);

function onNameOutput(event) {
    if (event.currentTarget.value !=='') {
    nameOutputEll.textContent = event.currentTarget.value;
    } else {
    nameOutputEll.textContent = 'незнакомец';
    }
}