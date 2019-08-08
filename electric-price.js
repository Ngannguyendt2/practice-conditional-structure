function price() {
    let number=Number(prompt("Import number electric"));
    let money=0;
    if((number>=0) && (number<50))
    {
        money=number*3500;
        alert("Price electric of your is "+money+" VND");
    }
    else if((num>=50) && (number<100))
    {
        money=number*4000;
        alert("Price electric of your is "+money+" VND");
    }
    else if(num>=100){
        money=number*5000;
        alert("Price electric of your is "+money+" VND");
    }
}