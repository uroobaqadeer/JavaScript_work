var color=["red","pink","orange","black","yellow","white","brown"];
document.write(" <strong>Array</strong><br>",color,"<br>");
var input=prompt("Enter color you want to add to the beginning: ");
color.unshift(input);
document.write(" <strong>First updated array</strong><br>",color,"<br>");
var input=prompt("Enter color you want to add at the end: ");
color.push(input);
document.write("<strong>Second updated array</strong><br>",color,"<br>");
color.unshift("grey","purple");
document.write("<strong>Third updated array</strong><br>",color,"<br>");
color.shift();
document.write("<strong>After deletion of an updated array</strong><br>",color,"<br>");
color.pop();
document.write("<strong>After deletion of an updated array</strong><br>",color,"<br>");
var input=Number(prompt("Enter index number you want to add that: "));
var name=prompt("Enter color name you want to add that index: ")
color.splice(input,0,name);
document.write("<strong>Updated array element at desired position </strong><br>",color,"<br>");
var input=Number(prompt("Enter index number you want to delete that color: "));
var name=prompt("How many colors you want to delete from array list: ")
color.splice(input,name);
document.write("<strong>Updated array after deletion</strong><br>",color,"<br>")