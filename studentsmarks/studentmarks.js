function valid()
{
    var roll = parseInt(document.getElementById("rollno").value);
    var nam = document.getElementById("name").value;
    var mk1 = parseInt(document.getElementById("markOne").value);
    var mk2 = parseInt(document.getElementById("markTwo").value);
    var mk3 = parseInt(document.getElementById("markThree").value);    

    document.write("student Rollno",roll);
    document.write("<br>student Name",nam);
    document.write("<br>student Markone",mk1);
    document.write("<br>student Marktwo",mk2);
    document.write("<br>student Markthree ",mk3);

    var total=(mk1+mk2+mk3);
    document.write("<br>student Totalmark",total);


}