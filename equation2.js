function resolve() {
    let a = Number(prompt("Import a"));
    let b = Number(prompt("Import b"));
    let c = Number(prompt("Import c"));
    let delta, x1, x2;
    if (a == 0) {
        let value;
        value = -c / b;
        document.write("Phuong trinh co nghiem duy nhat la: " + value);
    } else if (a != 0) {
        delta = (b * b) - (4 * a * c);
        if (delta > 0) {
            x1 = ((-b) + Math.sqrt(delta)) / (2 * a);
            x2 = ((-b) - Math.sqrt(delta)) / (2 * a);
            document.write("Phuong trinh co 2 nghiem là x1= " + x1 + " ,x2= " + x2);
        } else if (delta < 0) {
            document.write("Phuong trinh vo nghiem");
        } else if (delta == 0) {
            let value;
            value = -b / (2 * a);
            document.write("Phuong trinh co nghiem duy nhat la: " + value);
        }
    }


}