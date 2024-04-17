function onLoad() {

    startClock();
    let optionValues = get('/persons/options');
    let optionElement = document.getElementById("owner");
    optionValues.then(
        persons => persons.forEach(
            person => {
                let opt = document.createElement('option');
                opt.value = person.id;
                opt.innerHTML = person.name;
                optionElement.appendChild(opt);
            }
    ))
    .catch(error => console.log(error));
}

function validTail(string) {
    const regex = /^N[1-9]((\d{0,4})|(\d{0,3}[A-HJ-NP-Z])|(\d{0,2}[A-HJ-NP-Z]{2}))$/;
    return regex.test(string);
}

function registerAircraft() {

    const aircraft = {
        "brand" : document.getElementById("brand").value,
        "model" : document.getElementById("model").value,
        "tailNumber" : document.getElementById("tailNumber").value,
        "type" : document.getElementById("type").value,
        "owner" : Number(document.getElementById("owner").value)
    };

    if (!validTail(aircraft.tailNumber)) {
        window.alert("Invalid tail number.")
    }

    else {
        post('/aircrafts/register', aircraft)
        .then(response => {
            if (response.status === 404) {
                window.alert("Invalid 'Owner' entity");
            } 
            else if (response.status === 400) {
                window.alert("Filled information is invalid")
            }
            else {
                window.alert(aircraft.tailNumber + " submitted successfully");
                location.reload();
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

}

