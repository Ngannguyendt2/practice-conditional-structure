function taxIncome() {
    let number=Number(prompt("Import your income"));
    let tax;
    if(number<10000000)
    {
        tax=0;
        alert("Tax amount is "+tax+" VND");
    }
    else if((number>=10000000) && (number<15000000))
    {
        tax=(5*number)/100;
        alert("Tax amount is "+tax+" VND");
    }
    else if((number>=15000000) && (number<20000000))
    {
        tax=(10*number)/100;
        alert("Tax amount is "+tax+" VND");
    }
    else if(number>=20000000)
    {
        tax=(15*number)/100;
        alert("Tax amount is "+tax+" VND");
    }
}