let a = 2;
let b = 1;
--a; // Result = 1
let c = --a - --b; // Result = 0
let d = --a - --b + ++b; // Result = 0
let e = --a - --b + ++b + b--; // Result = -1
document.write("<p>&emsp;&emsp;a is "+a+"</p>"+"<p>&emsp;&emsp;b is "+b+"</p>"+"<p>&emsp;&emsp;Result is "+e+"</p>");
