var num = 7;
var check=prompt("Enter the any number to guess what's the secret number? ");
var result=Number(check);
if(result === num){
    document.write("<h3>Bingo! Correct answer. </h3>");
}
else if(result===6){
    document.write("<h3>Close enough to the correct answer.</h3>")
}
