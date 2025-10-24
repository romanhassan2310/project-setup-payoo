document.getElementById('btn-withdraw')
.addEventListener('click', function(event){
    event.preventDefault();


    const availableBalance = document.getElementById('available-balance')
    .value;
    const agentNumber = parseInt(document.getElementById('agent-number')
    .value) ;
    const amount = parseInt(document.getElementById('add-amount')
    .value);
    const pin = parseInt(document.getElementById('add-pin')
    .value);

    const newBalance = availableBalance - amount;
    console.log(newBalance);
})