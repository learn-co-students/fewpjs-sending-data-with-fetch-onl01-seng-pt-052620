// Add your code here

function submitData(userName, userEmail) {
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({ 
      name: userName,
      email: userEmail
    })
  })
  .then(resp => resp.json())
  .then(json => {
    const newId = document.createElement('p');
    const body = document.querySelector('body');
    console.log(json);
    newId.innerHTML = json['id'];
    body.appendChild(newId);
  })
  .catch(error => {
    const newId = document.createElement('p');
    const body = document.querySelector('body');
    newId.innerHTML = error.message;
    body.appendChild(newId);
  })
}