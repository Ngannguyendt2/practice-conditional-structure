function check() {
    let age=Number(prompt("Import your old"));
    if(Number.isInteger(age))
    {
        if((age>=120) || (age<0))
        {
            alert("Beyond the limit")
        }
        else {
            alert("Your age is "+ age);
        }
    }
}