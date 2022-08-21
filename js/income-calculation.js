// export default function calculation(classGroup) {
//     const input = document.querySelectorAll(`.${classGroup} input`);

//     const total = document.querySelector(`.${classGroup} span`);
//     const balance = document.querySelectorAll('.balance-details span');

//     input.forEach((inputElement) => {
//         inputElement.addEventListener('keypress', (event) => {
//             if (event.key === 'Enter' && inputElement.classList.contains('income-input')) {
//                 event.preventDefault();
//                 total.innerText = parseFloat(total.innerText) + parseFloat(inputElement.value);
//                 balance[0].innerText = total.innerText;
//             }
//             if (event.key === 'Enter' && inputElement.classList.contains('expense-input')) {
//                 event.preventDefault();
//                 total.innerText = parseFloat(total.innerText) + parseFloat(inputElement.value);
//                 balance[1].innerText = total.innerText;
//             }
//         });
//     });
// }
