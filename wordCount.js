const speech = "You    are a good person. you   don't snore   at night"
let count = 0;
for(i=0;i<speech.length;i++){
   
    const char = speech[i];
    // console.log(char);
    if(char == " " && speech[i-1] != " "){
        count++;
    }
  
}
count++;
console.log(count);