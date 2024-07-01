JavaScript Programs

This repository contains three JavaScript programs that address different challenges:

Student Grade Generator
Speed Detector
Net Salary Calculator
### How to Run the Code

Save the code: Save the JavaScript code in a file with a .js extension (e.g., salary_calculator.js).
Open in a browser: Open the HTML file associated with your code editor or a simple HTML file containing a <script> tag that references your JavaScript file. For example:
HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Salary Calculator</title>
</head>
<body>
    <script src="salary_calculator.js"></script>
</body>
</html>

Run the code: Once you've opened the HTML file in your browser, the JavaScript code will execute automatically when the page loads.
Explanation of Programs

1. Student Grade Generator

This program defines a function getGrade that takes the student's marks as input (between 0 and 100). It uses a series of if statements to determine the grade based on the following criteria:

A: Marks greater than 79
B: Marks between 60 and 79 (inclusive)
C: Marks between 49 and 59 (inclusive)
D: Marks between 40 and 49 (inclusive)
E: Marks less than 40
The program prompts the user for marks, validates the input (between 0 and 100), and then calls the getGrade function to display the corresponding grade using an alert.

2. Speed Detector

This program defines a function calculateDemeritPoints that takes the car's speed as input. It sets a speed limit of 70 km/h. The function calculates the excess speed (speed - speed limit) and uses conditional statements to determine the demerit points:

No demerit points if the speed is less than or equal to the limit.
1 demerit point for every 5 km/h above the limit (using Math.ceil to round up).
License suspension if demerit points exceed 12.
The program prompts the user for speed, converts it to a number, calls the calculateDemeritPoints function, and displays the result ( "Ok", "Points: X", or "License suspended") using both console.log and an alert.

3. Net Salary Calculator

This program defines several functions for calculating deductions and net salary:

nssf: Calculates NSSF deduction at 6% of gross pay.
nhif: Calculates NHIF deduction based on provided logic within the function.
paye: Calculates PAYE deduction based on tax brackets defined within the function.
netPay: Calculates the net salary by subtracting deductions from gross pay.
The program prompts the user for basic salary and benefits, calculates the gross salary (basic salary + benefits), and then calls the respective deduction functions. Finally, it calculates the net salary and displays the result using both console.log and an alert.

Note:

The nhif function uses a series of if statements to determine the NHIF deduction based on gross pay ranges. You might want to review and update these ranges based on current NHIF contribution rates.
The paye function uses similar logic with tax brackets to calculate PAYE deduction. Make sure these brackets reflect the latest tax structure in your country.