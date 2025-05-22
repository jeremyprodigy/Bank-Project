let name = document.getElementById('name-input');
let firstDeposit = document.getElementById('deposit-input')
let createAccBtn = document.getElementById('create-btn');
let greeting = document.querySelector('.name-el');
let balance = document.getElementById('balance');
let depositInput = document.getElementById('deposit-amount');
let withdrawInput = document.getElementById('withdraw-amount')
let withdrawBtn = document.getElementById('withdraw-btn');
let depositBtn = document.getElementById('deposit-btn');

let obj = JSON.parse(localStorage.getItem('account-details')) || {};
if(JSON.parse(localStorage.getItem('account-details'))){
    // console.log('worked');
    balance.textContent = obj.balance;
    greeting.textContent = `Hi, ${obj.name}`
}

function save(){
    localStorage.setItem('account-details', JSON.stringify(obj))
}

createAccBtn.addEventListener('click', () => {
    greeting.textContent = `Hi, ${name.value}`
    balance.textContent = firstDeposit.value
    obj.name = name.value;
    obj.deposit = firstDeposit.value;
    obj.balance = firstDeposit.value
    save();

});

withdrawBtn.addEventListener('click', () => {
    console.log('clicked');
    
    if(Number(balance.textContent) === 0){
        alert('You have no money brokie you cant withdraw 😂')
    }else {
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









































































