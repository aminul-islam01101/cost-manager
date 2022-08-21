export default function addition(amount, input) {
    return parseFloat(amount.innerText) + parseFloat(input.value);
}
export function subtraction(amount, input) {
    return parseFloat(amount.innerText) - parseFloat(input.value);
}
export function comparison(amount, input) {
    return parseFloat(input.value) > parseFloat(amount.innerText);
}
export const nitAmount = document.querySelector('#nit-amount');
