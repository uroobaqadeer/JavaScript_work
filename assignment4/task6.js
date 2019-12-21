var str = "the quick brown fox jumps over the lazy dog";
         var a = "the";
         var index = text.indexOf(a);
         var b = 0;
         while ( index != -1)
         {
             b++;
             index = text.indexOf(a, index + 1);
         }
         alert("It occur =" + " " + b + " " + "times.");