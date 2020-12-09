// Add your code here


function submitData(name, email) {
    
    let formData = {
    name: name,
    email: email
    };
// headers for 'content-type' and accept set to application/json
    let configObj = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept":"application/json"
    },
    body: JSON.stringify(formData)
};
// destination URL
return fetch("http://localhost:3000/users", configObj)
// use then to access the response object
.then(function(response){
    return response.json();
})
//second then to access newly converted object
.then(function(object){
// append to DOM
    let h2 = document.createElement('h2');
    h2.innerHTML = object.id;
    document.body.appendChild(h2);
    console.log(object);
})
// Catch for error messages
.catch(function(error){
    alert("Ooops! FIX ME!");
// append error messages to DOM
    let h3 = document.createElement('h3');
    h3.innerHTML = error.message;
    document.body.appendChild(h3);
    console.log(error.message);
    });
}