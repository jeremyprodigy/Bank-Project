let name = document.getElementById('name-input');
let firstDeposit = document.getElementById('deposit-input')
let createAccBtn = document.getElementById('create-btn');
let greeting = document.querySelector('.name-el');
let balance = document.getElementById('balance');
let depositInput = document.getElementById('deposit-amount');
let withdrawInput = document.getElementById('withdraw-amount')
let withdrawBtn = document.getElementById('withdraw-btn');
let depositBtn = document.getElementById('deposit-btn');
let createAccContainer = document.querySelector('.create-account-container')
let mainContainer = document.querySelector('.container')

let obj = JSON.parse(localStorage.getItem('account-details')) || {};
if (JSON.parse(localStorage.getItem('account-details'))) {
    // console.log('worked');
    balance.textContent = obj.balance;
    greeting.textContent = `Hi, ${obj.name}`;
    mainContainer.style.display = 'block';
}
if (localStorage.getItem('loginHidden') === "true") {
    createAccContainer.style.display = 'none';
}else {
    createAccContainer.style.display = 'block'
}
console.log(createAccContainer);
console.log(window.innerWidth);


function save() {
    localStorage.setItem('account-details', JSON.stringify(obj))
}


createAccBtn.addEventListener('click', () => {
    greeting.textContent = `Hi, ${name.value}`
    balance.textContent = firstDeposit.value
    obj.name = name.value;
    obj.deposit = firstDeposit.value;
    obj.balance = firstDeposit.value
    createAccContainer.style.display = 'none';
    localStorage.setItem('loginHidden', 'true')
    save();
    mainContainer.style.display = 'block';
});

withdrawBtn.addEventListener('click', () => {
    console.log('clicked');

    if (Number(balance.textContent) === 0) {
        alert('You have no money brokie you cant withdraw 😂')
    } else if (Number(withdrawInput.value) > Number(balance.textContent)) {
        alert('You cant withdraw that much money')
    } else {
        obj.balance -= withdrawInput.value;
        balance.textContent = obj.balance;
        save();
    }
})

depositBtn.addEventListener('click', () => {
    console.log('clicked');

    obj.balance += Number(depositInput.value);
    balance.textContent = obj.balance;
    console.log(typeof depositInput.value);
    save();
})









































































