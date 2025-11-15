;

// function to get input values

function getInputValueNumber(id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value;
    const inputFieldValueNumber = parseInt(inputFieldValue)

    return inputFieldValueNumber;
}

//add money feature

document.getElementById('btn-add-money')
.addEventListener('click', function (event) {
    event.preventDefault();

    const bank = document.getElementById('bank')
    .value
    const bankAccount = document.getElementById('bank-account-number')
    .value;
    const addAmount = getInputValueNumber('add-amount')
    // const addAmount = parseInt(document.getElementById('add-amount')
    // .value)

    // this code 

    // const amountElement = document.getElementById('add-amount')
    // const amountElementValue = amountElement.value ;
    // const amount = parseInt(amountElement);

    // or this code 
    // const amount = getValue ('add-amount');
    // const pinNumber = getValue ('add-pin-number');


    const addPin = getInputValueNumber('add-pin-number')

    // const addPin = parseInt(document.getElementById('add-pin-number')
    // .value)

    
    const availableBalance = parseInt(document.getElementById('available-balance')
    .innerText);
    

    if( bank === " " ){
        alert('Please select a bank name!!!');
        return;
    }
    
    if(bankAccount.length <11){
        alert('Invalid bank account number!!!');
        return;
    }
    if (addPin !== validPin){
        alert('Invalid pin number!!!');
        return;
    }
    const totalNewAvailableBalance = addAmount + availableBalance;
    document.getElementById('available-balance')
    .innerText = totalNewAvailableBalance;

}) ;

 // cash out money feature
      
    document.getElementById('add-money-button')
    .addEventListener('click', function (event) {
        event.preventDefault();
       
        const amount = getInputValueNumber('')
    })
    document.getElementById('cash-out-button')
    .addEventListener('click', function (event) {
        event.preventDefault();

        document.getElementById('cash-out-parent')
        .style.display = 'block';

        document.getElementById('add-money-parent')
        .style.display = 'none';
    })

 // button  click
 // add money.

    // document.getElementById('add-money-button')
    // .addEventListener('click', function() {

    //     document.getElementById('cash-out-parent')
    //     .style.display = 'none';
        
    //     document.getElementById('add-money-parent')
    //     .style.display = 'block';
    // })
    // // cash out.


    // document.getElementById('cash-out-button')
    // .addEventListener('click', function() {

    //     document.getElementById('add-money-parent')
    //     .style.display = 'none';

    //     document.getElementById('cash-out-parent')
    //     .style.display = 'block';

    // })
    // // transfer.

    // document.getElementById('transfer-money-button')
    // .addEventListener('click', function() {

    //     document.getElementById('transfer-money-parent')
    //     .style.display = 'none';

    //     document.getElementById('cash-out-parent')
    //     .style.display = 'block';
    //     document.getElementById('add-money-parent')
    //     .style.display = 'block';   

    // })   
    // // Bonus.
    
    // document.getElementById('get-bonus-button')
    // .addEventListener('click', function(){

    //     document.getElementById('get-bonus-parent')
    //     .style.display = 'none';

    //     document.getElementById('cash-out-parent')
    //     .style.display = 'block';
    //     document.getElementById('add-money-parent')
    //     .style.display = 'block';
    //     document.getElementById('transfer-money-parent')
    //     .style.display = 'block';

    // })
    // // Pay Bill

    // document.getElementById('pay-bill-button')
    // .addEventListener('click', function (){

    //     document.getElementById('pay-bill-parent')
    //     .style.display = 'none';
    //     document.getElementById('cash-out-parent')
    //     .style.display = 'block';
    //     document.getElementById('add-money-parent')
    //     .style.display = 'block';
    //     document.getElementById('transfer-money-parent')
    //     .style.display = 'block';
    //     document.getElementById('get-bonus-parent')
    //     .style.display = 'block';

    // })

//     // Add Money Button
// document.getElementById('add-money-button')
// .addEventListener('click', function() {

//     document.getElementById('add-money-parent').style.display = 'block';
//     document.getElementById('cash-out-parent').style.display = 'none';
//     document.getElementById('transfer-money-parent').style.display = 'none';
//     document.getElementById('get-bonus-parent').style.display = 'none';
//     document.getElementById('pay-bill-parent').style.display = 'none';
// });

// // Cash Out Button
// document.getElementById('cash-out-button')
// .addEventListener('click', function() {

//     document.getElementById('cash-out-parent').style.display = 'block';
//     document.getElementById('add-money-parent').style.display = 'none';
//     document.getElementById('transfer-money-parent').style.display = 'none';
//     document.getElementById('get-bonus-parent').style.display = 'none';
//     document.getElementById('pay-bill-parent').style.display = 'none';
// });

// Transfer Money Button
document.getElementById('transfer-money-button')
.addEventListener('click', function() {

    document.getElementById('transfer-money-parent').style.display = 'block';
    document.getElementById('cash-out-parent').style.display = 'none';
    document.getElementById('add-money-parent').style.display = 'none';
    document.getElementById('get-bonus-parent').style.display = 'none';
    document.getElementById('pay-bill-parent').style.display = 'none';
});

// Get Bonus Button
document.getElementById('get-bonus-button')
.addEventListener('click', function() {

    document.getElementById('get-bonus-parent').style.display = 'block';
    document.getElementById('cash-out-parent').style.display = 'none';
    document.getElementById('add-money-parent').style.display = 'none';
    document.getElementById('transfer-money-parent').style.display = 'none';
    document.getElementById('pay-bill-parent').style.display = 'none';
});

// Pay Bill Button
document.getElementById('pay-bill-button')
.addEventListener('click', function() {

    document.getElementById('pay-bill-parent').style.display = 'block';
    document.getElementById('cash-out-parent').style.display = 'none';
    document.getElementById('add-money-parent').style.display = 'none';
    document.getElementById('transfer-money-parent').style.display = 'none';
    document.getElementById('get-bonus-parent').style.display = 'none';
});


// orrrrrrrrrrrrrrrrr
const validPin = 1234;
const validPin2 = 2341;
//add money feature

document.getElementById('btn-add-money')
.addEventListener('click', function (event){
    event.preventDefault();
    
    const bank = document.getElementById('bank')
    .value ;
    const bankAccountNumber = document.getElementById('bank-account-number')
    .value ;
    const addAmount = parseInt(document.getElementById('add-amount')
    .value);
    const addPinNumber = parseInt(document.getElementById('add-pin-number')
    .value);
    const availableBalance = parseInt(document.getElementById('available-balance')
    .innerText);

    console.log(addAmount, availableBalance);

    if(bankAccountNumber.length < 11){
        alert('Please provide valid account number !');
        return;
    }
    if(addPinNumber !== validPin){
        alert('Please provide valid pin number !');
        return;
    }

    alert('Money Added successfully.')
    const totalNewAvailableBalance = addAmount + availableBalance;

    document.getElementById('available-balance')
    .innerText = totalNewAvailableBalance;

    console.log(totalNewAvailableBalance);

})


 // cash out money feature
      
     document.getElementById('btn-withdraw')
     .addEventListener('click', function (event){
        event.preventDefault();
        // console.log('Withdraw btn clicked.')

        const amount = parseInt(document.getElementById('withdraw-amount')
    .value);

    const availableBalance = parseInt(document.getElementById('available-balance')
    .innerText);

    const agent = document.getElementById('agent-number')
    .value;

    const addPinNumber = parseInt(document.getElementById('add-pin')
    .value);

    const totalNewAvailableBalance = availableBalance - amount;
    
    console.log(amount, availableBalance);

    document.getElementById('available-balance')
    .innerText = totalNewAvailableBalance;

    console.log(totalNewAvailableBalance);

    
     if(agent.length < 6){
        alert('Please check the agent number!');
        return;
     }
     if(addPinNumber !== validPin2){
        alert('Please provide valid pin number !');
        return;
    }
     if (availableBalance <= 0) {
        alert('You have no available balance to withdraw!');
        return;
    }
     });







 // button  click
 // add money.

    // document.getElementById('add-money-button')
    // .addEventListener('click', function() {

    //     document.getElementById('cash-out-parent')
    //     .style.display = 'none';
        
    //     document.getElementById('add-money-parent')
    //     .style.display = 'block';
    // })
    // // cash out.


    // document.getElementById('cash-out-button')
    // .addEventListener('click', function() {

    //     document.getElementById('add-money-parent')
    //     .style.display = 'none';

    //     document.getElementById('cash-out-parent')
    //     .style.display = 'block';

    // })
    // // transfer.

    // document.getElementById('transfer-money-button')
    // .addEventListener('click', function() {

    //     document.getElementById('transfer-money-parent')
    //     .style.display = 'none';

    //     document.getElementById('cash-out-parent')
    //     .style.display = 'block';
    //     document.getElementById('add-money-parent')
    //     .style.display = 'block';   

    // })   
    // // Bonus.
    
    // document.getElementById('get-bonus-button')
    // .addEventListener('click', function(){

    //     document.getElementById('get-bonus-parent')
    //     .style.display = 'none';

    //     document.getElementById('cash-out-parent')
    //     .style.display = 'block';
    //     document.getElementById('add-money-parent')
    //     .style.display = 'block';
    //     document.getElementById('transfer-money-parent')
    //     .style.display = 'block';

    // })
    // // Pay Bill

    // document.getElementById('pay-bill-button')
    // .addEventListener('click', function (){

    //     document.getElementById('pay-bill-parent')
    //     .style.display = 'none';
    //     document.getElementById('cash-out-parent')
    //     .style.display = 'block';
    //     document.getElementById('add-money-parent')
    //     .style.display = 'block';
    //     document.getElementById('transfer-money-parent')
    //     .style.display = 'block';
    //     document.getElementById('get-bonus-parent')
    //     .style.display = 'block';

    // })

    // Add Money Button
document.getElementById('add-money-button')
.addEventListener('click', function() {

    document.getElementById('add-money-parent').style.display = 'block';
    document.getElementById('cash-out-parent').style.display = 'none';
    document.getElementById('transfer-money-parent').style.display = 'none';
    document.getElementById('get-bonus-parent').style.display = 'none';
    document.getElementById('pay-bill-parent').style.display = 'none';
});

// Cash Out Button
document.getElementById('cash-out-button')
.addEventListener('click', function() {

    document.getElementById('cash-out-parent').style.display = 'block';
    document.getElementById('add-money-parent').style.display = 'none';
    document.getElementById('transfer-money-parent').style.display = 'none';
    document.getElementById('get-bonus-parent').style.display = 'none';
    document.getElementById('pay-bill-parent').style.display = 'none';
});

// Transfer Money Button
document.getElementById('transfer-money-button')
.addEventListener('click', function() {

    document.getElementById('transfer-money-parent').style.display = 'block';
    document.getElementById('cash-out-parent').style.display = 'none';
    document.getElementById('add-money-parent').style.display = 'none';
    document.getElementById('get-bonus-parent').style.display = 'none';
    document.getElementById('pay-bill-parent').style.display = 'none';
});

// Get Bonus Button
document.getElementById('get-bonus-button')
.addEventListener('click', function() {

    document.getElementById('get-bonus-parent').style.display = 'block';
    document.getElementById('cash-out-parent').style.display = 'none';
    document.getElementById('add-money-parent').style.display = 'none';
    document.getElementById('transfer-money-parent').style.display = 'none';
    document.getElementById('pay-bill-parent').style.display = 'none';
});

// Pay Bill Button
document.getElementById('pay-bill-button')
.addEventListener('click', function() {

    document.getElementById('pay-bill-parent').style.display = 'block';
    document.getElementById('cash-out-parent').style.display = 'none';
    document.getElementById('add-money-parent').style.display = 'none';
    document.getElementById('transfer-money-parent').style.display = 'none';
    document.getElementById('get-bonus-parent').style.display = 'none';
});

// toggling feature
const forms = document.getElementsByClassName('form')    
    for(const form of forms){
        form.style.display = 'none'
    }
    document.getElementById('pay-bill-parent')
    .style.display = 'block'

    // handle toggle buttons
    const formBtn = document.getElementsByClassName('form-btn')
    for(const btn of formBtn){
        btn.classList.remove('border-[#0874f2]', 
        'bg-[#0874f20d]')
        btn.classList.add('border-gray-300')   
    }
    document.getElementById('cash-out-button')
        .classList.remove('border-gray-300')

        document.getElementById('cash-out-button')
        .classList.add('border-[#0874f2]', 
        'bg-[#0874f20d]')