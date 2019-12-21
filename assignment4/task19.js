           
                 var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
                 var date = new Date();
                     console.log(date);

                 var day = date.getDay();
                     console.log(day);

                 var current = week[day];
                     console.log(current);

                 var get = current.slice(0, 3);
                     alert(get);
                     document.write(get);
                     console.log(get);