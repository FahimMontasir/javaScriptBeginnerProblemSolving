var numbers = [100, 200, 300];
var sum = 0;
for (var i = 0;i< numbers.length;i++){
    var element = numbers[i];
    sum = sum+element;
}
console.log(sum);
// function
function getArraySum(numbers){
    var sum =0;
    for ( var i = 0; i< numbers.length; i++){
        var element= numbers[i];
        sum = sum + element;
    }
    return sum;
}
var result = getArraySum(numbers);
console.log(result);
console.log(getArraySum([10, 20, 30]));