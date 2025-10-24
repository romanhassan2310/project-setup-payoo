// login button
document.getElementById('btn-login')
.addEventListener('click', function(event) {
    event.preventDefault();
    // console.log('login btn clicked')
    const mobileNumber = 18268302230;
    const pinNumber = 1234 ;
    const mobileNumberValue = document.getElementById('mobile-number').value;
    const mobileNumberValueConverted = parseInt(mobileNumberValue)
    const pinNumberValue = document.getElementById('pin-number').value;
    const pinNumberValueConverted = parseInt(pinNumberValue);
   // console.log(mobileNumberValueConverted, pinNumberValueConverted);


    if(mobileNumberValueConverted === mobileNumber && 
        pinNumberValueConverted === pinNumber
    )
    {
        window.location.href = "./home.html";
    }
    else{
        alert('Invalid Credentials')

    }
})

// console.log('file connect')