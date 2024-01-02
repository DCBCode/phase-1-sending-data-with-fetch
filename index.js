function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
    .then(response => response.json())
    .then(data => {
      const id = data.id;
      const idElement = document.createElement('p');
      const idText = document.createTextNode(`New ID: ${id}`);
      idElement.appendChild(idText);
      document.body.appendChild(idElement);
    })
    .catch(error => {
      const errorElement = document.createElement('p');
      const errorText = document.createTextNode(`Error: ${error.message}`);
      errorElement.appendChild(errorText);
      document.body.appendChild(errorElement);
    });
  }
  