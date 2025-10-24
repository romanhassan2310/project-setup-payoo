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
