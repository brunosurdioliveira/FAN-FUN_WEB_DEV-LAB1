/*
    Name: Bruno Surdi Oliveira
    Date: Jan 2020
    Purpose: Lab 1 - Shopping Cart 2020
*/

// Greeting
var greeting = "Welcome to Shopping Cart Simulator 2020!";
alert(greeting);

// Retrieve User input - using default string
var firstName = "";
var lastName = "";
var email = "";
var phone = "";

firstName = prompt("Enter your First Name:", "John");
lastName = prompt("Enter your Last Name:", "Smith");
email = prompt("Enter your email address:", "student@fanshaweonline.ca");
phone = prompt("Enter your Phone Number:", "(555)-555-5555");

// Tax Constant
const HST_TAX = 0.13;

// Retrieve Three item prices - using some values as default 
// Using 'parseFloat' to parse a string and return a floating point number
var firstPrice = 0;
var secondPrice = 0;
var thirdPrice = 0;

firstPrice = parseFloat(prompt("Enter the first item price:", 25.50));
secondPrice = parseFloat(prompt("Enter the second item price:", 6.75));
thirdPrice = parseFloat(prompt("Enter the third item price:", 17.35));

// Subtotal - using the 'Math.round' function to round the value (without tax)
var subtotal = Math.round((firstPrice + secondPrice + thirdPrice));

// tax of products - using the 'Math.round' function to round the tax value
var tax = Math.round((subtotal * HST_TAX));

// total with tax - rounding the final value with tax 
var total = Math.round(subtotal + tax);

// Output
console.log("Lab1();"); // beginning of output

// output the data - using a different way to connect strings 
// In my opinion, (``) is a cleaner way to concatenate, instead of using '+' signal
console.log(`Customer Full Name: ${firstName} ${lastName}`);
console.log(`Email: ${email}`);
console.log(`Phone: ${phone}`);

// Output prices - using other way of concatenation (with the '+' signal)
// Using '.toFixed(2)' to output to two decimal places
console.log("Item 1: $" + firstPrice.toFixed(2));
console.log("Item 2: $" + secondPrice.toFixed(2));
console.log("Item 3: $" + thirdPrice.toFixed(2));

// Output the subtotal without the tax 
console.log("Subtotal: $" + subtotal);

// Output the total of tax of the three item
console.log("Tax: $" + tax);

// Output the total with tax
console.log("Total: $" + total);

