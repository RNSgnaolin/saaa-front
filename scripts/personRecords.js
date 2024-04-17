function printResults(matchingRecords) {

    let i = 0;
    matchingRecords.then(persons => {

        if (persons.content.length === 0) {
            document.getElementById("results").innerHTML = "<div class=\"box\"><div class=\"title\">NO MATCHES FOUND</div></div>"
        }

        persons.content.forEach((person => {

        i++;
        let element = document.createElement("div");
        element.setAttribute("id", `person${i}`);
        element.setAttribute("class", "recordBox");

        element.appendChild(createTextElement("Name:"));
        element.appendChild(createValueElement(person.name));

        element.appendChild(createTextElement("Representative:"));
        element.appendChild(createValueElement(person.representative))

        element.appendChild(createTextElement("Phone:"));
        element.appendChild(createValueElement(person.phone));

        document.getElementById("results").appendChild(element);
    }))})
    .catch(error => console.error(error));
}