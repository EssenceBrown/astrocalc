

var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
];



planets.forEach((planetsName)=> {
    let select = document.getElementById ("planets")
    let option = document.createElement("option");
    option.value = planetsName[0];
    option.innerHTML = planetsName[0];
    select.appendChild(option);

}
)
function calculateWeight(weight, planetsName) {
 // 2. Write the code to return the correct weight
 
for(let i=0; i < planets.length; i++){
if( planetsName == planets[i][0]){
   return weight * planets[i][1];
}
}
}

function handleClickEvent(e){
var userWeight = document.getElementById('user-weight').value;
var planetsName = document.getElementById('planets').value;
var result = calculateWeight(userWeight, planetsName)
document.getElementById('output').innerHTML = `If you were on ${planetsName}, you would weigh ${result}lbs!` ;
//console.log("inside handle click ")

}


