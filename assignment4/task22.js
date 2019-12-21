
                 function greet(a)             
                 {
                     var str = prompt("Enter the sentence: ");
                       console.log(str);
                     var a = str.slice(0, 1);
                       console.log(a);
                     var b = str.slice(1, str.length);
                       console.log(b);
                     var c = a.toUpperCase();
                       console.log(c);
                     var e = alert(c + b);
                        console.log(e);
                 }
                    greet();