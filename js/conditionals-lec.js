
var isRaining = false;

if (isRaining) {
    //show rainy icon
    alert('Grab an umbrella');
} else {

    alert("it is not raining");
}

var isHungry = prompt ("Are you hungry?");
console.log("The user says " + isHungry);


if (isHungry === "yes") {

    console.log(alert("let's get pizza!"));
}

else {

    console.log(alert("I guess I'll eat by myself then :( "));

}


//
var lightColor = prompt("WWhat is the color of the traffic light?");
console.log("The traffic light color is " + lightColor);


    if (lightColor === "green") {
        alert("Go!");
    } else if (lightColor === "yellow") {
        alert("Yield!");
    } else {
        alert("Stop!");
    }




function intersectionDecision(lightColor) {
var intersectionMessage;

    switch (lightColor) {
        case "green":
            intersectionMessage =  "Go";
            break;
        case "yellow":
            intersectionMessage = "Yield!";
            break;
        default:
            intersectionMessage = "STOP!";
            break;
    }


}

console.log(intersectionDecision("red"));




// if shopping is complete, the box is checked
// and the child will earn an extra $5 for a total of $10
//else not checked, child will remain at a $5 total earnings

// the user will click the dropdown menu to select the weather
//if "sunny" is chosen, a message indicating such will display
//else if "rainy" is chosen, a message indicating such will display
// else if "snowing" is chosen, a message indicating such will display
// else if "overcast" is chosen, a message indicating such will display
// else nothing is chosen, no message will display


//the user will click the drop down menu
//if black is chosen, the theme will change to black
//else nothing is chosen, the theme remains the default