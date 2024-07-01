// Function to calculate grades
 function getGrade(marks){
    if(marks>79){
        return 'Your grade is A';
    }
    else if (marks>=60 && marks <=79){
        return 'Your grade is B';
    }
    else if (marks>49 && marks<=59){
        return 'Your grade is C';
    }
    else if (marks>=40 && marks<=50){
        return 'Your grade is D';
    }
    else{
        return 'Your grade is E';
    }
}

// prompt user for input and convert it to number data type
    let marks=Number(prompt("Kindly input your marks:"));
    // Use if statement and call function
    if(marks>=0 && marks<=100){ 
        getGrade(marks);
    }
    alert (getGrade(marks))
