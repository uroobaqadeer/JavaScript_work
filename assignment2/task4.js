var obt_marks=prompt("Enter your obtained marks in 3 subjects");
var total_marks=prompt("Enter total marks");
var per=obt_marks/total_marks * 100;
document.write("<h1>Marks Sheet</h1><br>");
if(per>=80){
    document.write("<Total marks : " ,total_marks,"<br>");
    document.write("Marks obtained : " ,obt_marks,"<br>");
    document.write("Percentage : " ,per,"<br>");
    document.write("Grade : A-one <br>");
    document.write("Total marks : Excellent");

}
else if(per>=70){
    document.write("Total marks : " ,total_marks,"<br>");
    document.write("Marks obtained : " ,obt_marks,"<br>");
    document.write("Percentage : " ,per,"<br>");
    document.write("Grade : A <br>");
    document.write("Total marks : Good");

}
else if(per>=60){
    document.write("Total marks : " ,total_marks,"<br>");
    document.write("Marks obtained : " ,obt_marks,"<br>");
    document.write("Percentage : " ,per,"<br>");
    document.write("Grade : B <br>");
    document.write("Total marks : You need to improve");

}
else{
    document.write("Total marks : " ,total_marks,"<br>");
    document.write("Marks obtained : " ,obt_marks,"<br>");
    document.write("Percentage : " ,per,"<br>");
    document.write("Grade : Fail <br>");
    document.write("Total marks : Sorry");

}