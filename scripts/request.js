// GET and POST requests for the API. Session Token is fetched and stored in login.js

const url = "http://localhost:8080"; 

function getSessionToken() {
    return document.cookie
    .split("; ")
    .find((row) => row.startsWith("sessionToken="))
    .split("=")[1];
}

function get(endpoint) {

    return fetch(`${url}${endpoint}`, {
        method: "GET",
        headers: {
            "Authorization": getSessionToken()
        }
    }).then(response => {
            if (response.status() == 403)
                window.location.href = "../links/login.html"
            else 
                response.json()
    }).catch(error => {
            console.error('Error accessing endpoint ', error);
        });
}

function post(endpoint, body) {

    return fetch(`${url}${endpoint}`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-type": "application/json",
            "Authorization": getSessionToken()
        }
    }).then(response => {
            if (response.status() == 403) {
                window.location.href = "../links/login.html"
            }
        });
}


