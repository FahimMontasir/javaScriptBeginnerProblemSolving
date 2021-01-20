// inch to feet calculation
function inchToInch(inch){
    var feet = inch / 12;
    return feet;
}
var inchArray = [400, 200, 600];
var antArray = inchToInch(inchArray[2]);
console.log(antArray);
var uncleFeet = inchToInch(156);
console.log(uncleFeet);