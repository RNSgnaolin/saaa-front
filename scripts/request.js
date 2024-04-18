const url = "http://localhost:8080"; // Change this to the backend API url when deploying

function get(endpoint) {

    return fetch(`${url}${endpoint}`, {
        method: "GET",
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    })
        .then(response => response.json())
        .catch(error => {
            console.error('Error accessing endpoint ', error);
        });

}

function post(endpoint, body) {

    return fetch(`${url}${endpoint}`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-type": "application/json",
            "Authorization": localStorage.getItem("token")
        }
    });

}


