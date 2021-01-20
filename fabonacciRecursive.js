function fabo(n){
    if(n == 0){
        return 0;
    }
    else if(n ==1){
        return 1;
    }
    else{
        return fabo(n-1) + fabo(n-2);
    }
}
var result = fabo(10);
console.log(result);