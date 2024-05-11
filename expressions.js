// Task :1 Take a number in a variable
var a = 10;

// Display the initial value of a
document.write("<p>The value of a is: " + a + "</p>");
// pre Increment a and display the result
++a;
document.write("<p>The value of ++a is: " + a + "<br>Now the value of a is: " + a + "</p>");

// post Increment a again and display the result
a++;
 document.write("<p>The value of a++ is: " + a + "<br>Now the value of a is: " + a + "</p>");
 // pre Decrement the value a and display the result
--a;
document.write("<p>The value of --a is: " + a + "<br>Now the value of a is: " + a + "</p>");

// post decrement a again and display the result
a--;;
 document.write("<p>The value of a-- is: " + a + "<br>Now the value of a is: " + a + "</p>");

 // Task : 2 
var a = 2, b = 1;
var result = --a - --b + ++b + b--;

console.log("a:", a); 
console.log("b:", b); 
console.log("result:", result); 

document.write("<p>a is: "+ a +" </p>");
document.write("<p>b is: "+ b +" </p>");
document.write("<p>result is: "+ result +" </p>");



// Task :3 Prompt the user to enter their name
        var userName = prompt("Please enter your name:");
// Greet the user
alert("Hello, " + userName + "! Welcome to my website.");

// Task :4 Prompt the user to enter a number
var userInput = prompt("Enter a number");

// If user input is not a valid number or is empty, default to 5
if (isNaN(number = userInput) || number === 0) {
    number = 5;
}
// Display the multiplication table
document.write("<p>Multiplication Table of " + number + "</p>");
for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}

// a) Take three subjects' names from the user
var subject1 = prompt("Enter the name of first subject:");
var subject2 = prompt("Enter the name of second subject:");
var subject3 = prompt("Enter the name of third subject:");

// b) Total marks for each subject is 100
var totalMarks = 100;

// c) Take obtained marks for the first subject from the user
var obtainedMarksSubject1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));

// d) Take obtained marks for the remaining 2 subjects from the user
var obtainedMarksSubject2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
var obtainedMarksSubject3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

        // Calculate total marks and percentage
        var totalObtainedMarks = obtainedMarksSubject1 + obtainedMarksSubject2 + obtainedMarksSubject3;
        var totalPercentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

        // Display the result in a table
        document.write("<h2>Subject Marks</h2>");
        document.write("<table>");
        document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
        document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarksSubject1 + "</td></tr>");
        document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarksSubject2 + "</td></tr>");
        document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarksSubject3 + "</td></tr>");
        document.write("</table>");
        document.write("<p>Total Marks Obtained: " + totalObtainedMarks + "</p>");
        document.write("<p>Percentage: " + totalPercentage.toFixed(2) + "%</p>");
