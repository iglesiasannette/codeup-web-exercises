
//Write a JavaScript function to convert degrees to radians.
function degrees_to_radians(degrees)
{
    var pi = Math.PI;
    return degrees * (pi/180);
}

console.log(degrees_to_radians(45));


// Write a JavaScript function to convert radians to degrees.
function radians_to_degrees(radians)
{
    var pi = Math.PI;
    return radians * (180/pi);
}

console.log(radians_to_degrees(0.7853981633974483));

// Write a function named invertSign(number) that returns a negative version
// of a postive number, a positve version of negative, and false for all else.

//Math.abs(num) => Always positive
// -Math.abs(num) => Always negative

