var userName = prompt("Name:");
if (userName === "@" || "$" || "!" || "," || "%" || "#" || "*" || "&") {
alert("Invalid Username \n Avoid Special characters"); 
}
document.write(userName);         
console.log(userName); 
