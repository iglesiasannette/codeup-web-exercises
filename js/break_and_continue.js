// declare variables
var enteredNumber = 0;


// While entered number is even do
// prompt user to enter an odd number

while (enteredNumber % 2 === 0) {
    enteredNumber = +prompt("Enter an odd number between 1 and 50:");

}
for (var i = 1; i < 50; i+=2) {
    if (i === enteredNumber) {
        console.log('Yikes! Skipping number ' + enteredNumber);

        continue;
    }

    console.log("Here is an odd number" + i);
}








