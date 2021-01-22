var marks = [10, 20, 40, 15, 14, 100, 30, 300, 40, 5, 11, 50];
var max = marks[0];

for (var i = 0; i < marks.length; i++) {
    var element = marks[i];
    if (element > max) {
        max = element;
    }
}
console.log(max);