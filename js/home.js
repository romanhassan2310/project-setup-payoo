const validPin = 1234;
const validPin2 = 2341;
const transactionData = []

// functions to get input values 
function getInputValueNumber (id){
     const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value;
    const inputFieldValueNumber = parseInt(inputFieldValue)

    return inputFieldValueNumber;
}

function getInputValue (id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    return inputFieldValue;
}
// function to get innerText.
function getInnerText (id){
    const element = document.getElementById(id)
    const elementValue = element.innerText
    const elementValueNumber = parseInt(elementValue)
    return elementValueNumber
    // console.log(elementValueNumber)
}
// function to set innerText
function setInnerText (value){
    const availableBalanceElement = document.getElementById
    ('available-balance')
    availableBalanceElement.innerText = value
}
//function to toggle
function handleToggle (id){
     const forms = document.getElementsByClassName('form')    
    for(const form of forms){
        form.style.display = 'none'
    }
    document.getElementById(id)
    .style.display = 'block'   
}
// function to toggle buttons
function handleButtonToggle (id){
    const formBtn = document.getElementsByClassName('form-btn')

    for(const btn of formBtn){
        btn.classList.remove('border-[#0874f2]', 
        'bg-[#0874f20d]')
        btn.classList.add('border-gray-300')
    }
    document.getElementById(id)
    .classList.remove('border-gray-300')
    document.getElementById(id)
    .classList.add('border-[#0874f2]', 
        'bg-[#0874f20d]')
}

//add money feature

document.getElementById('btn-add-money')
.addEventListener('click', function (event){
    event.preventDefault();
    
    const bank = getInputValue('bank')
    
    const bankAccountNumber = document.getElementById('bank-account-number')
    .value ;
    // this line 
    const addAmount = getInputValueNumber('add-amount')

    if (addAmount <= 0){
        alert("Invalid Amount")
        return;
    }
    
    const addPinNumber = getInputValueNumber('add-pin-number')
    
    const availableBalance = getInnerText('available-balance')
    
    

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
    
    setInnerText(totalNewAvailableBalance)

    const data = {
        name: 'Add Money',
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data);
     
})


 // cash out money feature
      
     document.getElementById('btn-withdraw')
     .addEventListener('click', function (event){
        event.preventDefault();
        // console.log('Withdraw btn clicked.')

        const amount = getInputValueNumber('withdraw-amount')

        const availableBalance = getInnerText('available-balance')

         if(amount <=0 || amount>availableBalance){
        alert("Please Check the balance!")
        return;
    }
    

    const agent = document.getElementById('agent-number')
    .value;

    const addPinNumber = parseInt(document.getElementById('add-pin')
    .value);

    const totalNewAvailableBalance = availableBalance - amount;
    
    console.log(amount, availableBalance);

    setInnerText(totalNewAvailableBalance)

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

    const data = {
        name: 'Cash Out',
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data);

    console.log(transactionData)
    
 });

 document.getElementById("transaction-button")
 .addEventListener("click", function(){
   const transactionContainer =document.getElementById("transaction-container")
   transactionContainer.innerText = ""

   for (const data of transactionData) {
      const div = document.createElement("div")
      div.innerHTML = `
        <div class="p-3 bg-white rounded-xl
                flex justify-between items-center mt-3">
                   <div class="flex items-center">
                        <div class="border-1 p-3 rounded-full
                        bg-[#f4f5f7]">
                            <img src="assets/wallet1.png" 
                            class="mx-auto" alt="">
                        </div>
                        <div class="ml-2">
                            <h1>${data.name}</h1>
                            <p>${data.date}</p>
                        </div>
                   </div>

                   <i class="fa-solid fa-ellipsis-vertical"></i>
               </div>
      
      `
      transactionContainer.appendChild(div)
   }
 })


 // button  click

// toggling feature

    // Add Money Button
document.getElementById('add-money-button')
.addEventListener('click', function() {
    handleToggle('add-money-parent')

    const formBtn = document.getElementsByClassName('form-btn')
    for(const btn of formBtn){
        btn.classList.remove('border-[#0874f2]', 
        'bg-[#0874f20d]')
        btn.classList.add('border-gray-300')
    }
    document.getElementById('add-money-button')
        .classList.remove('border-gray-300')

        document.getElementById('add-money-button')
        .classList.add('border-[#0874f2]', 
        'bg-[#0874f20d]')
});

// Cash Out Button
document.getElementById('cash-out-button')
.addEventListener('click', function() {
    handleToggle('cash-out-parent') 

    handleButtonToggle('cash-out-button')

});

// Transfer Money Button
document.getElementById('transfer-money-button')
.addEventListener('click', function() {
    handleToggle('transfer-money-parent')

    handleButtonToggle('transfer-money-button')
});

// Get Bonus Button
document.getElementById('get-bonus-button')
.addEventListener('click', function() {
    handleToggle('get-bonus-parent')
    
    handleButtonToggle('get-bonus-button')
});

// Pay Bill Button
document.getElementById('pay-bill-button')
.addEventListener('click', function() { 
    handleToggle('pay-bill-parent')

    handleButtonToggle('pay-bill-button')
});
// Transaction receipt button
document.getElementById('transaction-button')
.addEventListener('click', function() { 
    handleToggle('transaction-receipt-parent')

    handleButtonToggle('transaction-button')
});