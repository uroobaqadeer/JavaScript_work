var num = Math.random();
            console.log(num);
            document.write(num,"</br>");
        

            var num1 = (num * 2) +  1;
            console.log(num1);
            document.write(num1,"</br>");
        

            var num2 = Math.floor(num1);
            console.log(num2);
            document.write(num2,"</br>");
        

            if (num2 === 1) 
            {
                alert("Tails");
                document.write(num2);
            }
            else if (num2 === 2)
            {
                alert("Heads");
                document.write(num2);
            }