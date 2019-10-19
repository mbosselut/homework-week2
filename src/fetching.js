// Display Luke's data, setup button for switch to Darth Vader
const getLuke = function () {
    fetch("https://swapi.co/api/people/1")
        .then(response => response.json())
        .then(myJson => {
            document.getElementById('apiData').innerHTML =
                "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>";
            document.getElementById('switchBtn').innerHTML = "DARTH VADER";
            document.getElementById('switchBtn').addEventListener('click', getDarth);
        });
}

// Display Darth Vader's data, setup button for switch to Luke
const getDarth = function () {
    fetch("https://swapi.co/api/people/4/")
        .then(response => response.json())
        .then(myJson => {
            document.getElementById('apiData').innerHTML =
                "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>";
            document.getElementById('switchBtn').innerHTML = "LUKE SKYWALKER";
            document.getElementById('switchBtn').addEventListener('click', getLuke);
        });
}

// Initialise page with Luke's data
getLuke();
