window.addEventListener("load", function() {
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (json) {
     console.log(json);
    });
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");
        let faultyItems = document.getElementById('faultyItems'); 
        let pilotStatus = document.getElementById('pilotStatus'); 
        let copilotStatus = document.getElementById('copilotStatus'); 
        let fuelStatus = document.getElementById('fuelStatus'); 
        let launchStatus = document.getElementById('launchStatus'); 
      
        formSubmission(document,list,pilot,copilot,fuelLevel,cargoLevel);
    });
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) { 
    response.json().then(function(json){ 
    const missionTarget = document.getElementById('missionTarget'); 
    missionTarget.innerHTML = ` 
    <ol> 
    <li>Name: ${json[index].name}</li> 
    <li>Diameter: ${json[index].diameter}</li> 
    <li>Star: ${json[index].star}</li> 
    <li>Distance from Earth: ${json[index].distance}</li> 
    <li>Number of Moons: ${json[index].moons}</li> 
    </ol> 
    <img src="${json[index].image}"> 
    `; 
    }); 
    }); 
    event.preventDefault(); 


    });