const getLuke = function () {
    fetch("https://swapi.co/api/people/1") // make the request
        .then(response => response.json()) // convert response to json
        .then(myJson => { // display data in the browser
            document.getElementById('apiData').innerHTML =
                "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>";
            document.getElementById('switchBtn').innerHTML = "DARTH VADER";
            document.getElementById('switchBtn').addEventListener('click', getDarth);
        });
}

const getDarth = function () {
    fetch("https://swapi.co/api/people/4/") // make the request
        .then(response => response.json()) // convert response to json
        .then(myJson => { // display data in the browser
            document.getElementById('apiData').innerHTML =
                "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>";
            document.getElementById('switchBtn').innerHTML = "LUKE SKYWALKER";
            document.getElementById('switchBtn').addEventListener('click', getLuke);
        });
}

getLuke();
