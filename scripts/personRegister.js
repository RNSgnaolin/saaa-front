function registerPerson() {

    const person = {
        "name" : document.getElementById("name").value,
        "representative" : document.getElementById("representative").value,
        "phone" : Number(document.getElementById("phone").value)
    };

    post('/persons/register', person)
    .then(response => {

        if (response.status === 400) {
            window.alert("Filled information is invalid");
        }
        else {
            window.alert(person.name + " submitted successfully");
            location.reload();
        }

    })

}