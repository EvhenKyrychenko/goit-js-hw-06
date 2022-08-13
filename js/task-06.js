const refInput = document.querySelector('#validation-input');

refInput.addEventListener('blur', event => {
    const inputLength = event.currentTarget.value;
    console.log(inputLength.length);
    console.log(refInput.dataset.length);
    if (inputLength.length === Number(refInput.dataset.length)) {
        refInput.classList.add('#validation-input.valid');

        console.log("ok");

    } else {
        console.log("not ok");
    }

})