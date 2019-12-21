function data(a, b, c)
                {
                        var num1 = prompt("Enter a Number");
                        var num2 = prompt("Enter a Number");
                        var operator = prompt ("Enter a Operator");

                        if (operator === '+'){

                        
                            console.log((Number(num1)+Number(num2)));
                            document.write((Number(num1)+Number(num2)));
                        }

                        else if (operator === '-'){
                            console.log(num1-num2);
                            document.write(num1-num2);
                        }
                            

                        else if (operator === '*'){
                            console.log(num1*num2);
                            document.write(num1*num2);
                        }
                            


                        else if (operator === '/'){
                            console.log(num1/num2);
                            document.write(num1/num2);
                        }

                        else if (operator === '%'){
                            console.log(num1%num2);
                            document.write(num1%num2);
                        }

                }
                    data();