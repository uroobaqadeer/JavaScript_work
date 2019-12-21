var stud_name=["Ali","Zain","Sana"];
var score=[300,439,499];
for(var i=0;i<stud_name.length;i++){
    for(var j=0;j<score.length;j++){        
    var per=score[j]/500 * 100;
    document.write("Score of ",stud_name[i]," is",score[j],". Percentage: ",per,"% </br>");
    
}

}
   
