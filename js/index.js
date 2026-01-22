document.getElementById('login-btn')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;
    const pin = document.getElementById('pin').value;
    const convertPin = parseInt(pin);
    if (accountNumber.length == 11) {
      if (convertPin == 1234) {
        window.location.href = "./main.html";
        console.log("pin thik ache ")
      } else {
        alert("pin thik nai");
      }
    } else {
      alert("Need valid account number")
    }
  })
  

 
  