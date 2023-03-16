let question = Number(prompt("Enter time in 24 hour format: "));
if (question >= 0000 && question <= 1200){
    alert("Good Morning");
} else if (question >= 1201 && question <= 1659) {
    alert("Good Afternoon");
} else if (question >= 1700 && question <= 2059) {
    alert("Good Evening");
} else if (question >= 2100 && question <= 2359) {
    alert("Good Night");
}