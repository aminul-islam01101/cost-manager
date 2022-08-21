import addition, { nitAmount } from './utilities.js';

document.querySelector('#deposit-btn').addEventListener('click', () => {
    const dAmount = document.querySelector('#deposit-amount');
    const depositInput = document.querySelector('#deposit-input');

    dAmount.innerText = addition(dAmount, depositInput);
    nitAmount.innerText = addition(nitAmount, depositInput);
});
