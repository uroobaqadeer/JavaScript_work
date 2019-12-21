var num = Math.random();
var num1= (num * 10) + 1;
var num2 = Math.floor(num1);
var input = prompt("Enter a number from 1-10");

if (input === num2) 
{
    alert("Congrats! You Won.");
}
else 
{
    alert("Try Again!");
}