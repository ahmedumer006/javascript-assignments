let intialValue;
document.write("<h3>&emsp;&emsp;Value after variable declaration is "+intialValue+"</h3>");
intialValue = 5;
document.write("<h3>&emsp;&emsp;Intial Value is: "+intialValue+"</h3>");
intialValue++;
document.write("<h3>&emsp;&emsp;Value after increment is: "+intialValue+"</h3>");
intialValue = intialValue++ + intialValue;
document.write("<h3>&emsp;&emsp;Value after addition is: "+intialValue+"</h3>");
intialValue--;
document.write("<h3>&emsp;&emsp;Value after decrement is: "+intialValue+"</h3>");
intialValue = intialValue-- % 3;
document.write("<h3>&emsp;&emsp;The remainder is: "+intialValue+"</h3>");

