const validInputEll = document.querySelector('#validation-input');

validInputEll.addEventListener('blur', onInputCheck)

function onInputCheck(event) {
    if (
        event.currentTarget.value.length < event.currentTarget.getAttribute('data-length') ||
         event.currentTarget.value.length > event.currentTarget.getAttribute('data-length')
    ) {
        validInputEll.classList.add('invalid');

    } else {
        validInputEll.classList.add('valid');
        validInputEll.classList.remove('invalid');

    }
}