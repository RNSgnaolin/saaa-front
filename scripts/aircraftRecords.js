function printResults(matchingRecords) {

    let i = 0;
    matchingRecords.then(aircrafts => {

        if (aircrafts.content.length === 0) {
            document.getElementById("results").innerHTML = "<div class=\"box\"><div class=\"title\">NO MATCHES FOUND</div></div>"
        }

        aircrafts.content.forEach((aircraft => {

        i++;
        let element = document.createElement("div");
        element.setAttribute("id", `aircraft${i}`);

        if (aircraft.validTailNumber) {
            element.setAttribute("class", "record-element");
        }
        else {
            element.setAttribute("class", "record-element-red");
        }

        element.appendChild(createTextElement("Registrant:"));
        element.appendChild(createValueElement(aircraft.owner));

        element.appendChild(createTextElement("Tail number:"));
        element.appendChild(createValueElement(aircraft.tailNumber))

        element.appendChild(createTextElement("Callsign:"));
        element.appendChild(createValueElement(aircraft.callsign))

        element.appendChild(createTextElement("Agency Type:"));
        element.appendChild(createValueElement(aircraft.type));

        element.appendChild(createTextElement("Aircraft Brand:"));
        element.appendChild(createValueElement(aircraft.brand));

        element.appendChild(createTextElement("Aircraft Model:"));
        element.appendChild(createValueElement(aircraft.model));

        document.getElementById("results").appendChild(element);
    }))})
    .catch(error => console.error(error));

}