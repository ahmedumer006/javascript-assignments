let question = prompt("Enter a number ranging fron 1 to 10:");
secretNumber = 6;
if (question == secretNumber) {
    alert("Bingo! Correct Answer.");
} else if (question == secretNumber + 1) {
    alert ("Close enough to the correct answer.");
}
