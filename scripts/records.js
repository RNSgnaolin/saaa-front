function createTextElement(text) {
    let textElement = document.createElement("span");
    textElement.setAttribute("class", "bold");
    textElement.innerText = text;
    return textElement;
}

function createValueElement(value) {
    let valueElement = document.createElement("span");
    valueElement.innerText = `${value}`;
    return valueElement;
}

function clearResults() {
    document.getElementById("results").innerHTML = "";
}

function find(uri) {

    clearResults();
    let matchingRecords;
    let searchPattern = document.getElementById("searchPattern").value;
    
    if (searchPattern.length === 0) {
        matchingRecords = get(uri);
    } 
    else {
        matchingRecords = get(`${uri}?query=${searchPattern}`);
    }
    console.log(matchingRecords);
    printResults(matchingRecords);
}