var num=prompt("Enter any number: ");
num=Number(num);
if(num<0){
    document.write("<h3>The number is negative</h3>");
}
else if(num==0){
    document.write("<h3>The number is zero</h3>");
}
else{
    document.write("<h3>The number is positive</h3>");
}

