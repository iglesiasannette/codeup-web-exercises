function multiplyByTwo(num) {
    var i = 2;
    while (num <= 65536) {
        console.log(num);
        num *= 2;
    }
    return i;
}

console.log(multiplyByTwo(2));




    var allCones = Math.floor(Math.random() * 50) + 50;
    var customerCones = Math.floor(Math.random(1) * 5);

    console.log("I have a total of " + allCones + " cones.");
    console.log(customerCones);


    do {customerCones = Math.floor(Math.random(1) * 5);
        if(customerCones > allCones) {
            console.log("sorry, I can not sell you " + customerCones +
                " because I only have " + allCones)
        } else { console.log("I can sell you "  + customerCones + " because I have "
        + allCones);

            allCones -= customerCones;
        }
    } while (allCones >  0);
    console.log("Yay! I sold all the cones!");






