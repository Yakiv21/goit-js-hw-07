const decrementBtnEll = document.querySelector('[data-action="decrement"]');
const incrementBtnEll = document.querySelector('[data-action="increment"]');
const valueEll = document.querySelector('#value');
let counterValue = 0;

decrementBtnEll.addEventListener('click', onDecrementClick);
incrementBtnEll.addEventListener('click', onIncrementClick);

function onDecrementClick (event) {
    counterValue -=1;
    valueEll.textContent = counterValue;
}

// onDecrementClick();

function onIncrementClick (event) {
    counterValue +=1;
    valueEll.textContent = counterValue;
}

// onIncrementClick();
