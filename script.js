// Write your JavaScript code here!

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
      
        if (pilotName.value == ""|| copilotName.value == "" || fuelLevel.value == "" || cargoMass.value == "") { 
            alert("All fields are required!"); 
            event.preventDefault(); 
        }
        if (isNaN(pilotName.value) || isNaN(copilotName.value)){ 
            pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready`; 
            copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready`; 
            } 
            else{ 
           alert("Pilot & Co-pilot need to be a valid name"); 
           event.preventDefault(); 
             } 
           if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)){ 
            alert("Invalid Fuel level & cargo mass value"); 
            event.preventDefault(); 
            } 
           else{ 
            if(fuelLevel.value < 10000){ //  
           fuelStatus.innerHTML = `Fuel level too low for Launch`; 
           launchStatus.innerHTML = `Shuttle not ready for launch`; 
               }else{ 
               fuelStatus.innerHTML = `Fuel level high enough for launch`; 
               } 
               
               if(cargoMass.value > 10000){  
               cargoStatus.innerHTML = `Cargo mass too heavy for Launch`; 
               launchStatus.innerHTML = `Shuttle not ready for launch`; 
               }else{ 
               cargoStatus.innerHTML = `Cargo mass low enough for launch`; 
               } 
               if(fuelLevel.value >= 10000 && cargoMass.value <= 10000) {  
               launchStatus.innerHTML = `Shuttle is ready for launch`; 
               fuelStatus.innerHTML = `Fuel level high enough for launch`; 
               cargoStatus.innerHTML = `Cargo mass low enough for launch`; 
               } 
            }
    

        fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) { 
        response.json().then(function(json){ 
        const missionTarget = document.getElementById('missionTarget'); 
        const index = Math.floor(Math.random() * json.length - 1); 
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

    });
 event.preventDefault();
