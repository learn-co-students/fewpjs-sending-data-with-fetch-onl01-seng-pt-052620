// // Add your code here

// let formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle"
// };



// let configObj = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(formData)
// };

function submitData(name, email){
  return fetch( 'http://localhost:3000/users', { 
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify( {
      name, 
      email
    } )
  })
  .then(function(response) {
    return response.json();
 })
  .then(function(json) {
   document.body.innerHTML = json.id
 })
 .catch(function(error) {
  document.body.innerHTML = error.message
  // alert("Bad things! Ragnarők!");
  console.log(error.message);
})

}


// fetch("http://localhost:3000/dogs", configObj)
// .then(function(response) {
//   return response.json();
// })
// .then(function(object) {
//   console.log(object);
// })
// .catch(function(error) {
//   alert("Bad things! Ragnarők!");
//   console.log(error.message);
// });
