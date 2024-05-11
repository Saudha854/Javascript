// Task :1 a) Declare a variable called age and assign your age.
   var age = 20; 

// Display your age in an alert box
alert("My age is: " + age);

// Task : 2 Declare and initialize a variable to keep track of the number of visits
var visitCount = 0;

// Check if localStorage is supported by the browser
if (typeof(Storage) !== "undefined") {
    // If localStorage is supported, check if visitCount is already stored
    if (localStorage.visitCount) {
        // If visitCount is stored, retrieve its value
        visitCount = parseInt(localStorage.visitCount);
    }
    // Increment the visitCount by 1 for the current visit
    visitCount++;
    // Store the updated visitCount in localStorage
    localStorage.visitCount = visitCount;
} else {
    // If localStorage is not supported, fallback to cookies or other methods
    // This example does not cover fallback methods
}

// Display the number of visits on the web page
document.write("<p>You have visited this site " + visitCount + " times.</p>");

// Task : 3 Declare a variable called birthYear and assign your birth year to it
        var birthYear = 2022; 
        document.write("<p>My birth year is " + birthYear + ".</p>");

// Task :4 a)Store visitor's information in variables
var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 5;

// b)Display the message in the browser
document.write("<p>" + visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.</p>");








