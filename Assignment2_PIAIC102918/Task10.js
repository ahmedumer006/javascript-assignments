let correctPassword = "hondacivic2007";
let question = prompt("Enter your password: ");
if (question === null) {
    alert("Please Enter Your Password.");
} else if (question === correctPassword) {
    alert("Correct! The password you entered matches the original password");
} else if (question !== correctPassword) {
    alert("Incorrect Password")
}