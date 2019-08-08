function checkCondition() {
    let a = Number(prompt("Import the first edge"));
    let b = Number(prompt("Import the second edge"));
    let c = Number(prompt("Import the third edge"));
    if (a > 0 && b > 0 && c > 0) {
        if((a+b>c) && (b+c>a) && (a+c>b))
        {
            alert(a+","+b+","+c+" la canh cua tam giac");
        }
        else {
            alert(a+","+b+","+c+" khong du dieu kien la canh cua tam giac");
        }

    }
    else
    {
        alert(a+","+b+","+c+" khong du dieu kien la canh cua tam giac");
    }
}