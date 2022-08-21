import addition, { comparison, nitAmount, subtraction } from './utilities.js';

document.querySelector('#withdraw-btn').addEventListener('click', () => {
    const withdrawAmount = document.querySelector('#withdraw-amount');
    const withdrawInput = document.querySelector('#withdraw-input');

    if (comparison(nitAmount, withdrawInput)) {
        alert('insufficient balance');
        withdrawInput.value = '';
        return;
    }
    withdrawAmount.innerText = addition(withdrawAmount, withdrawInput);
    nitAmount.innerText = subtraction(nitAmount, withdrawInput);
    withdrawInput.value = '';
});
