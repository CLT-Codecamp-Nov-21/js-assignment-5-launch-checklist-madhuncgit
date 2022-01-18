try {
    require('isomorphic-fetch');
} catch (e) {

}

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}



function validateInput(testInput) {
    if (testInput == '') {
        return 'Empty';
    } else if (isNaN(Number(testInput))) {
        return 'Not a Number';
    } else {
        return 'Is a Number';
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
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
           list.style.visibility = "visible";

        }
}

async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}


function pickPlanet(planets) {
    const index = Math.floor(Math.random() * planets.length);
    return planets[index];
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
   
   