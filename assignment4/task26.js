var num = prompt("Enter number");
                    switch(num)
                    {
                        case num < 0 :
                        document.write("The number is ", num, " = Negative");
                        console.log("The number is ", num, " = Negative");
                        break;
                        
                        case num > 0 :
                        document.write("The number is ", num, " = Positive");
                        console.log("The number is ", num, " = Positive");
                        break;

                        default:
                        alert("No. is 0");
                    }