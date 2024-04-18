function requestLogin(endpoint) { // Placeholder for now, check back for actual implementation, gonna change structure of pages around a bit
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
            localStorage.setItem("token", response.body())
            window.location.href = "../index.html"
        }
        else if (response.status === 403) {
            window.alert("Username or password are incorrect")
        }
    });

}

