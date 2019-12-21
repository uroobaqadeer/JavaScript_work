var color = prompt ("Enter the color");
                        switch(color)
                        {
                            case "red":
                            console.log("Must Stop!");
                            document.write("Must Stop!");
                            break;

                            case "yellow":
                            console.log("Ready to move...");
                            document.write("Ready to move...");
                            break;

                            case "green":
                            console.log("Go now!");
                            document.write("Go now!");

                            default:
                            console.log("Invalid color!");
                            document.write("Invalid color!");
                        } 
