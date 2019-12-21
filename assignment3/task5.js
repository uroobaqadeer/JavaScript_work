var a=[2,4,6,2,"b",4,"b",9,"b",6];
document.write("<b>Before:</b> <br>",a,"<br>");
var b=[];
for(var i=0; i < a.length; i++){
    if(b.indexOf(a[i]) === -1) {
        b.push(a[i]);
     
    }
}
document.write("<b>After:</b> <br>",b);
