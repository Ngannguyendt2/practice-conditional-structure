function solve() {
    let num1 = Number(prompt('Import a'));
    let num2 = Number(prompt('Import b'));
    let x;
    if (num1 == 0) {
        if (num2 == 0) {
            alert('Phuong trinh co vo so nghiem');
        } else {
            alert('Phuong tirnh vo nghiem');
        }
    } else {
        x = -num2 / num1;
        alert('Phuong trinh co nghiem duy nhat la ' + x);
    }
}