    try{
        require('isomorphic-fetch');
    } catch (e){
        //doNothing
    }
    function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
        let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
                            <h2>Mission Destination</h2>
                            <ol>
                            <li>Name: ${name}</li>
                            <li>Diameter: ${diameter}</li>
                            <li>Star: ${star}</li>
                            <li>Distance from Earth: ${distance}</li>
                            <li>Number of Moons: ${moons}</li>
                            </ol>
                            <img src='${imageUrl}'>
                    `;
    }

    function validateInput(testInput) {
        if (testInput === "") {
            return "Empty";
        } else if (isNaN(Number(testInput))) {
            return "Not a Number";
        } else {
            return "Is a Number";
        }
    }

    function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {


        let fuelStatus = document.getElementById("fuelStatus");
        let cargoStatus = document.getElementById("cargoStatus");
        let launchStatus = document.getElementById("launchStatus");
        let pilotStatus = document.getElementById("pilotStatus");
        let copilotStatus = document.getElementById("copilotStatus");
        
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
        list.style.visibility = "visible";
    }

    async function myFetch() {
        let planetsReturned;
        planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
            return response.json();
        });
        return planetsReturned;
    }

    function pickPlanet(planets) {
        let selectedPlanet = Math.floor(Math.random() * planets.length-1);
        return planets[selectedPlanet]; 
    }
    try{
    module.exports.addDestinationInfo = addDestinationInfo;
    module.exports.validateInput = validateInput;
    module.exports.formSubmission = formSubmission;
    module.exports.pickPlanet = pickPlanet; 
    module.exports.myFetch = myFetch;
    } catch (e){
        //doNothing
    }