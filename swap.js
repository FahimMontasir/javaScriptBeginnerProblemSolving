var a = 10;
var b = 15;
console.log("before swap", "a =", a, " b =", b);
var temp = a;
a = b;
b = temp;
console.log("after swap", "a=", a, "b=", b);
//another way to do swap
var x = 10;
var y = 15;
x = x + y;
y = x - y;
x = x - y;
console.log("after swap","x=",x, "y=",y);
//javascript method
var p = 100;
var q = 200;
[p,q]=[q,p];
console.log("after swap","p=",p,"q=",q);