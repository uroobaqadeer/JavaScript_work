var num1=prompt("Enter the first number");
num1=Number(num1);
var num2=prompt("Enter the second number");
num2=Number(num2);
var operation=prompt("Which type of calculation(+,-,/,*,%) you will perform");
document.write("<h1>Calculator</h1>");
if(operation == "+"){
    document.write("Addtion of ",num1," and ",num2," = ",num1+num2,"<br>");
}
else if(operation == "-"){
    document.write("Substration of ",num1," and ",num2," = ",num1-num2,"<br>");
}
else if(operation == "*"){
    document.write("Multiplication of ",num1," and ",num2," = ",num1*num2,"<br>");
}

else if(operation == "/"){
    document.write("Division of ",num1," and ",num2," = ",num1/num2,"<br>");
}

else if(operation == "%"){
    document.write("Modulus of ",num1," and ",num2," = ",num1%num2);
}

