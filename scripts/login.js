// Placeholder pending development of Spring Security in the API

function requestLogin(endpoint) { 
    const user = {
        "login" : document.getElementById("login").value,
        "password" : document.getElementById("password").value
    };

    fetch(`${url}${endpoint}`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",      
        },
        body: JSON.stringify(user)
    }).then(response => {
        if (response.status === 200) {
            document.cookie = 'sessionToken='+response.body()
            window.location.href = "../index.html"
        }
        else if (response.status === 403) {
            window.alert("Username or password are incorrect")
        }
    });

}