document.getElementById('add-money-btn').addEventListener('click', function (event) {
  
  event.preventDefault();
  const cashMoney = document.getElementById('cash').innerText;
  const convertCashMoney = parseFloat(cashMoney);
  const addAmount = document.getElementById('amount').value;
  const convertAddAmount = parseFloat(addAmount);

  const pin = document.getElementById('pin').value;
  const convertPin = parseInt(pin);

  if (pin) {
    if (convertPin == 1234) {
      const sum = convertCashMoney + convertAddAmount;
      document.getElementById('cash').innerText = sum;


    } else {
      alert("Enter voild Pin")
    }
  } else {
    alert("Fullfill all info")
  }



})
