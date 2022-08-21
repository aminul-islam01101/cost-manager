const email = document.querySelector('input[type="email"]');
const password = document.querySelector('input[type="password"]');
const submitBtn = document.querySelector('input[type="button"]');
submitBtn.setAttribute('disabled', 'true');

password.addEventListener('keyup', () => {
    console.log(email.value, password.value);

    if (email.value === 'expense-calculator@bank.com' && password.value === '0000') {
        submitBtn.removeAttribute('disabled');
        submitBtn.addEventListener('click', () => {
            window.open('http://127.0.0.1:5500/public/bank.html', '_blank').focus();
        });
    } else {
        submitBtn.setAttribute('disabled', '');
    }
});
