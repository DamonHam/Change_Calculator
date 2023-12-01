document.getElementById('calculate-change').addEventListener('click', function(event) {
    event.preventDefault();

    const money = [
        ['Hundreds', 10000],
        ['Fifties', 5000],
        ['Twenties', 2000],
        ['Tens', 1000],
        ['Fives', 500],
        ['Dollars', 100],
        ['Quarters', 25],
        ['Dimes', 10],
        ['Nickels', 5],
        ['Pennies', 1]
    ];
    
    var amtDue = document.getElementById('amount-due').value;
    var amtRec = document.getElementById('amount-received').value;
    
    if (isNaN(amtDue) || amtDue === '' || isNaN(amtRec) || amtRec === '') {
        alert('Please enter a valid number');
        return;
    }
    if(Number(amtRec) < Number(amtDue)) {
        alert('Please enter a number greater than the amount due');
        return;
    }
    
    var change = (amtRec - amtDue) * 100;
    
    for (let i = 0; i < money.length; i++) {
        let coin = money[i];
        let coinName = coin[0];
        let coinValue = coin[1];
    
        let coinAmount = Math.floor(change / coinValue);
        change = change % coinValue;
    
        document.getElementById(`${coinName}-output`).textContent = `${coinName}: ${coinAmount.toLocaleString()}`;
    }
});
