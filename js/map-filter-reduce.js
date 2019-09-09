"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//Use .filter to create an array of user
// objects where each user object has at least 3 languages in the languages array.

const threeLanguages = users.filter(user => user.languages.length >= 3);

console.log(threeLanguages);


//use .map to create an array of strings where each element is a user's email address

const userEmail = users.map(user => user.email);
console.log(userEmail);

//Use .reduce to get the total years of experience
// from the list of users. Once you get the total of years
// you can use the result to calculate the average.

const totalYearsExp = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0);

console.log(totalYearsExp);

console.log(totalYearsExp/users.length); /* average years of experience */

//Use .reduce to get the longest email from the list of users.

const longestEmail = users.reduce((longestUserEmail, user) => {
    if(longestUserEmail.length < user.email.length){
        longestUserEmail = user.email;
    }
    return longestUserEmail
}, '');

console.log(longestEmail);



//Use .reduce to get the list of user's names in a single string.
// Example: Your instructors are: ryan, luis, zach, fernando, justin.

let userNamesString = users.reduce((finalString, user, i) => {
    if(i < users.length -1){
         finalString += user.name + ", ";
    }
    else {
        finalString += `and ${user.name}.`;
    }
    return finalString;
}, "Your instructors are: ");

console.log(userNamesString);


//Use .reduce to get the unique list of languages from the list of users.

const uniqueLangs = users.reduce((listOfLangs, user) => {
    for (const lang of user.languages) {
        if (listOfLangs.indexOf(lang) === -1){
            listOfLangs.push(lang);
        }
    }
    return listOfLangs;
}, []);

console.log(uniqueLangs);


//test functions number #1
const testArray = [1, 2, 3];

const mapOutput = testArray.map(number  => {
    return number + 1;
});

console.log(mapOutput);

//test function number #2

const filterOutput = testArray.filter(element => {
    return element !== 2;
});

console.log(filterOutput);


//test function #3

const reduceOutput = testArray.reduce((accumulator, element) => {
    return accumulator + element;
}, 0);

console.log(reduceOutput);

//the following use actual array methods
// #4. test array method

const arr = [1, 2, 3];

const mapMethodOutput = arr.map(element => {
    return element + 1;
});

console.log(mapMethodOutput);


//#5. test array method
const filterMethodOutput = arr.filter(element => {
    return element !== 2;
});

console.log(filterMethodOutput);

//#6
const reduceMethodOutput = arr.reduce((accumulator, element) => {
    return accumulator + element;
}, 0);

console.log(reduceMethodOutput);