const cashOut = document.getElementById('cash-out');
if (cashOut) {
  cashOut.addEventListener('click', function () {
    window.location.href = "./cashout.html";
    console.log("cash out");
  });
} 