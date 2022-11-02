/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById("convert-btn")
let unitInput = document.getElementById("unit-input")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

convertBtn.addEventListener("click", function(){
    
    lengthEl.textContent = `${unitInput.value} meters = ${unitInput.value * meterToFeet} feet | ${unitInput.value} feet = ${unitInput.value / meterToFeet} meters`
    
    volumeEl.textContent = `${unitInput.value} liters = ${unitInput.value * literToGallon} gallons | ${unitInput.value} gallons = ${unitInput.value / literToGallon} liters`
    
    massEl.textContent = `${unitInput.value} kilos = ${unitInput.value * literToGallon} pounds | ${unitInput.value} pounds = ${unitInput.value / literToGallon} kilos`
})
