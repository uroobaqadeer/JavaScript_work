var pwd = "abc@7890";
var user_pwd=prompt("Enter your passward");
if(!user_pwd){
    alert("Please enter your password.");
}
else if(pwd===user_pwd){
    document.write("<h3>Correct! the password you entered matches the original password.</h3>");
}
else{
    document.write("<h3>Incorrect password.</h3>");
}



