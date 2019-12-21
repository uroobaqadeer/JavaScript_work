function data(u_name, u_age)
                {
                    var name = prompt("Enter your Name:");
                    var age = prompt("Enter your Age");
                    var result = name.indexOf(age);
                        console.log(result);
                    var totalCount = 0;
                    while (result != -1)
                    {
                        totalCount ++;
                        result = nameOf(result, result + 1);
                    }
                    document.write("Occurrence of" + " " + age + " " + "=" +" " + totalCount);
                }
                data();