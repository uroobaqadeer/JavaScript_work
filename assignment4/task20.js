var day = new Date();
console.log(day);

var date = day.getFullYear();
console.log(date);

var diff = date - 100;
console.log(diff);    

var month = day.getMonth();
console.log(month);

var arr = [ "January", "February", "March", "April", "May", "June", "July",
           "August", "September", "October", "November", "December"];  

var month1 = arr[month];
console.log(month1); 

var date1 = day.getDate();
console.log(date1);
document.write(date1 + " " + month1 + " " + diff);
