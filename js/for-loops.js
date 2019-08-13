

function showMultiplicationTable(num){

    for (var i = 1; i <= 10; i++){
        console.log(num + " times " + i + " equals " + (num * i));
    }
}



showMultiplicationTable(7);




function isOddOrEven(){
    for(var i = 1; i <= 10; i++) {
        var random = Math.floor(Math.random() * 181) + 20;
        if (random % 2 === 0) {
            console.log(random + " is Even!");
        } else {
            console.log(random + " is Odd!");
        }
    }
}
isOddOrEven();

/*Version 1 */
for(var i = 1; i <= 9; i++) {

    output = "";

    for (y = 0; y < i; y++) {
        output = output + (i);

        }
    console.log(output);
    }


/*Version 2

for(var x; x<= 9; x++){
    console.log(String(x).repeat(x));
}

*/


for(var i = 100; i >= 5; i-=5) {
    console.log(i);
}

