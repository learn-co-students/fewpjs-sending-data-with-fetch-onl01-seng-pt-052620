// Add your code here
// const destinationURL = "http://localhost:3000/dogs"

// const { config } = require("chai")

// let formData = {
//     dogName: "Ollie",
//     dogBreed: "Lhasa Apso"
// }

// let configObj = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
// }

// fetch(destinationURL, configObj);

// fetch("http://localhost:3000/dogs", configObj)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(object) {
//     console.log(object);
//   });

function submitData(name, email) {
    let destination = "http://localhost:3000/users"
    let formData = {
        name: name,
        email: email
    }
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }
    return fetch(destination, configObj)
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            document.body.innerHTML = object.id;
        })
        .catch(function (object) {
            document.body.innerHTML = object.message
        })
}

// In submitData, write a valid POST request to http://localhost:3000/users using fetch(). This request should include:

// The destination URL
// Headers for 'Content-Type' and 'Accept' set to 'application/json'
// A body with the name and email passed in as arguments to submitData. These should be assigned to name and email keys within an object. This object should then be stringified.