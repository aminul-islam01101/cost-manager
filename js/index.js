// import calculation from './income-calculation.js';

// calculation('income-details');
// calculation('expense-details');
const getIncomeTotal = document.getElementById('income-total-btn');
const getExpenseTotal = document.getElementById('expense-total-btn');
const getBalanceTotal = document.getElementById('check-balance');

const incomeInput = document.querySelectorAll('.income-details input');
const expenseInput = document.querySelectorAll('.expense-details input');
const incomeTotal = document.querySelector('.income-details span');
const expenseTotal = document.querySelector('.expense-details span');
const balance = document.querySelectorAll('.balance-details span');

function updateTotal(selector, update) {
    let total = 0;
    for (let i = 0; i < selector.length; i += 1) {
        total += parseFloat(update.innerText) + parseFloat(selector[i].value);
    }

    return total;
}

getIncomeTotal.addEventListener('click', () => {
    const income = updateTotal(incomeInput, incomeTotal);
    incomeTotal.innerText = income;

    balance[0].innerText = income;
});
getExpenseTotal.addEventListener('click', () => {
    const expense = updateTotal(expenseInput, expenseTotal);
    const income = updateTotal(incomeInput, incomeTotal);
    if (expense > income) {
        expenseTotal.innerText = 'insufficient income';
        return;
    }
    expenseTotal.innerText = expense;
    balance[1].innerText = expense;
});
getBalanceTotal.addEventListener('click', (event) => {
    const comments = document.getElementById('comments');
    const shoppingBtn = document.getElementById('shopping');
    const income = parseFloat(balance[0].innerText);
    const expense = parseFloat(balance[1].innerText);
    const savings = income * 0.1;
    const finalBalance = income - (expense + savings);
    balance[2].innerText = savings;
    balance[3].innerText = finalBalance;
    if (finalBalance > savings) {
        event.preventDefault();
        comments.innerText = 'lets do some shopping';
        shoppingBtn.classList.remove('hidden');
        event.target.className = 'hidden';
        console.log(event.target);
    }
});
