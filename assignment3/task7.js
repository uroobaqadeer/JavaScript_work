var a = [10,20,4,40,60,70];
var b = [1,2,3,4,5,6,7,8,9,10];
var c=a.concat(b);
var d=[];
for(var i=0; i < c.length; i++){
    if(d.indexOf(c[i]) === -1) {
        d.push(c[i]);
     
    }
}
document.write(d);
