function check(){
    var basicpay =parseInt( document.getElementById("empPay").value);
    var hra = document.getElementById("empHra").value;
    var da = document.getElementById("empDa").value;
    var pf = document.getElementById("empPf").value;

    hra=basicpay*12/100;
    da=basicpay*13/100;
    pf=basicpay*15/100;
    
    document.getElementById("empHra").value = hra;
    document.getElementById("empDa").value = da;
    document.getElementById("empPf").value = pf;

    var grossPay = hra+da+basicpay;
    var netPay = grossPay-pf;

    document.getElementById("empGrosspay").value =  grossPay;
    document.getElementById("empNetpay").value = netPay;

   
}


function submit(){
    var outId = parseInt(document.getElementById("empId").value);
    var outName = document.getElementById("empName").value;
    var outBasic = document.getElementById("empBasic").value;
    var outPay = parseInt(document.getElementById("empPay").value);
    var outHra = parseInt(document.getElementById("empHra").value);
    var outDa = parseInt(document.getElementById("empDa").value);
    var outPf = parseInt(document.getElementById("empPf").value);
    var outGrosspay = parseInt(document.getElementById("empGrosspay").value);
    var outNetpay = parseInt(document.getElementById("empNetpay").value);

    document.write("<br>",outId);
    document.write("<br>",outName);
    document.write("<br>",outBasic);
    document.write("<br>",outPay);
    document.write("<br>",outHra);
    document.write("<br>",outDa);
    document.write("<br>",outPf);
    document.write("<br>",outGrosspay);
    document.write("<br>",outNetpay);
    
}
function checkValue()
{
    var valueId=document.getElementById("empName").value

    if((/[0-9]+/).test(valueId)==false)
    {
        document.getElementById("out").innerHTML=("");
    }
    else{
        document.getElementById("out").innerHTML=("Enter valid Id") 
    }
}