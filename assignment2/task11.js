var time=Number(prompt("What time is it?","1900"));
if(time>=0000 && time<1200){
    document.write("<h1>Good morning!</h1>")
}
else if(time>=1200 && time<1700){
    document.write("<h1>Good afternoon!</h1>")
}
else if(time>=1700 && time<2100){
    document.write("<h1>Good evening!</h1>")
}
else if(time>=2100 && time<2359){
    document.write("<h1>Good night!</h1>")
}
