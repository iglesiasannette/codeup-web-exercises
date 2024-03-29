(function(){


"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 * Can you refactor your code to use functions?
 */
//

function evalUserNumber(userInput) {

    if (userInput % 2 === 1) {
        return "Your number is odd";
    } else if (userInput % 2 === 0) {
        return "Your number is even";


    }
}


function numberPlusOneHundred(userInput){
    return "Your number plus 100 is " + (+userInput + 100);

}


function numberNegOrPos(number){
    if (+number > 0){
    return "Your number is positive";
    } else {
    return "Your number is negative";
    }

}

function isANumber(userInput){
        if (isNaN(userInput)){
            return "Your number is not a number";
        } else {
            return "Your number is a number";
        }

    }


//***
var userInput;

var okay = confirm("Would you like to enter a number?");
console.log("The user says yes");


if (okay) {
    userInput = prompt("Enter a number:");
        if (isNaN(userInput)){
            alert(isANumber(userInput));
        } else {


    alert(evalUserNumber(userInput));
    alert(numberPlusOneHundred(userInput));
    alert(numberNegOrPos(userInput));
}
}else {
    alert("okay, good bye");
}

//
//

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];


function analyzeColor(colors) {
    if (colors === "blue") {
        return "blue is the color of the sky";
    } else if (colors === "red") {
        return "Strawberries are red";
    } else if (colors === "cyan") {
        return "I don't know anything about cyan";
    } else if (colors === "orange") {
        return "orange is the my favorite bright color";
    } else if (colors === "yellow") {
        return "bananas are yellow";
    } else if (colors === "green"){
        return "grass is green";
    } else if (colors === "indigo"){
        return "indigo is a luxe color";
    } else if (colors === "violet"){
    return "violet is both a pretty color AND name";
   } else {
    return "color is not defined";
}

}

console.log(analyzeColor("yellow"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */



  function analyzeColorSwitch(colors) {
    switch (colors) {
        case "blue":
            return ("blue is the color of the sky");
        case "red":
            return ("Strawberries are red");
        case  "cyan":
            return ("I don't know anything about cyan");
        case "orange":
            return ("orange is the my favorite bright color");
        case "yellow":
            return ("bananas are yellow");
        case  "green":
            return ("grass is green");
        case "indigo":
            return ("indigo is a luxe color");
        case "violet":
            return ("violet is both a pretty color AND name");
    }
}
console.log(analyzeColorSwitch("violet"));


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var colors = prompt("Type in the name of a color:");
alert(analyzeColor(colors));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


function caclulateTotal(luckyNumber, totalAmount){
    if (luckyNumber === 0) {
        return "You don't get a discount";
    } else if (luckyNumber === 1) {
        var total = totalAmount - (totalAmount * .10);
        return "You get a 10% discount! Your new total is " + total;
    } else if (luckyNumber === 2) {
        var total = totalAmount - (totalAmount * .25);
        return "You get a 25% discount! Your new total is " + total;
    } else if (luckyNumber === 3) {
        var total = totalAmount - (totalAmount * .35);
        return "You get a 35% discount! Your new total is " + total;
    } else if (luckyNumber === 4) {
        var total = totalAmount - (totalAmount * .50);
        return "You get a 50% discount! Your new total is " + total;
    } else if (luckyNumber === 5){
        return "Your purchase if free!";
    } else {
        return "you dont get a discount";
    }

}

console.log(caclulateTotal(4, 75));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
var luckyNumber = Math.floor(Math.random() * 6);

var randomNumber = prompt("What is the total of your bill?");


    function random(luckyNumber, totalAmount){
        if (luckyNumber === 0) {
            alert("Your lucky number was " + luckyNumber + ". You don't get a discount");
        } else if (luckyNumber === 1) {
            var total = totalAmount - (totalAmount * .10);
            alert("Your lucky number was " + luckyNumber + ". Your total is " + total);
        } else if (luckyNumber === 2) {
            var total = totalAmount - (totalAmount * .25);
            alert("Your lucky number was " + luckyNumber + ". Your total is " + total);
        } else if (luckyNumber === 3) {
            var total = totalAmount - (totalAmount * .35);
            alert("Your lucky number was " + luckyNumber + ". Your total is " + total);
        } else if (luckyNumber === 4) {
            var total = totalAmount - (totalAmount * .50);
            alert("Your lucky number was " + luckyNumber + ". Your total is " + total);
        } else if (luckyNumber === 5){
            alert ("Your purchase if free!");
        } else {
            alert("you dont get a discount");
        }

    }


})();