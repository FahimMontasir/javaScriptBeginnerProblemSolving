function reverseString(str){
   let reverse ="";
    for (i=0; i<str.length;i++){
        let char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
const speech = "Hello I'm alien boss.";
var AliSpech = reverseString(speech);
console.log(AliSpech);