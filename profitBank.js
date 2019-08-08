function profit() {
    let number=Number(prompt("Import borrow amount"));
    let month=Number(prompt("Import borrow month"));
    let profit,money;
    if(month<=1)
    {
        profit=7.1;
        money=number*profit;
        alert("Profit amount is "+money);
    }
    else if((month>1) && (month<=3))
    {
        profit=5.8;
        money=number*profit;
        alert("Profit amount is "+money);
    }
    else if((month>3) && (month<=6))
    {
        profit=4.8;
        money=number*profit;
        alert("Profit amount is "+money);
    }
    else if((month>6) && (month<=12))
    {
        profit=4;
        money=number*profit;
        alert("Profit amount is "+money);
    }
}