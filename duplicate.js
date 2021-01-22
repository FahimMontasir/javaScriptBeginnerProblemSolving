var namE = [1, 1, 2, 2];
var unique = [];
for (i=0;i<namE.length; i++){
    var element=namE[i];
    var index = unique.indexOf(element);
    if (index == -1){
        unique.push(element);
    }
}
console.log(unique);