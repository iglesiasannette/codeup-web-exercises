//version one
// function wait(number) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//                  resolve();
//         }, number);
//     });
// }

// version two: function streamlined
function wait(number) {
    return new Promise((resolve) => {
        setTimeout(resolve, number);
    });
}


// console.log(wait); pending promise


wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));



//fetch requests

// fetch('https://swapi.co/api/people').then((response) => {
//      return response.json();
//     }).then((response) => {
//     console.log(response.results[0].name);
// });

//Create a function that accepts a GitHub username, and returns a promise that
// resolves with the date of the last commit
// that user made. Reference the github api documentation to achieve this.


function lastPushDate(username) {
        return fetch('https://api.github.com/users/' + username + '/events', {headers: {'Authorization': 'token c9bd0c1d8ad5fc9ca8f44138477993d9d370f2f5'}})
            .then(resolve => {
                return resolve.json();
            }).then((resolve) => {
            console.log(resolve[0].created_at);
            });
}



const request = lastPushDate('iglesiasannette');
console.log(request); // pending promise
request.then(console.log('Promise resolved!'));
// if resolved, will log "Promise resolved!" and "Here is your data: ..."









//
//
//
function mostRecentCommitDate(username) {
    return fetch('https://api.github.com/users/' + username + '/events', {headers: {'Authorization': 'token c9bd0c1d8ad5fc9ca8f44138477993d9d370f2f5'}})
        .then(resolve => resolve.json())
        .then((events) => {
            return events.filter(event => event.type === "PushEvent")[0].created_at;
        });
}

mostRecentCommitDate('iglesiasannette').then(date => console.log(new Date(date).toDateString()));

//
//
//
//
//
//
