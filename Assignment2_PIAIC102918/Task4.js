let question = Number(prompt("Enter Your Marks Here:"));
MarksObtained = question;
totalMarks = 300;
percent = (question/totalMarks)*100;
gradeAone = "Grade: A-one";
gradeA = "Grade: A";
gradeB = "Grade: B";
failed = "Grade: Fail";
remarks1 = "Remarks: Excellent";
remarks2 = "Remarks: Good";
remarks3 = "Remarks: You need to improve";
remarks4 = "Remarks: Sorry";
document.write("<p>&emsp;&emsp;Total Marks: "+totalMarks+"</p><p>&emsp;&emsp;Marks Obtained: "+MarksObtained+"</p>");
if (percent >= 80) {
  document.write("<p>&emsp;&emsp;Percentage: "+percent+"%</p><p>&emsp;&emsp;"+gradeAone+"</p><p>&emsp;&emsp;"+remarks1+"</p>");
} else if (percent >= 70) {
  document.write("<p>&emsp;&emsp;Percentage: "+percent+"%</p><p>&emsp;&emsp;"+gradeA+"</p><p>&emsp;&emsp;"+remarks2+"</p>");
} else if (percent >= 60) {
  document.write("<p>&emsp;&emsp;Percentage: "+percent+"%</p><p>&emsp;&emsp;"+gradeB+"</p><p>&emsp;&emsp;"+remarks3+"</p>");
} else if (percent < 60) {
  document.write("<p>&emsp;&emsp;Percentage: "+percent+"%</p><p>&emsp;&emsp;"+failed+"</p><p>&emsp;&emsp;"+remarks4+"</p>");
}
